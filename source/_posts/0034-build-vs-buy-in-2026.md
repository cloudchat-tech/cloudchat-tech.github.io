---
episode: 0034
date: 2026-09-07
libsynId: 42840410
summary: |
  Build versus buy is not a new question, but agentic coding changed the math
  behind it. Carl and Brandon walk the tradeoffs — speed, cost, differentiation,
  and lock-in — and offer a four-question framework for deciding what is
  actually worth owning.
---

# Build vs Buy in 2026 (Yes, We Mean AI)

## Summary

Build versus buy has been part of software since there was software to buy —
custom development, licensed components, SaaS, managed service providers — and
the deciding factor was usually what staff you already had or could afford to
hire. What makes 2026 different is agentic coding, and Carl opens with a
first-hand example: an off-the-shelf theme package that tanked his desktop app's
performance, where two years ago the realistic options were file an issue, rip
it out, or live with an ugly app. Instead he handed the requirements to an agent
and got a replacement. Writing code is edging toward commodity, which pushes the
architect's job from deciding what is possible to justifying what is worth
owning.

The tradeoffs still bite. Buying gets functionality fast but binds you to a
vendor's feature set, plugin model, and visibility into how your data is
handled — and Brandon is clear that "buy" includes open source you didn't write.
Cost is where teams get optimistic: the news story about a health insurer vibe
coding a CRM to replace a $600,000-a-year SaaS contract makes a great
headline, but operational support, on-call, patching, admin tooling for
credential resets and GDPR requests, and the hosting bill all arrive later.
Brandon's TMNT framing — time, money, and tokens — captures the modern version,
especially when per-engineer AI spend starts rivaling the engineers themselves.
Differentiation is the sharper filter: custom game engines were once a
competitive edge until consolidation made bespoke engines an onboarding tax, and
the same logic says a health insurer's differentiation lives in its domain
knowledge, not in its CRM. Lock-in gets a nuanced treatment too, split between
harmful lock-in that limits strategic flexibility and acceptable lock-in that
just accelerates delivery, with contracts and auto-renewal terms doing as much
damage as any technical coupling.

The framework that falls out of it is four questions: is this core to the
business, do you need deep customization, what is the long-term operational
burden, and how hard would it be to leave later. None of these are new
questions — commoditization played out the same way with carts, cars, and
outsourced truck transmissions — but agentic coding put a new lens on them.
Build where differentiation is real, buy for the rest, price the total cost of
ownership on both sides, and remember that defining the business requirements is
still your job.

## Links

### Referenced in the Episode

- [A health insurer vibecoded a CRM and ditched its CRM contract](https://www.businessinsider.com/curative-ceo-salesforce-vibecode-crm-2026-7)
- [Keycloak identity and access management](https://www.keycloak.org/)
- [Auth0 by Okta](https://auth0.com/)
- [Okta](https://www.okta.com/)
- [Unity real-time development platform](https://unity.com/)
- [The npm left-pad incident](https://blog.npmjs.org/post/141577284765/kik-left-pad-and-npm)

### Cost, Ownership, and Operations

- [Total cost of ownership (TCO)](https://en.wikipedia.org/wiki/Total_cost_of_ownership)
- [Day 2 operations explained](https://www.redhat.com/en/topics/automation/what-is-day-2-operations)
- [Understanding service level agreements](https://learn.microsoft.com/azure/well-architected/reliability/metrics)
- [GitHub Actions billing and usage limits](https://docs.github.com/billing/managing-billing-for-github-actions/about-billing-for-github-actions)
- [GDPR data subject requests](https://gdpr.eu/right-to-be-forgotten/)

### Architecture Patterns and Lock-In

- [Repository pattern](https://learn.microsoft.com/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/infrastructure-persistence-layer-design)
- [Domain-driven design](https://martinfowler.com/bliki/DomainDrivenDesign.html)
- [Vendor lock-in](https://en.wikipedia.org/wiki/Vendor_lock-in)
