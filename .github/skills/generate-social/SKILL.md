---
name: generate-social
description:
  "Generate LinkedIn, Facebook, and Twitter/X social media posts to promote a
  CloudChat episode. Use when: writing social posts, promoting an episode,
  creating LinkedIn posts, creating Twitter posts, creating Facebook posts,
  social media promotion."
argument-hint:
  "Episode number or file path (e.g., 0031 or
  source/_posts/0031-ai-all-the-things.md)"
---

# Generate Social Media Posts

Create platform-tailored social media posts (LinkedIn, Facebook, Twitter/X) to
promote a CloudChat podcast episode.

## When to Use

- After episode content is written and published (or ready to publish)
- The user says "social post", "promote episode", "LinkedIn post", "tweet",
  "Facebook post", or similar

## Inputs

| Field        | Required | Source                       | Notes                                                        |
| ------------ | -------- | ---------------------------- | ------------------------------------------------------------ |
| Episode file | Yes      | `source/_posts/NNNN-slug.md` | Read the H1 title, `## Summary`, and `## Links` for content. |
| Episode URL  | No       | User or derived              | Defaults to `https://cloudchat.tech/{year}/{month}/{slug}/`. |

If the user provides only an episode number, find the matching file in
`source/_posts/`. Derive the episode URL from the `date` frontmatter field and
the filename slug using the permalink pattern `/:year/:month/:name/`.

## Procedure

### Step 1: Read the episode content

1. Read the episode markdown file.
2. Extract:
   - **Title** from the H1 heading
   - **Episode number** from frontmatter `episode` field
   - **Date** from frontmatter `date` field
   - **Summary** from the `## Summary` section (full prose)
   - **Frontmatter summary** from the `summary` field (short version)
   - **Key links** from the `## Links` section
3. Derive the canonical episode URL from the date and slug:
   `https://cloudchat.tech/{YYYY}/{MM}/{slug}/`

### Step 2: Identify core themes

From the summary, extract:

- **Hook**: A provocative question or bold statement that captures the core
  tension of the episode — something that makes a reader stop scrolling.
- **2-3 key talking points**: Specific, concrete topics discussed (name
  technologies, patterns, or real-world examples — not vague generalities).
- **Takeaway**: The main insight or lesson a listener will walk away with.

### Step 3: Generate the LinkedIn post

Write a LinkedIn post following this structure and style:

**Structure:**

1. **Opening hook** (1 line): A bold, provocative statement or question. End
   with a relevant emoji. This is the "above the fold" line — it must earn the
   click to "see more."
2. **Blank line**
3. **Episode announcement** (1 line): `CloudChat Ep. NNNN is live: "{Title}".`
4. **Blank line**
5. **Body paragraph 1** (3-5 lines): Set up the core problem or tension. Use
   concrete language — name specific technologies, patterns, or scenarios
   discussed. Write in first-person plural ("We talk about...," "We break
   down...," "We cover..."). Sprinkle 1-2 emoji at natural pause points, not at
   the end of every sentence.
6. **Blank line**
7. **Body paragraph 2** (3-5 lines): Cover the practical side — what good looks
   like, specific examples, real-world takeaways. Use concrete details from the
   episode. End with 1 emoji.
8. **Blank line**
9. **Call to action** (1 line): `Listen + show notes: {URL}`
10. **Blank line**
11. **Hashtags** (1 line): 5-8 relevant hashtags. Always include
    `#CloudArchitecture`. Choose the rest based on episode topics. Use
    PascalCase hashtags (e.g., `#LocalFirst`, `#SmartHome`).

**Style rules:**

- **Tone**: Conversational, technically grounded, slightly playful but not
  childish — matching the CloudChat brand voice.
- **Do NOT** use corporate buzzword soup ("leverage," "synergy," "unlock,"
  "game-changer," "paradigm shift").
- **Do NOT** use listicle format (no numbered lists or bullet points in the
  body).
- **Emoji**: Use sparingly (3-5 total). Choose contextually relevant emoji, not
  generic ones like 👍 or 🔥. Place them at the end of sentences or thoughts,
  never at the start of a line.
- **Length**: 800-1300 characters (LinkedIn truncates after ~210 characters with
  a "see more" link, so the first line must hook).
- **Write as the CloudChat brand**, not as an individual host.
- **No @mentions** unless the user specifically requests them.

### Step 4: Generate the Facebook post

Write a Facebook post — shorter and more casual than LinkedIn:

**Structure:**

1. **Opening hook** (1-2 lines): Same provocative question or statement, can be
   slightly more casual than LinkedIn.
2. **Blank line**
3. **Brief body** (2-4 lines): Hit the 2-3 most interesting points from the
   episode. More conversational, less "professional." Use "we" voice.
4. **Blank line**
5. **Call to action with URL**: `🎧 Listen here: {URL}`
6. **Blank line**
7. **Hashtags** (1 line): 3-5 hashtags. Fewer than LinkedIn.

**Style rules:**

- Shorter than LinkedIn (400-800 characters total).
- More casual tone — contractions, sentence fragments OK.
- 2-3 emoji total.

### Step 5: Generate the Twitter/X post

Write a Twitter/X post within the 280-character limit:

**Structure:**

1. **Hook + episode info** (1-2 sentences): Combine the provocative hook with
   the episode title/number. Must be punchy and complete within character
   limits.
2. **URL**: Include the episode URL (counts toward character limit — assume 23
   characters for a t.co-wrapped URL).
3. **Hashtags**: 1-3 hashtags if space permits. Drop hashtags before cutting
   content.

**Style rules:**

- **Hard limit: 280 characters** (including URL and hashtags). Count carefully.
- Every word must earn its place. Be direct.
- No emoji required, but 1 is fine if it fits.
- The URL will be shortened by Twitter to 23 characters regardless of actual
  length — budget 23 characters for it.

### Step 6: Present the posts

Present all three posts in a single response, clearly labeled. Wrap each
post's text in a fenced code block so the user can easily copy/paste it:

````
## LinkedIn

```
{post text}
```

## Facebook

```
{post text}
```

## Twitter/X

```
{post text}
```
````

Ask the user if they'd like adjustments to tone, length, or emphasis for any of
the posts.

## Important Rules

- **All claims in the posts must come from the episode content.** Do not invent
  talking points or statistics that aren't in the summary or links.
- **Do not hallucinate guest names.** Only mention guests if a `guest:` block
  exists in the episode frontmatter.
- **The episode URL must be derived from the actual date and slug**, not
  guessed.
- **Do not include link previews or formatting instructions** — just the raw
  post text ready to paste into each platform.
- **Output files are not written to disk.** Present the posts directly in the
  chat response.
