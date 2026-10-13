---
episode: 0035
date: 2026-10-05
libsynId: 43272858
summary: |
  Reliability is often treated as a reason to add more systems, more retries,
  and more failover logic — but the real problem is complexity. Carl and Brandon
  unpack why the most reliable systems are usually the ones that are easy to
  reason about, easy to recover, and intentionally designed around real business
  requirements instead of overbuilding for hypothetical failure.
---

# Reliability vs Complexity: Where to Draw the Line

## Summary

Reliability is often confused with availability, and Carl and Brandon dig into
why stacking more safeguards — retries, circuit breakers, asynchronous queues,
and multi-region failover — frequently makes systems less reliable rather than
more. Every added layer introduces non-linear interactions, coordination
challenges, and state synchronization headaches where the hardest failures hide.
Brandon points to real-world architectures engineered to withstand every
theoretical outage across multiple regions, only to require dedicated teams just
to keep the operational machinery from collapsing under its own weight. When
resilience mechanisms multiply, systems trade simple, predictable failures for
catastrophic cascading outages and retry storms that no one can reason about
under pressure.

Drawing the line comes down to treating complexity as a primary risk factor
rather than a badge of honor. Instead of reaching for active-active redundancy
or distributed microservices by default, dependable engineering starts by
mapping critical user paths and exhausting simpler options first. Automation,
event-driven decoupling, and multi-region routing only improve resilience when
their failure modes are thoroughly understood and validated through chaos
testing and post-incident reviews. Ultimately, the most reliable systems are
rarely the most elaborate; they are the architectures teams can actually
understand, operate, and recover when things inevitably go wrong.

## Links

### Reliability and Architecture

- [The Reliability Pillar of the AWS Well-Architected Framework](https://docs.aws.amazon.com/wellarchitected/latest/framework/the-reliability-pillar.html)
- [Azure Well-Architected Framework - Reliability](https://learn.microsoft.com/azure/well-architected/reliability/)
- [Site Reliability Engineering](https://sre.google/sre-book/)

### Failure Modes and Resilience

- [The fallacies of distributed computing](https://en.wikipedia.org/wiki/Fallacies_of_distributed_computing)
- [Retry pattern](https://learn.microsoft.com/azure/architecture/patterns/retry)
- [Circuit breaker pattern](https://martinfowler.com/bliki/CircuitBreaker.html)
