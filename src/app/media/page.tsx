import MediaGallery from '@/components/MediaGallery';

export default function MediaPage() {
  return (
    <div className="page-shell">
      <section className="section">
        <p className="kicker">Media studio</p>
        <h1>Media Gallery</h1>
        <p className="copy">
          One place to review AI images and AI-generated clips used for visual ideas, references, and future release assets.
        </p>
      </section>
      <MediaGallery />
    </div>
  );
}

