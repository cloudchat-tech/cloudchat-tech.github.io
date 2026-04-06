---
name: scaffold-episode
description: "Scaffold a new CloudChat podcast episode. Use when: creating a new episode, adding an episode file, starting a new podcast post. Creates the markdown file, frontmatter, and post asset folder."
argument-hint: "Episode number, slug, and release date (e.g., 0031 cloud-networking 2026-03-01)"
---

# Scaffold a New Episode

Create the markdown source file and post asset directory for a new CloudChat episode.

## When to Use

- Starting a new episode from scratch
- The user says "new episode", "create episode", "scaffold episode", or similar

## Inputs

Ask the user for any values not provided:

| Field | Required | Example | Notes |
|-------|----------|---------|-------|
| Episode number | Yes | `0031` | Zero-padded 4-digit number. Check `source/_posts/` for the next available number. |
| Slug | Yes | `cloud-networking` | Lowercase, hyphenated. Used in the filename and URL. |
| Title | Yes | `Cloud Networking for Humans` | Used as the H1 heading in the markdown body. Do NOT put this in frontmatter. |
| Release date | Yes | `2026-03-01` | `YYYY-MM-DD` format. |
| libsynId | No | `40123456` | Numeric ID from Libsyn. Use placeholder text `LIBSYN_ID` if not yet known. |
| Summary | No | `A short description...` | 1-3 sentence meta description. Use placeholder if not ready. |
| Guest name | No | `Steven Murawski` | Triggers guest block in frontmatter. |
| Guest bio | No | Multi-line text | Markdown-compatible biography. |
| Guest socials | No | bluesky, linkedin, twitter, web | Any combination. |

## Procedure

1. **Determine the next episode number** if not provided — list `source/_posts/` and find the highest `NNNN` prefix, then increment by 1.

2. **Create the markdown file** at `source/_posts/NNNN-slug.md` with this structure:

   ```markdown
   ---
   episode: NNNN
   date: YYYY-MM-DD
   libsynId: LIBSYN_ID
   summary: SHORT_SUMMARY
   ---

   # Episode Title Here

   ## Summary

   LONG_SUMMARY

   ## Links

   - [one](https://example.com)
   ```

   See [episode format reference](./references/episode-format.md) for the exact schema.

3. **If a guest is provided**, add the guest block to frontmatter:

   ```yaml
   guest:
     name: Guest Name
     bio: |
       Bio text here.
     socials:
       bluesky: handle.bsky.social
       linkedin: slug
       twitter: handle
       web: https://example.com
   ```

   Also ensure the guest avatar image `avatar-{name-lowercased-hyphenated}.jpg` exists in `source/images/guests/`. Remind the user to add it if missing.

4. **Create the post asset folder** at `source/_posts/NNNN-slug/` (empty directory). This is where OG images will go later.

5. **Confirm** the created files and remind the user of next steps:
   - Add the libsynId after uploading audio to Libsyn
   - Use `/write-episode-content` to generate the summary from a transcript
   - Use `/generate-episode-graphic` to create OG background images

## Important Rules

- **Never set `title` in frontmatter.** The `scripts/lib/before_post_render.js` filter extracts the title from the first `# H1` heading in the markdown body.
- **Episode number must be zero-padded to 4 digits** (e.g., `0031` not `31`).
- **The filename must match the pattern** `NNNN-slug.md` — the episode number prefix followed by a hyphenated slug.
- **The date must be `YYYY-MM-DD` format** with no time component.
