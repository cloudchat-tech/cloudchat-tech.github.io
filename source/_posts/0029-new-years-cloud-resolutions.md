---
episode: 0029
date: 2026-01-05
libsynId: 39611475
summary:
  A Stop/Start/Keep resolution list for cloud teams so you stop repeating the
  same incidents for the same reasons in 2026. These resolutions will keep your
  dev and cloud teams focused on improvements for the new year.
---

# New Year's ☁️ Resolutions

## Summary

"In 2026, your cloud is not allowed to have the same incidents for the same
reasons as last year." Carl and Brandon treat this episode like a retrospective
(the kind any good agile team would run), but instead of talking about sprint
tickets, they write a New Year's resolution list on behalf of your cloud team.
The format is simple: Stop, Start, Keep. Small, opinionated constraints that
change day-to-day habits, not vague wishes about "better reliability, security,
and cost."

{% asset_img 2026-new-years-resolutions.png "New Year's Resolutions" %}

The Stop list hits the repeat-incident patterns: single-region "global" apps,
treating infrastructure-as-code as optional (and living in the portal), mystery
ownership with no clear tags or escalation path, one-off production fix scripts
that never get documented, dashboards that are always green while users are
hurting, and "temporary" exceptions that turn into permanent risk.

The Start list is the muscle-building: run realistic failover/incident drills,
measure change and recovery (DORA-style signals and MTTR, not just uptime),
budget reliability and cost together, treat internal platforms like products
with golden paths, standardize secrets and identity, and add a regular "delete
day" so old environments and artifacts do not drag into the new year.

The Keep list is what compounds: automate repetitive toil, invest in
observability tied to real user flows, keep blameless postmortems with concrete
follow-ups, and keep platform/SRE work visible so it does not get squeezed out
by features.

We hope you and your team are able to embrace some of these resolutions in the
coming year, and hope that listening to more CloudChat is at the top of your
list. Happy New Year everybody!

## Links

- [DORA: What is DevOps?](https://cloud.google.com/devops)
- [Site Reliability Engineering (SRE Book)](https://sre.google/sre-book/table-of-contents/)
- [Azure Well-Architected Framework](https://learn.microsoft.com/azure/well-architected/)
- [AWS Well-Architected Framework](https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html)
- [Google Cloud Architecture Framework](https://cloud.google.com/architecture/framework)
- [Azure Bicep documentation](https://learn.microsoft.com/azure/azure-resource-manager/bicep/overview)
- [Terraform documentation](https://developer.hashicorp.com/terraform/docs)
- [Azure Key Vault overview](https://learn.microsoft.com/azure/key-vault/general/overview)
