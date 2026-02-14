import { liveSchedule } from '@/data/live-schedule';
import type { LiveSetEvent, LiveSetStatus } from '@/types/live';
import LiveSetCard from './LiveSetCard';

function toStatus(event: LiveSetEvent): LiveSetStatus {
  const now = Date.now();
  const start = new Date(event.scheduledAt).getTime();
  const end = start + event.durationMinutes * 60 * 1000;

  if (Number.isNaN(start)) {
    return event.status;
  }

  if (now >= start && now <= end) {
    return 'live';
  }

  if (now < start) {
    return 'upcoming';
  }

  return 'ended';
}

export default function LiveSetList() {
  const sortedEvents = [...liveSchedule.events].sort(
    (a, b) => new Date(a.scheduledAt).getTime() - new Date(b.scheduledAt).getTime()
  );

  return (
    <section className="section">
      <h2 className="section-title">DJ set schedule</h2>
      <p className="copy">
        Embed-first scheduling for now: this lets you show current and upcoming shows with low operational overhead.
      </p>
      <div className="grid-two">
        {sortedEvents.map((event) => (
          <LiveSetCard key={event.id} event={event} currentStatus={toStatus(event)} />
        ))}
      </div>
    </section>
  );
}

