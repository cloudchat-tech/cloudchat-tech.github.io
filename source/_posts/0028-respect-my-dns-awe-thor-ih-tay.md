---
episode: 0028
date: 2025-12-01
libsynId: 39228085
summary:
  DNS still runs the internet, but we keep asking it to do things it was never
  built for. In this episode, we talk about why DNS becomes a single point of
  failure in modern cloud apps, how real outages play out, and what you can do
  to actually steer traffic when the edge breaks.
---

# Respect my (DNS) Awe-thor-ih-TAY!!

## Summary

Your cloud is humming along, then an edge breaks. What lever do you actually
still have to steer users? In this episode, Carl and Brandon dig into DNS as a
control plane and why “it is always DNS” keeps being true in 2025. DNS was
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
door. We also hit the observability side so “it is DNS” becomes a graph and an
alert instead of a guess in a war room. We close with a look at emerging record
types like SVCB/HTTPS and how they may help you advertise alternate endpoints
and protocol hints without building another fragile tower of CNAMEs.

## Links

### DNS Fundamentals

- [RFC 1034: Domain Names - Concepts and Facilities](https://www.rfc-editor.org/rfc/rfc1034)
- [RFC 1035: Domain Names - Implementation and Specification](https://www.rfc-editor.org/rfc/rfc1035)
- [RFC 2308: Negative Caching of DNS Queries](https://www.rfc-editor.org/rfc/rfc2308)
- [RFC 8767: Serving Stale Data to Improve DNS Resiliency](https://www.rfc-editor.org/rfc/rfc8767)

### DNS Load Balancing and Edge Services

- [Azure Traffic Manager documentation](https://learn.microsoft.com/azure/traffic-manager/traffic-manager-overview)
- [Azure DNS alias records](https://learn.microsoft.com/azure/dns/dns-alias)
- [Amazon Route 53 health checks and failover](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover.html)
- [Cloudflare Load Balancing](https://developers.cloudflare.com/load-balancing/)
- [Akamai Global Traffic Management](https://techdocs.akamai.com/gtm/docs)

### Azure, AWS, and Cloudflare Outage Reading

- [Azure Front Door service documentation](https://learn.microsoft.com/azure/frontdoor/)
- [AWS DynamoDB and Route 53 service health history](https://health.aws.amazon.com/health/status)
- [Cloudflare status history](https://www.cloudflarestatus.com/)

### Architectures and Private DNS

- [Azure Private DNS zones](https://learn.microsoft.com/azure/dns/private-dns-privatednszone)
- [Azure DNS Private Resolver](https://learn.microsoft.com/azure/dns/dns-private-resolver-overview)
- [Azure Virtual WAN DNS guidance](https://learn.microsoft.com/azure/virtual-wan/virtual-wan-global-transit-network-architecture)

### Emerging DNS Records and HTTP/3

- [Service binding (SVCB) and HTTPS resource records](https://www.rfc-editor.org/rfc/rfc9460)
