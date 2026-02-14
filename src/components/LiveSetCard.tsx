import type { LiveSetEvent, LiveSetStatus } from '@/types/live';

type LiveSetCardProps = {
  event: LiveSetEvent;
  currentStatus: LiveSetStatus;
};

function safeEmbedHost(url: string): string {
  try {
    const parsed = new URL(url);
    return parsed.hostname;
  } catch {
    return 'invalid URL';
  }
}

function deriveEmbedUrl(event: LiveSetEvent): string {
  try {
    const parsed = new URL(event.embedUrl);

    if (event.platform === 'youtube') {
      if (event.embedUrl.includes('/embed/')) {
        return event.embedUrl;
      }

      if (parsed.hostname.includes('youtu.be') && parsed.pathname.length > 1) {
        return `https://www.youtube.com/embed${parsed.pathname}`;
      }

      if (parsed.searchParams.has('v')) {
        return `https://www.youtube.com/embed/${parsed.searchParams.get('v')}`;
      }
    }

    return event.embedUrl;
  } catch {
    return '';
  }
}

export default function LiveSetCard({ event, currentStatus }: LiveSetCardProps) {
  const embedUrl = deriveEmbedUrl(event);
  const hasLandingUrl = (() => {
    if (!event.landingUrl) {
      return false;
    }

    try {
      new URL(event.landingUrl);
      return true;
    } catch {
      return false;
    }
  })();

  return (
    <article className="card">
      <p className="state-note">
        {event.platform.toUpperCase()} · {event.timezone} · {currentStatus.toUpperCase()}
      </p>
      <h3>{event.title}</h3>
      <p className="copy">{event.description ?? 'No description provided.'}</p>
      <p className="state-note">Host: {safeEmbedHost(event.embedUrl)}</p>
      <p className="state-note">DJ: {event.djAlias}</p>
      <p className="state-note">Started from: {new Date(event.scheduledAt).toLocaleString()}</p>

      <div className="mt-3">
        {currentStatus === 'live' || currentStatus === 'upcoming' ? (
          embedUrl ? (
            <iframe
              src={embedUrl}
              title={event.title}
              width="100%"
              height="250"
              style={{ border: 0, borderRadius: 12, maxWidth: 680 }}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="empty-state">
              Embed URL is not ready for this stream. Confirm the entry in /src/data/live-schedule.ts.
            </div>
          )
        ) : (
          <div className="empty-state">This set has ended. Archive entry preserved for planning references.</div>
        )}
      </div>

      <p className="state-note">
        {hasLandingUrl ? (
          <a className="btn btn-primary" href={event.landingUrl} target="_blank" rel="noreferrer">
            Open on platform
          </a>
        ) : (
          <span className="state-note">Add a landing link in `/src/data/live-schedule.ts`.</span>
        )}
      </p>
    </article>
  );
}
