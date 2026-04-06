---
name: write-episode-content
description:
  "Write CloudChat episode summary and links from a VTT transcript and show
  notes. Use when: generating episode content, writing show notes, processing a
  transcript, filling in episode summary and links from a Teams recording."
argument-hint:
  "Episode file path, transcript, and optional show notes (e.g.,
  source/_posts/0031-cloud-networking.md from tmp/0031-transcript.vtt and
  tmp/shownotes.md)"
---

# Write Episode Content from Transcript

Generate the episode summary, links section, and frontmatter summary by reading
a Microsoft Teams VTT transcript and optional pre-recording show notes.

## When to Use

- After scaffolding an episode with `/scaffold-episode`
- The user has placed a VTT transcript in `tmp/` and wants to generate episode
  content
- The user says "write episode", "generate summary", "process transcript", or
  similar

## Inputs

| Field           | Required | Example                                  | Notes                                                         |
| --------------- | -------- | ---------------------------------------- | ------------------------------------------------------------- |
| Episode file    | Yes      | `source/_posts/0031-cloud-networking.md` | The scaffolded episode markdown file.                         |
| Transcript file | Yes      | `tmp/0031-transcript.vtt`                | VTT file from Microsoft Teams. Located in `tmp/`.             |
| Show notes file | No       | `tmp/shownotes.md`                       | Pre-recording outline/notes markdown file. Located in `tmp/`. |

If the user doesn't specify file paths:

- Look in `source/_posts/` for the most recent episode file (highest `NNNN`
  prefix)
- Look in `tmp/` for `.vtt` files and ask the user to confirm which one
- Look in `tmp/` for `.md` files — if one exists, ask the user if it should be
  used as show notes

## Procedure

### Step 1: Read the show notes (if provided)

1. If a show notes markdown file is provided, read it from `tmp/`.
2. The show notes are a freeform pre-recording outline written by the hosts.
   They may contain:
   - Episode number and topic introduction
   - Guest or co-host notes
   - Bullet-point topic outlines and talking points
   - `// TODO:` comments indicating links or references to find and include
   - Section headers like "Guest Questions", "Topic Outline", "Show follow-up
     from previous episodes"
3. Use the show notes to:
   - **Understand the intended structure** of the episode — topics may be in a
     different order than discussed
   - **Resolve TODO items** — find the links or references the hosts intended to
     include (e.g., `// TODO: Find links to the YouTube videos` → search for and
     include the relevant URLs)
   - **Fill gaps in the transcript** — the show notes may reference ideas or
     resources that were discussed briefly but not fully named in conversation
   - **Identify the core thesis** — the opening line of the show notes often
     captures the episode hook
4. The show notes are a planning artifact, not publishable content. Do not copy
   them verbatim into the episode.

### Step 2: Read the transcript

1. Read the VTT file from `tmp/`.
2. Parse the VTT format — strip `WEBVTT` header, timing lines
   (`00:00:00.000 --> 00:00:05.000`), and positional metadata.
3. Extract speaker-attributed dialogue. Microsoft Teams VTT uses
   `<v Speaker Name>text</v>` tags for speaker identification.
4. Identify speakers:
   - **Carl** and **Brandon** are the hosts (Teams may show full names like
     "Carl Schweitzer" or "Brandon Martinez" — treat these as the hosts).
   - Any other speaker is likely a guest — cross-reference with the `guest:`
     block in the episode frontmatter if present.
   - If speaker names in the VTT don't match expected names, note the mapping
     and proceed.
5. Cross-reference the transcript with the show notes (if available) to confirm
   which planned topics were actually discussed and which were skipped.

### Step 3: Extract topics into a JSONL file

Before writing any prose, produce a structured list of every key topic found
in the transcript (and show notes, if available). Write this to
`tmp/NNNN-topics.jsonl` — one JSON object per line.

Each line must have these fields:

| Field       | Type       | Description                                                                                          |
| ----------- | ---------- | ---------------------------------------------------------------------------------------------------- |
| `topic`     | string     | Short topic label (3-8 words).                                                                       |
| `timestamp` | string     | Approximate VTT start time (`HH:MM:SS`) of when the topic begins.                                   |
| `speakers`  | string[]   | Who contributed to this segment (`"Carl"`, `"Brandon"`, guest name).                                 |
| `detail`    | string     | 1-2 sentence factual description of what was said — no editorializing.                               |
| `refs`      | string[]   | Technologies, products, people, or URLs mentioned by name in this segment (empty array if none).     |

