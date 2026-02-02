---
episode: 0030
date: 2026-02-02
libsynId: 39959455
summary:
  What happens to a "smart" product when its cloud goes away? We start with a
  rare case where an EOL story did not end in a brick, then walk through the
  patterns that keep devices and clients useful after shutdown.
---

# Local‑First Lifeboats: Architecting for Post‑EOL Usability

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

## Links

### News and examples we discussed

- [Bose is open-sourcing its old smart speakers instead of bricking them | The Verge](https://www.theverge.com/news/858501/bose-soundtouch-smart-speakers-open-source)
- [Belkin Wemo cloud service end-of-support notice](https://www.belkin.com/support-article/?articleNum=335419)
- [Google Stadia - Strategy change and shutdown (2021–2023) | Wikipedia](<https://en.wikipedia.org/wiki/Google_Stadia#Strategy_change_and_shutdown_(2021–2023)>)

### API deprecation and shutdown mechanics

- [Deprecation HTTP response header (RFC 9745)](https://www.rfc-editor.org/rfc/rfc9745.html)
- [Sunset HTTP response header (RFC 8594)](https://www.rfc-editor.org/rfc/rfc8594.html)

### Smart-home protocols and "local-first" connectivity

- [Matter (Connectivity Standards Alliance)](https://csa-iot.org/all-solutions/matter/)
- [Thread protocol overview (Thread Group)](https://www.threadgroup.org/)
- [Multicast DNS (mDNS) (RFC 6762)](https://www.rfc-editor.org/rfc/rfc6762)

### Tools and patterns

- [Local-first software (Ink & Switch)](https://www.inkandswitch.com/essay/local-first/)
- [Strangler Fig Application pattern (Martin Fowler)](https://martinfowler.com/bliki/StranglerFigApplication.html)
- [Automerge (CRDT) - GitHub](https://github.com/automerge/automerge)
- [Yjs (CRDT) - GitHub](https://github.com/yjs/yjs)

### Contracts and continuity

- [SaaS escrow overview (Escrow London)](https://www.escrowlondon.com/)
- [SaaS escrow overview (PRAXIS Escrow)](https://praxisescrow.com/)
- [Software escrow overview (EscrowTech)](https://www.escrowtech.com/)

### Other links of interest

- [Microsoft Modern Lifecycle Policy](https://learn.microsoft.com/lifecycle/policies/modern)
- [EU Right to Repair overview (European Commission)](https://commission.europa.eu/law/law-topic/consumer-protection-law/directive-repair-goods_en)
