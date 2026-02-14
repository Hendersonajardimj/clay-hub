export type MediaFormat = 'image' | 'video';

export type HostingSource = 'cloudinary' | 'external' | 'local';

export interface CloudinaryHostMeta {
  cloudName: string;
  publicId: string;
  transformations?: string[];
}

export interface MediaAsset {
  id: string;
  slug: string;
  title: string;
  description: string;
  format: MediaFormat;
  host: HostingSource;
  thumbnailUrl: string;
  sourceUrl: string;
  hostMeta?: CloudinaryHostMeta;
  tags: string[];
  createdAt: string;
}

export interface MediaSection {
  id: string;
  title: string;
  note: string;
  assets: MediaAsset[];
}

export interface MediaCatalog {
  sections: MediaSection[];
}

