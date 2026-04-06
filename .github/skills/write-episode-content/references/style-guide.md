# Episode Content Style Guide

## Summary Writing Style

The `## Summary` section is a multi-paragraph conversational recap written in present tense. It reads like a well-written blog post about what the episode covers — not a transcript, not bullet points, not a dry abstract.

### Key characteristics

- **Present tense**: "Carl and Brandon dig into..." not "dug into"
- **Names the hosts naturally**: "Carl kicks off with..." or "Carl and Brandon talk through..."
- **2-5 paragraphs**: each covering a distinct topic segment
- **Conversational but technical**: specific terms and concepts, explained in context
- **Concrete examples**: mention specific products, services, incidents discussed
- **Closes with a takeaway or gut-check**: the last paragraph often wraps up the theme

### Example: Episode 0028 (DNS episode)

```markdown
## Summary

Your cloud is humming along, then an edge breaks. What lever do you actually
still have to steer users? In this episode, Carl and Brandon dig into DNS as a
control plane and why "it is always DNS" keeps being true in 2025. DNS was
designed for a slower internet with long TTLs and infrequent changes, but we now
treat it like a real-time steering wheel for global failover. That mismatch
shows up in outages where the backend is fine but nobody can resolve the
hostname that front doors, CDNs, and APIs live behind. We unpack how TTL and
caching really work (including negative caching and serve-stale), why modern
edge products like Azure Front Door and Cloudflare can still turn into global
single points of failure, and how DNS-based load balancers actually behave when
you flip weights or priorities.

From there we move into patterns and mitigations. We walk through hub-and-spoke
vs mesh topologies and where public vs private DNS sit in each, plus concrete
strategies for what to do when your edge is broken: bypass patterns, equivalent
services, and multi-product designs that let you route around a failing front
door. We also hit the observability side so "it is DNS" becomes a graph and an
alert instead of a guess in a war room. We close with a look at emerging record
types like SVCB/HTTPS and how they may help you advertise alternate endpoints
and protocol hints without building another fragile tower of CNAMEs.
```

### Example: Episode 0030 (local-first episode)

```markdown
## Summary

This episode is about designing for the last day, not just the launch day. Carl
kicks off with the Bose SoundTouch situation: a vendor moves toward EOL on a
cloud-tethered API, users push back, and the outcome (at least in spirit)
becomes a blueprint we wish was more common: keep the hardware useful by
enabling local control paths and leaning on protocols that already work without
your cloud. From there we broaden the conversation to the bigger problem:
products and services that do something totally reasonable in a LAN suddenly
need a round trip to the internet just to respond to a button press.

Carl and Brandon talk through concrete "this actually happened" examples and
what good looks like. Belkin's Wemo sunset email is a solid reference: clear
dates, repeated notices, and a reality check that local APIs and ecosystems like
HomeKit and Matter can keep devices working even when a vendor endpoint is shut
off. We contrast that with the messier side of the industry: thermostats and
other home gear that still function locally, but lose their main value when the
cloud connection is removed, and cloud-only platforms like Stadia where "no
backend" means "hard stop" (with the one bright spot being things like refunds
and a final firmware update to unlock a controller for normal Bluetooth use).

On the builder side, we get practical about how to retire things without
surprising your users. We cover technical signaling (Deprecation and Sunset
headers), the need for human-friendly comms beyond "put it in the docs," and the
architecture patterns that make "minimum viable offline" real: local-first
state, local discovery and control surfaces, and fallbacks that do not require
re-pairing or re-auth when identity systems go away. We also touch on SaaS
escrow and continuity as a way to build trust (especially for startups) and
close with a simple gut check: if your cloud disappeared tonight, what can your
users still do tomorrow morning?
```

### Example: Episode 0029 (resolutions episode)

```markdown
## Summary

"In 2026, your cloud is not allowed to have the same incidents for the same
reasons as last year." Carl and Brandon treat this episode like a retrospective
(the kind any good agile team would run), but instead of talking about sprint
tickets, they write a New Year's resolution list on behalf of your cloud team.
The format is simple: Stop, Start, Keep. Small, opinionated constraints that
change day-to-day habits, not vague wishes about "better reliability, security,
and cost."
```

## Frontmatter Summary Style

The `summary` frontmatter field is a short meta description (1-3 sentences) used in `<meta>` tags and episode list views.

### Characteristics

- Concise hook that captures the core topic
- Written for someone scanning an episode list
- YAML block scalar style for multi-line

### Examples

```yaml
summary:
  DNS still runs the internet, but we keep asking it to do things it was never
  built for. In this episode, we talk about why DNS becomes a single point of
  failure in modern cloud apps, how real outages play out, and what you can do
  to actually steer traffic when the edge breaks.
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
- Include the source in brackets when helpful: `[Bose open-sourcing speakers | The Verge](url)`
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
- Each caption block has a timestamp line (`HH:MM:SS.mmm --> HH:MM:SS.mmm`) followed by one or more text lines.
- Speaker attribution uses `<v Full Name>text</v>` tags.
- The same speaker may appear across many consecutive blocks — mentally merge these for context.
- Teams may include positioning metadata (e.g., `align:start position:0%`) on the timestamp line — ignore this.
- Speaker names may be full names ("Carl Schweitzer", "Brandon Martinez") — map these to the known hosts Carl and Brandon.