**Rules for topic extraction:**

- Only include topics that appear in the transcript. Do not infer or invent
  topics that were not discussed.
- Skip pre-show banter and recording-setup chatter — start from the episode
  introduction.
- Each topic should be a distinct subject, not a restatement of an earlier one.
  If a subject is revisited later, add a new line with the later timestamp.
- Keep `detail` grounded in what was actually said. Quote or closely paraphrase
  rather than summarize abstractly.

**Example lines:**

```jsonl
{"topic":"Context window quality cliff","timestamp":"00:28:13","speakers":["Brandon"],"detail":"Filling more than half a model's context window causes significant quality degradation; breaking work into fresh sessions helps.","refs":["context window"]}
{"topic":"Plan mode before implementation","timestamp":"00:35:42","speakers":["Carl","Brandon"],"detail":"Reviewing the model's plan before it writes code prevents implementation churn and wasted tokens.","refs":["GitHub Copilot","plan mode"]}
```

Present this file to the user for review before proceeding. The user may add,
remove, or edit topics. Only continue to Step 5 after the user confirms the
topic list.

### Step 4: Read the existing episode file

1. Read `source/_posts/NNNN-slug.md`.
2. Preserve all existing frontmatter fields (`episode`, `date`, `libsynId`,
   `guest`). Do NOT modify these.
3. Note the current H1 title — preserve it as-is.

### Step 5: Generate the summary section

Write the `## Summary` section following the CloudChat style. See
[style guide](./references/style-guide.md) for detailed examples.

**The summary must be derived from the confirmed JSONL topic list.** Every
claim in the summary must trace back to at least one topic line. Do not
introduce ideas that are not represented in the topic file.

**Style requirements:**

- **Present tense**, conversational recap
- **2-3 paragraphs**, each covering a distinct theme or segment
- **Statement-oriented with host attribution** — lead with direct claims
  about the topic. Attributing ideas to the hosts ("Carl walks through,"
  "Brandon argues") is encouraged. Avoid only the episode-as-container
  phrases: "in this episode," "the episode continues," "the conversation
  opens with," "they close with."
- **Name the hosts** (Carl and Brandon) and any guests naturally in the text
- **Cover key topics** discussed — technical concepts, real-world examples,
  opinions, and takeaways
- **Tone**: technically grounded but conversational, slightly playful, not a dry
  transcript summary
- **Line width**: wrap at ~80 characters for readable markdown source
- Do NOT use bullet points in the summary — write flowing prose paragraphs

### Step 6: Extract and organize links

Build the `## Links` section from URLs and references mentioned in the
transcript and show notes:

1. Identify any URLs spoken or referenced in the conversation.
2. Identify technologies, products, RFCs, services, and documentation referenced
   by name — find the canonical URL for each.
3. **Resolve `// TODO:` items from the show notes** — these are explicit
   requests from the hosts to find and include specific links. Make a best
   effort to locate the canonical URL.
4. Group links by topic under `### Section heading` sub-headers when there are
   more than ~5 links.
5. Use descriptive link text — not bare URLs, not "click here".
6. Format: `- [Descriptive text](https://full-url)`

### Step 7: Generate the frontmatter summary

Write a concise `summary` field for the frontmatter:

- 1-3 sentences
- Suitable for `<meta>` description tags and episode list views
- Captures the core topic and hook of the episode
- Use YAML block scalar style if multi-line

### Step 8: Write the completed content

Update the episode markdown file with:

1. Updated `summary` field in frontmatter (preserve all other fields unchanged)
2. The existing H1 title (unchanged)
3. The new `## Summary` section
4. The new `## Links` section

## Important Rules

- **Never modify** `episode`, `date`, `libsynId`, or `guest` frontmatter fields.
- **Never modify** the H1 title — it was set during scaffolding.
- **Present tense** throughout the summary ("Carl and Brandon talk about..." not
  "talked about").
- **No hallucinated links** — only include URLs for things actually discussed or
  directly referenced (cross-check with the `refs` fields in the JSONL topic
  file). If you can't find a canonical URL for something mentioned, omit it
  rather than guess.
- **Transcript and show notes stay in `tmp/`** — do not move, copy, or commit
  the VTT, show notes, or JSONL topic files.
