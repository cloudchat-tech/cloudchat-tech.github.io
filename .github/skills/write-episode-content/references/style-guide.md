# Episode Content Style Guide

## Summary Writing Style

The `## Summary` section is a multi-paragraph conversational recap written in
present tense. It reads like a well-written blog post about what the episode
covers — not a transcript, not bullet points, not a dry abstract.

### Key characteristics

- **Present tense**: "Carl and Brandon dig into..." not "dug into"
- **Names the hosts naturally**: "Carl kicks off with..." or "Carl and Brandon
  talk through..."
- **2-3 paragraphs**: each covering a distinct topic segment
- **Statement-oriented with host attribution**: lead with direct claims about
  the topic, not meta-commentary about the episode itself. Phrases like "Carl
  and Brandon talk through," "Brandon argues," or "Carl walks through his
  project" are great — they attribute ideas to the hosts and feel like a podcast
  description. Avoid only the episode-as-container phrases: "in this episode,"
  "the episode continues," "the conversation opens with," "they close with." The
  goal is a blog-style description that sounds like people discussing ideas, not
  a table of contents.
- **Conversational but technical**: specific terms and concepts, explained in
  context
- **Concrete examples**: mention specific products, services, incidents
  discussed
- **Closes with a takeaway or gut-check**: the last paragraph often wraps up the
  theme

### Example: Episode 0028 (DNS episode)

```markdown
## Summary

Your cloud is humming along, then an edge breaks. The one lever you still have
to steer users is DNS — and "it is always DNS" keeps being true in 2025. DNS was
designed for a slower internet with long TTLs and infrequent changes, but we now
treat it like a real-time steering wheel for global failover. That mismatch
shows up in outages where the backend is fine but nobody can resolve the
hostname that front doors, CDNs, and APIs live behind. Carl and Brandon unpack
how TTL and caching really work (including negative caching and serve-stale),
why modern edge products like Azure Front Door and Cloudflare can still turn
into global single points of failure, and how DNS-based load balancers actually
behave when you flip weights or priorities.

Hub-and-spoke vs mesh topologies each put public and private DNS in different
places, and the mitigation strategies matter when your edge is broken: bypass
patterns, equivalent services, and multi-product designs that let you route
around a failing front door. Observability turns "it is DNS" from a guess in a
war room into a graph and an alert. Emerging record types like SVCB/HTTPS may
help advertise alternate endpoints and protocol hints without building another
fragile tower of CNAMEs.
```

### Example: Episode 0030 (local-first episode)

```markdown
## Summary

Good product design means designing for the last day, not just the launch day.
The Bose SoundTouch situation is a blueprint: a vendor moves toward EOL on a
cloud-tethered API, users push back, and the outcome keeps the hardware useful
by enabling local control paths and leaning on protocols that already work
without your cloud. Belkin's Wemo sunset email is another solid reference —
clear dates, repeated notices, and a reality check that local APIs and
ecosystems like HomeKit and Matter can keep devices working even when a vendor
endpoint is shut off. Contrast that with thermostats that lose their main value
when the cloud disappears, or cloud-only platforms like Stadia where "no
backend" means "hard stop."

Retiring things without surprising your users takes technical signaling
(Deprecation and Sunset headers), human-friendly comms beyond "put it in the
docs," and architecture patterns that make "minimum viable offline" real:
local-first state, local discovery and control surfaces, and fallbacks that do
not require re-pairing or re-auth when identity systems go away. SaaS escrow and
continuity clauses build trust, especially for startups. The gut check is
simple: if your cloud disappeared tonight, what can your users still do tomorrow
morning?
```

### Example: Episode 0029 (resolutions episode)

```markdown
## Summary

"In 2026, your cloud is not allowed to have the same incidents for the same
reasons as last year." Carl and Brandon write a New Year's resolution list on
behalf of your cloud team — retrospective-style, the kind any good agile team
would run. The format is simple: Stop, Start, Keep. Small, opinionated
constraints that change day-to-day habits, not vague wishes about "better
reliability, security, and cost."
```

## Frontmatter Summary Style

The `summary` frontmatter field is a short meta description (1-3 sentences) used
in `<meta>` tags and episode list views.

### Characteristics

- Concise hook that captures the core topic
- Written for someone scanning an episode list
- YAML block scalar style for multi-line

### Examples

```yaml
summary:
  DNS still runs the internet, but we keep asking it to do things it was never
  built for. It becomes a single point of failure in modern cloud apps, real
  outages play out around it, and there are concrete things you can do to
  actually steer traffic when the edge breaks.
```

```yaml
summary:
  What happens to a "smart" product when its cloud goes away? We start with a
  rare case where an EOL story did not end in a brick, then walk through the
  patterns that keep devices and clients useful after shutdown.
```

```yaml
summary:
  A Stop/Start/Keep resolution list for cloud teams so you stop repeating the
  same incidents for the same reasons in 2026. These resolutions will keep your
  dev and cloud teams focused on improvements for the new year.
```

## Link Formatting

### Grouped by topic (many links)

```markdown
## Links

### DNS Fundamentals

- [RFC 1034: Domain Names - Concepts and Facilities](https://www.rfc-editor.org/rfc/rfc1034)
- [RFC 1035: Domain Names - Implementation and Specification](https://www.rfc-editor.org/rfc/rfc1035)

### DNS Load Balancing and Edge Services

- [Azure Traffic Manager documentation](https://learn.microsoft.com/azure/traffic-manager/traffic-manager-overview)
- [Cloudflare Load Balancing](https://developers.cloudflare.com/load-balancing/)
```

### Flat list (fewer links)

```markdown
## Links

- [DORA: What is DevOps?](https://cloud.google.com/devops)
- [Site Reliability Engineering (SRE Book)](https://sre.google/sre-book/table-of-contents/)
- [Azure Well-Architected Framework](https://learn.microsoft.com/azure/well-architected/)
```

### Link text rules

- Descriptive: `[Azure Traffic Manager documentation](url)` not `[link](url)`
- Include the source in brackets when helpful:
  `[Bose open-sourcing speakers | The Verge](url)`
- RFCs include the number and title: `[RFC 8594: Sunset HTTP Header](url)`
- No bare URLs in the markdown body

## VTT Transcript Format Reference

Microsoft Teams VTT files follow this structure:

```
WEBVTT

00:00:00.000 --> 00:00:05.520
<v Carl Schweitzer>Welcome back to CloudChat. Today we're going to talk about...</v>

00:00:05.520 --> 00:00:12.040
<v Brandon Martinez>Yeah, this is a topic that comes up a lot in...</v>
```

### Parsing notes

- The `WEBVTT` header line appears first and should be skipped.
- Each caption block has a timestamp line (`HH:MM:SS.mmm --> HH:MM:SS.mmm`)
  followed by one or more text lines.
- Speaker attribution uses `<v Full Name>text</v>` tags.
- The same speaker may appear across many consecutive blocks — mentally merge
  these for context.
- Teams may include positioning metadata (e.g., `align:start position:0%`) on
  the timestamp line — ignore this.
- Speaker names may be full names ("Carl Schweitzer", "Brandon Martinez") — map
  these to the known hosts Carl and Brandon.
