---
episode: 0012
date: 2024-08-26
libsynId: 32737242
summary:
  Carl and Brandon discuss the core aspects of cloud computing, including
  Regions, Availability Zones, Quota, and Capacity. They highlight the
  importance of deploying applications across multiple zones for fault
  tolerance, and explore Azure's approach to paired regions and capacity
  reservations.
---

# Words Mean Things

## Summary

In our latest podcast episode, Carl and Brandon explored the fundamental aspects
of cloud computing, focusing on Regions, Availability Zones, Quota, and
Capacity. They discussed how regions are collections of zones, each with
high-bandwidth, low-latency network connections, and the importance of deploying
applications across multiple zones and regions to ensure fault tolerance and
high availability. They also delved into the differences between logical and
physical zones, and how regional resources can be accessed by any zone within
that region. Additionally, they examined Azure's approach to paired regions and
the need for custom geo-redundant capabilities in newer regions.

The conversation then shifted to the concepts of quota and capacity in cloud
computing. Quotas, synonymous with limits, ensure that each service can offer a
minimum amount of resources. Carl and Brandon discussed the different types of
quotas, including soft limits that can be raised through support requests, and
the architectural options available when more resources are needed. They
highlighted the importance of diversifying resource types to overcome quota
limits and enhance application resilience. Finally, they examined capacity
limitations, the concept of capacity reservations in Azure, and the differences
between on-demand capacity reservations and reserved instances.

{% asset_img cloud-golf.jpg "Cloud Golf" %}

## Links

- [Regions vs Zones](https://cloud.google.com/compute/docs/regions-zones)
- [Logical vs Physical Zones](https://learn.microsoft.com/en-us/azure/reliability/availability-zones-overview?tabs=azure-cli#physical-and-logical-availability-zones)
- [Azure - Paired Regions](https://learn.microsoft.com/en-us/azure/reliability/cross-region-replication-azure#regions-with-availability-zones-and-no-region-pair)
- [Quota vs Capacity](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/azure-subscription-service-limits)
- [Google Cloud Quotas](https://console.cloud.google.com/iam-admin/quotas?_ga=2.91596826.1664678140.1723656382-1735192976.1720448861)
- [AWS Service Limits](https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html)
- [Capacity Reservation (Azure)](https://learn.microsoft.com/en-us/azure/virtual-machines/capacity-reservation-overview#difference-between-on-demand-capacity-reservation-and-reserved-instances)
