import { mediaCatalog } from '@/data/media-catalog';
import MediaCard from './MediaCard';

export default function MediaGallery() {
  return (
    <section className="section">
      <h2 className="section-title">Media catalog</h2>
      <p className="copy">
        This is the first pass for visual and AI-video exposure. Replace placeholder items
        with production-hosted media links as your catalog grows.
      </p>

      {mediaCatalog.sections.map((section) => (
        <section className="section" key={section.id}>
          <h3>{section.title}</h3>
          <p className="copy">{section.note}</p>
          <div className="grid-two">
            {section.assets.map((asset) => (
              <MediaCard key={asset.id} asset={asset} />
            ))}
          </div>
        </section>
      ))}
    </section>
  );
}

