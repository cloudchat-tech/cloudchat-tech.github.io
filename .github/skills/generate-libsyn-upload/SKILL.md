---
name: generate-libsyn-upload
description:
  "Generate a Libsyn upload helper HTML file in tmp/. Use when: preparing Libsyn
  fields, creating episode upload copy blocks, building title/content metadata
  for Libsyn, and avoiding manual format lookups."
argument-hint:
  "Episode file path or number (e.g.,
  source/_posts/0032-rolling-rolling-rolling.md or 0032)"
---

# Generate Libsyn Upload Helper

Create a plain HTML helper file in `tmp/` with copy-ready blocks for the Libsyn
fields that are easy to mix up between episodes.

## When to Use

- The user wants to publish an episode in Libsyn and avoid manual formatting
- The user asks for a reusable Libsyn upload template or helper file
- The user says "generate Libsyn content", "make upload helper", or similar

## Inputs

| Field        | Required | Example                                                        | Notes                                                        |
| ------------ | -------- | -------------------------------------------------------------- | ------------------------------------------------------------ |
| Episode file | Yes      | `source/_posts/0032-rolling-rolling-rolling.md`                | Read H1 title, date, slug, summary, and links.               |
| Episode URL  | No       | `https://cloudchat.tech/2026/05/0032-rolling-rolling-rolling/` | Derive from date + slug if not provided.                     |
| Category     | No       | `general`                                                      | Default to `general` if user does not specify another value. |

If the user only provides an episode number, find the matching file in
`source/_posts/`.

## Procedure

### Step 1: Read episode metadata

From the episode markdown file, extract:

- Episode number (`NNNN` and non-padded number)
- H1 title
- Frontmatter date (`YYYY-MM-DD`)
- Filename slug (`NNNN-slug` -> `slug`)
- Body summary paragraphs and `## Links` section

Derive canonical URL using permalink pattern `/:year/:month/:name/`:
`https://cloudchat.tech/{YYYY}/{MM}/{filename-without-.md}/`

### Step 2: Build the three title variants

Produce and clearly separate these values:

1. **Libsyn Title** (`Title` field): `Ep. NN - {Apple Podcasts Title}`
2. **Content Header Link Text** (first line inside content block):
   `Episode NNNN - {Apple Podcasts Title}`
3. **Apple Podcasts Title** (`Apple Podcasts Title` field):
   `{Apple Podcasts Title}` with no episode prefix

If the H1 already includes an episode prefix, remove it for the Apple Podcasts
title and normalize spacing/punctuation.

### Step 3: Build content HTML

Generate rich content as plain HTML, suitable for Libsyn's content editor:

1. First line as a linked heading/paragraph to the canonical CloudChat URL:
   `<p><a href="{URL}">Episode NNNN - {Apple Podcasts Title}</a></p>`
2. Include summary paragraphs in HTML `<p>` blocks.
3. Include links section using `<h2>`, `<h3>`, and `<ul><li>`.
4. Always include this standard closing block exactly (every episode):
   - `twitter.com/CloudChatTech`
   - `discord.cloudchat.tech`
   - `cloudchatpodcast@gmail.com`
   - `linkedin.com/company/cloudchat`

### Step 4: Generate helper HTML file in tmp

Write `tmp/NNNN-libsyn-upload.html` with a simple copy/paste oriented layout.
Include readonly textareas (or pre blocks) for:

- Libsyn Title
- Description/Content HTML
- Custom Permalink URL
- Apple Podcasts Title

### Step 5: Confirm output path

Report the generated file path and the canonical URL used.

## Important Rules

- Always write to `tmp/` and never overwrite the episode markdown file.
- Keep output plain HTML and easy to scan.
- Keep all URLs absolute (`https://...`) except the `mailto:` link.
- Always include the standard "Visit us" links block at the end.
- Do not guess content beyond what exists in the episode file/user input.
- After generating, start a lightweight webserver to serve the `tmp/` directory
  and open the generated file in the integrated browser for easy access.
