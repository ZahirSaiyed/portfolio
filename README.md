# FOLK / OS Portfolio

A personal operating system built from cultural memory. Vernacular modernism combining OS discipline with hand-painted signage, street logic, and expressive typography.

## Design Philosophy

Three non-negotiable rules:
1. Clarity beats cleverness
2. Decoration serves function
3. Typography is the interface

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Structure

- `/app` - Next.js pages and layouts
- `/components` - Reusable components (Signboard, Navigation, etc.)
- `/data` - JSON files for content management
- `/public/images` - Static assets (cooking photos)

## Content Management

Edit the JSON files in `/data` to update content:
- `work.json` - Capital One highlights (industrial documentation format)
- `projects.json` - Side projects (experiments format)
- `music.json` - SoundCloud tracks (objects format)
- `cooking.json` - Cooking logs (instructional framing)
- `education.json` - Education history

### Adding Images

Place cooking images in `/public/images/cooking/` and reference them in `cooking.json`:
```json
{
  "image": "/images/cooking/your-image.jpg"
}
```

If an image is missing, a placeholder will be shown.

## Design System

- **Colors**: Paper Cream, Signal Red, Emerald Green, Mustard Yellow, Ink Black
- **Typography**: Inter/IBM Plex Sans (system), bold rounded grotesk/slab (display)
- **Layout**: Signboard logic - boxes within boxes, clear borders
- **Interactions**: Mechanical animations (slide-ins, hard cuts, stamp reveals)

## Deployment

Ready for Vercel or Netlify deployment.

