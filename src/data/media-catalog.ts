import type { MediaCatalog } from '@/types/media';

export const mediaCatalog: MediaCatalog = {
  sections: [
    {
      id: 'clay-ai-image-showcase',
      title: 'AI image lab',
      note: 'Early-stage visual references from AI exploration and motion study assets.',
      assets: [
        {
          id: 'media-image-01',
          slug: 'fracture-orbit',
          title: 'Fracture Orbit',
          description: 'A Midjourney-inspired composition for motion test references.',
          format: 'image',
          host: 'cloudinary',
          thumbnailUrl:
            'https://res.cloudinary.com/demo/image/upload/sample.jpg',
          sourceUrl:
            'https://res.cloudinary.com/demo/image/upload/sample.jpg',
          hostMeta: {
            cloudName: 'demo',
            publicId: 'sample',
            transformations: ['f_auto', 'q_auto', 'w_1024']
          },
          tags: ['ai', 'midjourney', 'texture', 'reference'],
          createdAt: '2026-02-14T00:00:00.000Z'
        },
        {
          id: 'media-image-02',
          slug: 'ambient-rainfall',
          title: 'Ambient Rainfall',
          description: 'A calm color palette and gradient study that maps well to 3D materials.',
          format: 'image',
          host: 'external',
          thumbnailUrl:
            'https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=1200&q=80',
          sourceUrl:
            'https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=1400&q=80',
          tags: ['ambient', 'palette', 'reference'],
          createdAt: '2026-02-13T00:00:00.000Z'
        }
      ]
    },
    {
      id: 'clay-ai-video-staging',
      title: 'AI motion gallery',
      note: 'Display-ready AI generated clips for testing scene synchronization and motion direction.',
      assets: [
        {
          id: 'media-video-01',
          slug: 'abstract-wave-01',
          title: 'Abstract Wave One',
          description: 'A placeholder AI-style sample clip for gallery playback and sequencing.',
          format: 'video',
          host: 'external',
          thumbnailUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
          sourceUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
          tags: ['video', 'clip', 'mcp', 'sync'],
          createdAt: '2026-02-12T00:00:00.000Z'
        },
        {
          id: 'media-video-02',
          slug: 'midjourney-motion-reference',
          title: 'Midjourney motion reference',
          description: 'Short placeholder for rendered AI motion experiments before production cuts are added.',
          format: 'video',
          host: 'external',
          thumbnailUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80',
          sourceUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
          tags: ['video', 'placeholder', 'midjourney'],
          createdAt: '2026-02-11T00:00:00.000Z'
        }
      ]
    }
  ]
};

