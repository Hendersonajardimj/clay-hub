# Getting Started with CLAY Hub

This guide will help you get the site running locally and understand how to add your actual content.

## Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the dev server**
   ```bash
   npm run dev
   ```

3. **Open in browser**
   Navigate to `http://localhost:4321`

## Adding Your Content

### Step 1: Replace Sample Content

The site currently has sample content. You'll want to replace it with your actual work:

#### Music Releases

1. Go to `src/content/releases/`
2. Edit or replace `concrete-frequencies.md`
3. Add your album artwork to `public/images/releases/`
4. Get your Bandcamp embed ID:
   - Go to your album on Bandcamp
   - Click "Share/Embed"
   - Copy the album ID from the embed code (the number after `album=`)

**Example:**
```markdown
---
title: "Your Album Title"
date: 2024-12-01
bandcampUrl: "https://yourname.bandcamp.com/album/your-album"
bandcampEmbedId: "1234567890"  # Get this from Bandcamp embed code
coverImage: "/images/releases/your-cover.jpg"
coverAlt: "Description of your album art"
shortDescription: "A brief description of the album"
tags: ["techno", "ambient", "experimental"]
featured: true  # Shows on homepage
---

Write about your album here...
```

#### Photography

1. Add your photos to `public/images/photos/`
2. Create JSON files in `src/content/photos/`
3. Each photo should be named like `photo-name.json`

**Example:**
```json
{
  "image": "/images/photos/my-photo.jpg",
  "alt": "Detailed description for accessibility",
  "location": "Brooklyn, NY",
  "date": "2024-11-15",
  "tags": ["subway", "architecture", "urban"],
  "printAvailable": true,
  "printSKU": "CLAY-001",
  "printPrice": 45,
  "printSizes": ["8x10", "11x14", "16x20"],
  "featured": true  # Shows on homepage
}
```

#### Motion/Video

1. Add videos to `public/videos/`
2. Create thumbnails in `public/images/motion/`
3. Create JSON files in `src/content/motion/`

**Example:**
```json
{
  "title": "Your Video Title",
  "videoPath": "/videos/your-video.mp4",
  "thumbnail": "/images/motion/your-thumb.jpg",
  "instagramUrl": "https://instagram.com/p/your-post",  # Optional
  "tags": ["motion", "urban", "experimental"],
  "date": "2024-11-20",
  "featured": true
}
```

**Video Tips:**
- Keep file sizes reasonable (under 10MB if possible)
- Use H.264 codec for best browser compatibility
- Resolution: 1080p is fine, no need for 4K
- Use tools like Handbrake or ffmpeg to optimize

#### Tutorials/Writing

1. Create MDX files in `src/content/posts/`
2. Name them like `your-post-slug.mdx`

**Example:**
```mdx
---
title: "Your Tutorial Title"
date: 2024-11-28
excerpt: "A brief summary of what this teaches"
archetype: "rack-breakdown"  # or track-deconstruction, dj-workflow, field-recording
difficulty: "intermediate"  # beginner, intermediate, advanced
tools: ["Ableton Live", "Your Tools"]
tags: ["production", "sound design"]
coverImage: "/images/posts/your-cover.jpg"
series: "Your Series Name"  # Optional
---

Your tutorial content here in Markdown format...

## Headings work

You can include **bold** and *italic* text.

- Bullet lists
- Work great

You can even embed Bandcamp players:

import BandcampEmbed from '../../components/BandcampEmbed.astro';

<BandcampEmbed albumId="1234567890" />
```

### Step 2: Update Site Details

#### Change the accent color

Edit `src/styles/global.css`:

```css
:root {
  --accent: #7fb069; /* Change to your brand color */
}
```

#### Update social links

Edit `src/layouts/BaseLayout.astro` and find the footer section. Replace the placeholder links with your actual social media URLs.

#### Update site URL

Edit `astro.config.mjs`:

```js
export default defineConfig({
  site: 'https://your-actual-domain.com',
  ...
});
```

### Step 3: Add Placeholder Images (If Testing)

If you want to see the site working before adding real content, you need placeholder images:

```bash
# Create placeholder directories
mkdir -p public/images/{releases,photos,motion,posts}
mkdir -p public/videos
```

You can use placeholder image services or create simple solid-color images for testing.

## Building for Production

When you're ready to deploy:

```bash
npm run build
```

This creates a `dist/` folder with your static site.

## Deploying to Cloudflare Pages

### Method 1: GitHub (Easiest)

1. Create a GitHub repository
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin your-repo-url
   git push -u origin main
   ```
3. Go to [dash.cloudflare.com](https://dash.cloudflare.com)
4. Pages → Create a project → Connect to Git
5. Select your repo
6. Build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
7. Click "Save and Deploy"

### Method 2: Direct Upload

```bash
npm run build
npx wrangler pages deploy dist
```

## Common Customizations

### Remove the email signup form

Edit `src/pages/index.astro` and delete or comment out the CTA section.

### Change navigation items

Edit `src/layouts/BaseLayout.astro` and modify the nav links in the header.

### Add a new page

Create a new `.astro` file in `src/pages/`. For example:

- `src/pages/about.astro` becomes `/about`
- `src/pages/contact.astro` becomes `/contact`

### Change fonts

Edit `src/styles/global.css` and update the `font-family` in the `body` style.

## Content Tips

### Featured Content

Set `featured: true` in your content frontmatter to show items on the homepage.

### Organizing by Tags

Add consistent tags to make content discoverable. For photos: `subway`, `scaffolding`, `signage`, etc.

### Series for Tutorials

Use the `series` field to group related tutorials. They'll link to each other automatically.

### Print Availability

Mark photos with `printAvailable: true` to show the "Request Print" button. You'll need to set up a contact form separately.

## Troubleshooting

### Build errors about content collections

Make sure every content file has valid frontmatter matching the schema in `src/content/config.ts`.

### Images not showing

Check that image paths start with `/` and match the actual file location in `public/`.

### Videos not playing

Ensure videos are in a web-compatible format (MP4 with H.264 codec).

### Bandcamp embed not working

Double-check you're using the album/track ID, not the full URL.

## Next Steps

1. Replace all sample content with your work
2. Customize colors and branding
3. Test the build locally: `npm run build && npm run preview`
4. Deploy to Cloudflare Pages
5. Point your custom domain to the deployment
6. Share with the world!

## Need Help?

- Astro docs: [docs.astro.build](https://docs.astro.build)
- Tailwind docs: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- Cloudflare Pages: [developers.cloudflare.com/pages](https://developers.cloudflare.com/pages)
