---
name: generate-episode-graphic
description: "Generate a CloudChat episode background graphic for social media OG images. Use when: creating episode art, generating OG images, making social images, episode graphic, podcast artwork background."
argument-hint: "Episode number or file path (e.g., 0031 or source/_posts/0031-cloud-networking.md)"
---

# Generate Episode Background Graphic

Create a thematic background image for a CloudChat podcast episode, designed for use as OG/social media images with manual text and avatar overlays.

## When to Use

- After writing episode content with `/write-episode-content` (so the summary is available for theme extraction)
- The user says "generate graphic", "create episode image", "make OG image", or similar

## Inputs

| Field | Required | Source | Notes |
|-------|----------|--------|-------|
| Episode file | Yes | `source/_posts/NNNN-slug.md` | Read the H1 title and `## Summary` to extract the episode theme. |

If the user provides only an episode number, find the matching file in `source/_posts/`.

## Procedure

### Step 1: Extract the episode theme

1. Read the episode markdown file.
2. Identify the episode title (H1 heading) and summary content.
3. Determine 1-3 key concepts, metaphors, or concrete nouns from the content.

### Step 2: Generate the background image

Use image generation to create the background. Follow these instructions precisely:

---

**You are the visual designer for CloudChat (cloudchat.tech). Create a single background image for a podcast episode page.**

**INPUTS**
- Episode title: `{TITLE}` *(from the H1 heading)*
- Episode summary: `{SUMMARY}` *(from the ## Summary section, or frontmatter summary if body summary is a placeholder)*

**GOAL**
Generate a widescreen background image that visually represents the episode theme and feels "CloudChat": modern, tech-forward, slightly playful, not childish. The image must support overlays (title, episode number, logo, host avatars) without becoming noisy.

**REQUIREMENTS**
- Size: 2400×1350 (16:9). If limited, use 1920×1080.
- **No text, no logos, no watermarks, no UI screenshots, no brand names** anywhere in the image.
- Leave clean negative space for overlays — see [composition guide](./references/composition-guide.md) for exact safe zones:
  - **Top-left ~25%**: calm area for CloudChat logo overlay
  - **Bottom-left / lower-left quadrant**: calm area for episode title text overlay
  - **Bottom-right**: calm area for host avatar overlays
  - **Center to upper-right**: this is where visual interest and focal elements should concentrate
- Visual style: crisp vector/flat illustration with subtle gradients OR soft 3D clay-like shapes (pick one consistent style per image). High contrast but not neon.
- Composition: 1-3 clear focal elements, not a collage. Avoid tiny scattered details.
- Theme extraction: read the summary and pick **ONE primary metaphor** and **ONE secondary supporting symbol** from the content.
  - Primary metaphor should communicate the core idea (e.g., "lifeboat", "bridge", "circuit breaker", "sunset", "air gap", "fallback path", "escape hatch", "compass")
  - Secondary symbol should hint at the tech domain (e.g., cloud, LAN router, smart device, API, lock, circuit, server rack, DNS record)
- Mood: optimistic but pragmatic. Modern and technical. "Resilience under pressure" vibe.
- Color palette: use the brand dark blue (`#002145`) and gray (`#1f2937`) as anchoring tones, with 1-2 accent colors appropriate to the episode theme.

**SILENT PROCESS**
1. Identify the episode's core problem, key lesson, and 2-3 concrete nouns from the summary.
2. Choose one cohesive primary metaphor and one supporting symbol.
3. Create a simple scene with depth and directional flow that implies cause → mitigation, concentrated in the center-right area.

**OUTPUT**
Return ONLY the image.

---

### Step 3: Guide the user on post-processing

After generating the image, tell the user:

1. **Save the full-resolution source image** (2400×1350 or 1920×1080).
2. **Export two versions** for the post asset folder:
   - `opengraph-episode-facebook.png` — 1200×630 (center-crop from the 16:9 source)
   - `opengraph-episode-twitter.png` — 1200×675 (center-crop from the 16:9 source)
3. **Manually overlay** (in your image editor of choice):
   - CloudChat logo → top-left
   - Episode title and number text → lower-left area
   - Host avatars (Carl and Brandon) → bottom-right
   - Brand assets are in `themes/cloudchat/source/images/` (`cloudchat-full.svg`, `cloudchat-logomark.png`, `avatar-carl.png`, `avatar-brandon.png`)
4. **Place the final PNGs** in the post asset folder: `source/_posts/NNNN-slug/`
5. **No frontmatter changes needed** — `before_post_render.js` auto-detects `opengraph-episode-facebook.png` and `opengraph-episode-twitter.png`.

## Important Rules

- **Never include text in the generated image** — all text is added manually for precise typography.
- **Never include the CloudChat logo** — it is overlaid manually.
- **Keep overlay zones clean** — the image is a background, not a finished graphic.
- **One cohesive scene, not a collage** — resist the urge to represent every topic mentioned.
- **Brand colors anchor the palette** — `#002145` (dark blue) and `#1f2937` (gray-800) should be present, with episode-specific accents.
