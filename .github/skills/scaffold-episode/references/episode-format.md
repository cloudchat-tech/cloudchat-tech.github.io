# Episode Format Reference

## Filename Convention

```
source/_posts/NNNN-slug-title.md
```

- `NNNN` — zero-padded 4-digit episode number (e.g., `0031`)
- `slug-title` — lowercase, hyphen-separated slug (e.g., `cloud-networking`)
- The full filename example: `0031-cloud-networking.md`

## Frontmatter Schema

### Standard episode (no guest)

```yaml
---
episode: 0031
date: 2026-03-01
libsynId: 40123456
summary:
  A short description used for meta tags and episode list views. One to three
  sentences. Use YAML block scalar style for multi-line summaries.
---
```

### Episode with guest

```yaml
---
episode: 0017
date: 2025-01-06
libsynId: 34731650
summary:
  A deep dive into the open-source journey of Brian Munzenmayer, discussing
  community engagement, project maintenance, and the future of open-source
  software.
guest:
  name: Brian Muenzenmeyer
  bio: |
    Multi-line biography text goes here. Markdown is supported.

    Second paragraph of bio.
  socials:
    bluesky: handle.bsky.social
    linkedin: linkedin-slug
    twitter: handle
    web: https://example.com
---
```

### Field details

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `episode` | String | Yes | Zero-padded 4-digit number. Displayed as `#0031` in the UI. |
| `date` | Date | Yes | `YYYY-MM-DD` format. Determines URL path (`/2026/03/slug/`). |
| `libsynId` | Number or String | Yes | Numeric Libsyn episode ID. Use `LIBSYN_ID` as placeholder. |
| `summary` | String | Yes | 1-3 sentences for `<meta>` description and episode list. YAML block scalar for multi-line. |
| `guest.name` | String | No | Full name. Used to auto-generate avatar filename. |
| `guest.bio` | String | No | Markdown-compatible. Use YAML literal block scalar (`\|`). |
| `guest.socials.bluesky` | String | No | Bluesky handle (e.g., `handle.bsky.social`). |
| `guest.socials.linkedin` | String | No | LinkedIn profile slug. |
| `guest.socials.twitter` | String | No | Twitter/X handle (no `@`). |
| `guest.socials.web` | String | No | Full URL including `https://`. |

## Markdown Body Structure

```markdown
# Episode Title Here

## Summary

Multi-paragraph conversational recap written in present tense. Names the hosts
(Carl and Brandon) and any guests. Covers key topics discussed. Typically 2-5
paragraphs.

## Links

### Section heading (optional grouping)

- [Descriptive link text](https://example.com)
- [Another link](https://example.com)

### Another section

- [More links](https://example.com)
```

### Rules

- The `# H1` heading is the episode title. `before_post_render.js` extracts it, applies title case, and normalizes "Cloud Chat" → "CloudChat."
- Do NOT put `title` in frontmatter — it is derived from the H1.
- Links should have descriptive text (not bare URLs).
- Group links by topic section when there are more than ~5 links.

## Post Asset Folder

Each episode has a sibling directory for images:

```
source/_posts/0031-cloud-networking/
├── opengraph-episode-facebook.png   (1200×630)
├── opengraph-episode-twitter.png    (1200×675)
└── any-other-image.png              (optional, use {% asset_img %} to embed)
```

`before_post_render.js` auto-detects `opengraph-episode-facebook.png` and `opengraph-episode-twitter.png` and sets OG/Twitter meta tags automatically.

## Guest Avatar

When `guest.name` is set, `before_post_render.js` generates the avatar filename:

```
avatar-{name-lowercased-hyphenated}.jpg
```

Example: `Steven Murawski` → `avatar-steven-murawski.jpg`

The avatar file must be placed in `source/images/guests/`.
