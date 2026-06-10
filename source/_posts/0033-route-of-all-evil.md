---
episode: 0033
date: 2026-06-08
libsynId: 41602420
summary: |
	Cloud networking still breaks teams in familiar ways: parity assumptions,
	IP and DNS drift, SNAT exhaustion, and hidden egress paths that hurt both
	reliability and cost. Carl and Brandon map the practical pitfalls and the
	architecture habits that keep multi-cloud designs predictable.
---

# Route of All Evil

## Summary

Cloud networking still breaks when teams assume the platform will "just handle
it," and Carl and Brandon dig into why. They challenge that myth and show
where parity falls apart across providers: VNet, VPC, and VCN primitives look
familiar but behave differently in defaults, region and zone design, and
routing/security expectations. From there, the episode moves into foundational
design pressure
points such as IPv4 range planning, overlapping CIDRs, Kubernetes networking
overlays, and the route-level surprises that cause hard-to-diagnose failures,
including asymmetric paths, BGP mistakes, and MTU mismatches.

The second half focuses on the practical failure modes teams feel in production:
SNAT exhaustion that appears as random timeouts, endpoint and DNS choices that
silently change traffic paths, and egress patterns that impact both reliability
and cost. Load balancing choices (Layer 4 vs Layer 7), TLS termination strategy,
and cloud-specific security control models all shape the final behavior of a
system. The throughline is consistent: make network intent explicit, treat
egress and observability as first-class design surfaces, and standardize
repeatable patterns that survive provider changes.

## Links

### Core Networking Concepts

- [RFC 1918: Address Allocation for Private Internets](https://www.rfc-editor.org/rfc/rfc1918)
- [RFC 4632: Classless Inter-domain Routing (CIDR)](https://www.rfc-editor.org/rfc/rfc4632)
- [RFC 4271: Border Gateway Protocol 4 (BGP-4)](https://www.rfc-editor.org/rfc/rfc4271)
- [Maximum Transmission Unit (MTU)](https://en.wikipedia.org/wiki/Maximum_transmission_unit)
- [Asymmetric routing](https://www.auvik.com/franklyit/blog/asymmetric-routing/)

### Cloud Networking and Edge Services

- [Azure Front Door overview](https://learn.microsoft.com/azure/frontdoor/front-door-overview)
- [How Cloudflare works](https://developers.cloudflare.com/fundamentals/concepts/how-cloudflare-works/)
- [Azure Virtual Network overview](https://learn.microsoft.com/azure/virtual-network/virtual-networks-overview)
- [Amazon VPC user guide](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html)
- [OCI Virtual Cloud Network (VCN) overview](https://docs.oracle.com/en-us/iaas/Content/Network/Concepts/overview.htm)

### NAT, Private Access, and Egress

- [Azure NAT Gateway](https://learn.microsoft.com/azure/nat-gateway/nat-gateway-resource)
- [AWS NAT Gateway](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html)
- [Azure Private Endpoint overview](https://learn.microsoft.com/azure/private-link/private-endpoint-overview)
- [Azure bandwidth pricing (egress)](https://azure.microsoft.com/pricing/details/bandwidth/)

### Load Balancing, Security, and Operations

- [Azure Load Balancer overview](https://learn.microsoft.com/azure/load-balancer/load-balancer-overview)
- [Azure Application Gateway overview](https://learn.microsoft.com/azure/application-gateway/overview)
- [Azure Traffic Manager overview](https://learn.microsoft.com/azure/traffic-manager/traffic-manager-overview)
- [Microsoft Zero Trust guidance](https://www.microsoft.com/security/business/zero-trust)
- [Azure Network Watcher flow logs overview](https://learn.microsoft.com/azure/network-watcher/network-watcher-nsg-flow-logging-overview)

### Hybrid Connectivity

- [AWS Direct Connect](https://docs.aws.amazon.com/directconnect/latest/UserGuide/Welcome.html)
- [Azure ExpressRoute overview](https://learn.microsoft.com/azure/expressroute/expressroute-introduction)
- [Oracle FastConnect overview](https://docs.oracle.com/en-us/iaas/Content/Network/Concepts/fastconnectoverview.htm)
