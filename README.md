# CLAY Hub - Artist Website

An Astro-powered hub site for CLAY: DJ, producer, and visual documentarian. This site serves as the central home for music releases, photography, motion work, and production tutorials.

## Design Philosophy

- **Industrial aesthetic**: Dark backgrounds, clean typography, concrete textures, green accent color (#7fb069)
- **Gallery-first**: Photography and motion work presented with focus and minimal chrome
- **Conversion-focused**: Every section ends with a clear CTA (Listen/Buy, Subscribe, Request Print)
- **Content as CMS**: Astro Content Collections for structured, type-safe content management

## Tech Stack

- **Astro v5** - Static site generator with Content Collections
- **Tailwind CSS v4** - Utility-first styling with custom design system
- **MDX** - Rich content with embedded components (Bandcamp players, image galleries, code blocks)
- **Cloudflare Pages** - Deployment platform

## Project Structure

```
clay-hub/
├── src/
│   ├── content/
│   │   ├── releases/      # Music releases (Markdown + frontmatter)
│   │   ├── photos/        # Photography (JSON data files)
│   │   ├── motion/        # Video/motion work (JSON data files)
│   │   └── posts/         # Tutorials/blog (MDX)
│   ├── components/
│   │   ├── BandcampEmbed.astro
│   │   ├── PhotoGrid.astro
│   │   ├── MotionGrid.astro
│   │   └── ReleaseCard.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro           # Home
│   │   ├── music/                # Discography
│   │   ├── visuals/              # Photography
│   │   ├── motion/               # Video work
│   │   └── writing/              # Tutorials/blog
│   └── styles/
│       └── global.css            # Design system + Tailwind
└── public/
    ├── images/
    ├── videos/
    └── og/

```

## Content Schema

### Releases (`src/content/releases/`)

Markdown files with frontmatter:

```yaml
---
title: "Album Title"
date: 2024-12-01
bandcampUrl: "https://bandcamp.com/album/..."
bandcampEmbedId: "1234567890"
coverImage: "/images/releases/cover.jpg"
coverAlt: "Cover art description"
shortDescription: "Brief album description"
tags: ["industrial", "techno", "ambient"]
featured: true
credits: "Production credits here"
---

Album liner notes and story in Markdown...
```

### Photos (`src/content/photos/`)

JSON files:

```json
{
  "image": "/images/photos/photo.jpg",
  "alt": "Image description",
  "location": "Location name",
  "date": "2024-11-15",
  "tags": ["subway", "tiles", "geometry"],
  "printAvailable": true,
  "printSKU": "CLAY-001",
  "printPrice": 45,
  "printSizes": ["8x10", "11x14", "16x20"],
  "featured": true
}
```

### Motion (`src/content/motion/`)

JSON files:

```json
{
  "title": "Video Title",
  "videoPath": "/videos/clip.mp4",
  "thumbnail": "/images/motion/thumb.jpg",
  "instagramUrl": "https://instagram.com/p/...",
  "tags": ["subway", "motion", "urban"],
  "pairedTrack": "release-slug",
  "date": "2024-11-20",
  "featured": true
}
```

### Posts (`src/content/posts/`)

MDX files with frontmatter:

```yaml
---
title: "Tutorial Title"
date: 2024-11-28
excerpt: "Brief description"
archetype: "field-recording" # rack-breakdown | track-deconstruction | dj-workflow | field-recording
difficulty: "intermediate" # beginner | intermediate | advanced
tools: ["Ableton Live", "Grain Delay"]
tags: ["field recording", "sound design"]
coverImage: "/images/posts/cover.jpg"
series: "Urban Textures"
---

Tutorial content in MDX with embedded components...
```

## Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |

## Deployment to Cloudflare Pages

### Option 1: GitHub Integration (Recommended)

1. Push this repo to GitHub
2. Go to [Cloudflare Pages Dashboard](https://dash.cloudflare.com/)
3. Create new project → Connect to Git
4. Select your repo
5. Build settings:
   - Framework: Astro
   - Build command: `npm run build`
   - Build output: `dist`
6. Deploy

### Option 2: Direct Upload

```bash
npm run build
npx wrangler pages deploy dist
```

## Design System

The site uses a custom design system defined in `src/styles/global.css`:

**Colors:**
- Accent: `#7fb069` (green awning - inspired by urban photography)
- Background: `#0a0a0a` (near black)
- Cards: `#151515` (dark gray)
- Text: `#f5f5f5` (off-white)

**Typography:**
- System font stack for clean, readable text
- Bold tracking on headings for industrial feel
- Uppercase + letterspacing for section titles

**Components:**
- `.btn-primary` - Accent-colored CTA buttons
- `.btn-secondary` - Outlined buttons
- `.card` - Content containers with subtle borders
- `.accent-hover` - Links with color transition
- `.section-title` - Uppercase tracked section headers

## Key Features

### 1. Bandcamp Integration
Embedded players using Bandcamp's official embed API. Customize in `BandcampEmbed.astro`.

### 2. Photo Lightbox
Full-screen lightbox with keyboard navigation (ESC to close, arrows to navigate).

### 3. Motion Grid with Autoplay
Videos autoplay when visible, pause when scrolled out of view. Silent autoplay with hover-to-unmute coming soon.

### 4. View Transitions
Smooth page transitions using Astro's built-in View Transitions API.

### 5. Content Collections
Type-safe content querying with Zod schemas. Validate frontmatter at build time.

## Roadmap

- [ ] Add email signup integration (Mailchimp/ConvertKit)
- [ ] Implement print request form with Netlify Forms or similar
- [ ] Add RSS feed for blog posts
- [ ] Create series/tag filtering for Writing section
- [ ] Add audio player component for standalone track embeds
- [ ] Implement search functionality

## Content Workflow

### Adding a New Release

1. Create `src/content/releases/album-slug.md`
2. Add frontmatter with all required fields
3. Add album art to `public/images/releases/`
4. Write liner notes in Markdown body
5. Set `featured: true` to show on homepage

### Adding Photos

1. Add high-res image to `public/images/photos/`
2. Create `src/content/photos/photo-slug.json`
3. Fill in all metadata
4. Set `featured: true` to show on homepage
5. Enable prints with `printAvailable: true`

### Adding Motion Clips

1. Transcode video for web (H.264, reasonable bitrate)
2. Add to `public/videos/`
3. Create thumbnail in `public/images/motion/`
4. Create `src/content/motion/clip-slug.json`
5. Optionally link to Instagram with `instagramUrl`

### Writing Tutorials

1. Create `src/content/posts/post-slug.mdx`
2. Choose archetype template
3. Write in MDX (can embed Bandcamp players, images, etc.)
4. Tag with tools used for discoverability

## Customization

### Changing the Accent Color

Edit `src/styles/global.css`:

```css
:root {
  --accent: #7fb069; /* Change this */
}
```

### Updating Social Links

Edit footer in `src/layouts/BaseLayout.astro`.

### Changing Site URL

Update `astro.config.mjs`:

```js
export default defineConfig({
  site: 'https://your-domain.com',
  ...
});
```

## Support

For questions about Astro: [docs.astro.build](https://docs.astro.build)

For Cloudflare Pages: [developers.cloudflare.com/pages](https://developers.cloudflare.com/pages)
