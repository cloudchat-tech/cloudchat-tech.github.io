# Episode Graphic Composition Guide

## Canvas Dimensions

| Version | Dimensions | Aspect Ratio | Purpose |
|---------|-----------|--------------|---------|
| Source | 2400×1350 | 16:9 | Full-resolution generated image |
| Fallback source | 1920×1080 | 16:9 | If model limits resolution |
| Facebook OG | 1200×630 | ~1.91:1 | `opengraph-episode-facebook.png` |
| Twitter OG | 1200×675 | ~1.78:1 | `opengraph-episode-twitter.png` |

## Safe Zones (Overlay Areas)

The generated background must keep these areas calm (low detail, low contrast, no focal elements) so that overlaid text, logos, and avatars remain readable.

```
┌─────────────────────────────────────────────────────────┐
│  LOGO ZONE              │                               │
│  (top-left ~25%)        │    VISUAL INTEREST ZONE       │
│  Keep calm/minimal      │    (center to upper-right)    │
│                         │    Focal elements go here     │
│                         │    1-3 clear objects           │
│                         │    Depth, motion, flow         │
├─────────────────────────┤                               │
│                         │                               │
│  TITLE TEXT ZONE        ├───────────────────────────────│
│  (lower-left quadrant)  │    AVATAR ZONE                │
│  Keep calm/minimal      │    (bottom-right ~20%)        │
│  Episode title + number │    Keep calm/minimal          │
│                         │    Host avatar overlays       │
└─────────────────────────┴───────────────────────────────┘
```

### Pixel coordinates (2400×1350 source)

| Zone | X range | Y range | Guideline |
|------|---------|---------|-----------|
| Logo | 0–600 | 0–340 | Top-left 25%. Minimal or solid gradient only. |
| Title text | 0–1440 | 810–1350 | Bottom-left 60% width × bottom 40% height. Low detail. |
| Avatars | 1680–2400 | 945–1350 | Bottom-right ~30% width × bottom 30% height. Clean. |
| Visual interest | 600–2400 | 0–945 | Center to upper-right. Focal elements concentrate here. |

### Pixel coordinates (1200×630 — Facebook export)

| Zone | X range | Y range |
|------|---------|---------|
| Logo | 0–300 | 0–160 |
| Title text | 0–720 | 380–630 |
| Avatars | 840–1200 | 440–630 |
| Visual interest | 300–1200 | 0–440 |

### Pixel coordinates (1200×675 — Twitter export)

| Zone | X range | Y range |
|------|---------|---------|
| Logo | 0–300 | 0–170 |
| Title text | 0–720 | 405–675 |
| Avatars | 840–1200 | 475–675 |
| Visual interest | 300–1200 | 0–475 |

## Crop Guide: Source → Export

The source is 16:9 (2400×1350). The export formats are slightly different aspect ratios.

### Facebook (1200×630, ~1.91:1)

The Facebook format is slightly wider than 16:9. Center-crop vertically:
1. From the 2400×1350 source, crop to 2400×1260 (remove 45px from top and bottom).
2. Scale down to 1200×630.
3. The safe zones remain approximately correct since the crop is minimal.

### Twitter (1200×675, ~1.78:1)

The Twitter format is very close to 16:9. Simple scale:
1. From the 2400×1350 source, scale directly to 1200×675 (exact 16:9 → 16:9).
2. No cropping needed.

## Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Primary dark blue | `#002145` | Main background tone, anchoring gradients |
| Secondary gray | `#1f2937` | Supporting backgrounds, gradient endpoints |
| Accent (per episode) | Varies | 1-2 colors related to episode theme |

### Accent color suggestions by topic

| Topic area | Suggested accent |
|-----------|-----------------|
| Security, access control | Amber `#F59E0B`, Red `#EF4444` |
| Networking, DNS, connectivity | Teal `#14B8A6`, Cyan `#06B6D4` |
| Cost, billing, optimization | Green `#22C55E`, Emerald `#10B981` |
| Resilience, failover, reliability | Orange `#F97316`, Blue `#3B82F6` |
| Containers, orchestration | Purple `#A855F7`, Indigo `#6366F1` |
| Data, storage, databases | Sky `#0EA5E9`, Slate `#64748B` |
| DevOps, CI/CD, automation | Lime `#84CC16`, Violet `#8B5CF6` |
| General/default | Blue `#3B82F6`, Teal `#14B8A6` |

## Visual Style Guidelines

- **Crisp vector/flat illustration** with subtle gradients, OR **soft 3D clay-like shapes** — pick one style per image, stay consistent
- High contrast but **not neon** — colors should feel professional, not arcade
- **1-3 clear focal elements** in the visual interest zone — not a collage
- **Depth and directional flow** — motion lines, layered planes, or perspective that implies cause → mitigation
- **Modern and tech-forward** — clean geometry, purposeful whitespace, no skeuomorphism
- **Slightly playful** — approachable, not corporate stock art, but not cartoonish

## Manual Overlay Assets

Located in `themes/cloudchat/source/images/`:

| Asset | File | Purpose |
|-------|------|---------|
| Full logo | `cloudchat-full.svg` | Top-left logo overlay |
| Logo mark | `cloudchat-logomark.png` | Alternative compact logo |
| Carl avatar | `avatar-carl.png` | Bottom-right avatar overlay |
| Brandon avatar | `avatar-brandon.png` | Bottom-right avatar overlay |

## Output Files

Place the final composited PNGs in the episode's post asset folder:

```
source/_posts/NNNN-slug/
├── opengraph-episode-facebook.png   (1200×630)
└── opengraph-episode-twitter.png    (1200×675)
```

These filenames are auto-detected by `scripts/lib/before_post_render.js` — no frontmatter changes are needed.
