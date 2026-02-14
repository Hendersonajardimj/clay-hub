'use client';

import Image from 'next/image';
import type { MediaAsset } from '@/types/media';

type MediaCardProps = {
  asset: MediaAsset;
};

function ImagePreview({ asset }: { asset: MediaAsset }) {
  return (
    <div>
      <Image
        src={asset.thumbnailUrl}
        alt={asset.title}
        width={680}
        height={380}
        className="scene-stage"
        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
      />
      <a
        href={asset.sourceUrl}
        target="_blank"
        rel="noreferrer"
        className="btn btn-ghost"
      >
        Open image source
      </a>
    </div>
  );
}

function VideoPreview({ asset }: { asset: MediaAsset }) {
  return (
    <div>
      <video
        controls
        preload="metadata"
        poster={asset.thumbnailUrl}
        src={asset.sourceUrl}
        className="scene-stage"
        style={{ width: '100%', maxHeight: 420 }}
      >
        Your browser does not support this video.
      </video>
      <a
        href={asset.sourceUrl}
        target="_blank"
        rel="noreferrer"
        className="btn btn-ghost"
      >
        Open asset
      </a>
    </div>
  );
}

export default function MediaCard({ asset }: MediaCardProps) {
  return (
    <article className="card">
      <p className="state-note">
        {asset.host} · {asset.format.toUpperCase()}
      </p>
      <h3>{asset.title}</h3>
      <p className="copy">{asset.description}</p>
      {asset.format === 'image' ? (
        <ImagePreview asset={asset} />
      ) : (
        <VideoPreview asset={asset} />
      )}
      <p className="state-note">
        Tags: {asset.tags.length > 0 ? asset.tags.join(', ') : 'uncategorized'}
      </p>
    </article>
  );
}

