---
episode: 0027
date: 2025-11-03
libsynId: 38889460
summary:
  Capacity and quota aren’t the same. We break down the difference, why it
  matters when you scale or fail over, and practical ways to plan and mitigate
  when capacity runs tight across Azure, AWS, and Google Cloud.
---

# Whoops, No VM's!!!

## Summary

You've planned for redundancy, scaling, and failover, but what happens when the
cloud itself runs out of space? In this episode, Carl and Brandon untangle
**capacity** (what the provider physically or logically has available in a
region or zone) versus **quota** (the soft limit on what you can consume).
Mixing the two leads to painful surprises during scale events and failovers.

We talk through how capacity shortfalls show up in real life—zones that are
full, SKUs that vary by location, and limited supply for GPU-heavy instances,
and the patterns that help: design for multiple zones and regions, add retry and
fallback logic with flexible SKUs, balance spot with on-demand, and hold a
baseline with reservations or time-bound commitments.

We close on the business side: the price of headroom, when commitments make
sense, and simple pipeline and monitoring checks so “no capacity” errors fail
fast instead of 30 minutes into a deploy.

## Links

- [AWS Auto Scaling allocation strategies](https://docs.aws.amazon.com/autoscaling/ec2/userguide/allocation-strategies.html)
- [AWS EC2 Capacity Reservations](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-capacity-reservations.html)
- [AWS insufficient capacity guidance](https://repost.aws/knowledge-center/ec2-insufficient-capacity-errors)
- [AWS Savings Plans](https://docs.aws.amazon.com/savingsplans/latest/userguide/what-is-savings-plans.html)
- [AWS Service Quotas](https://docs.aws.amazon.com/servicequotas/)
- [Azure On-demand Capacity Reservations](https://learn.microsoft.com/azure/virtual-machines/capacity-reservation-overview)
- [Azure quotas overview](https://learn.microsoft.com/azure/quotas/quotas-overview)
- [Azure region pairs](https://learn.microsoft.com/azure/reliability/regions-paired)
- [Azure subscription and service limits](https://learn.microsoft.com/azure/azure-resource-manager/management/azure-subscription-service-limits)
- [Azure VM allocation failures](https://learn.microsoft.com/troubleshoot/azure/virtual-machines/windows/allocation-failure)
- [Azure VM Scale Sets orchestration modes (Flexible)](https://learn.microsoft.com/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-orchestration-modes)
- [GCP Compute Engine Reservations](https://cloud.google.com/compute/docs/instances/reservations-overview)
- [GCP quota alerts and monitoring](https://cloud.google.com/docs/quotas/set-up-quota-alerts)
- [GCP Regional Managed Instance Groups](https://cloud.google.com/compute/docs/instance-groups/regional-migs)
- [GCP resource availability errors](https://cloud.google.com/compute/docs/troubleshooting/troubleshooting-resource-availability)
- [Google Cloud quotas overview](https://cloud.google.com/docs/quotas/overview)
