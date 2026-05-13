---
episode: 0032
date: 2026-05-11
libsynId: 41286580
summary:
  If everything is logged, nothing is useful. Carl and Brandon walk through what
  logging is really for in cloud architectures, how to use log levels and
  structured formats without drowning in noise or cost, and the correlation,
  retention, and platform habits that turn logs from a line item into a
  debugging superpower.
---

# Rolling, Rolling, Rolling…

## Summary

Logs are ground truth — high-fidelity, event-level data that anchor
observability alongside metrics and traces. Carl and Brandon argue the biggest
mistake teams make is treating "more logs" as "better logs." If everything is
logged, nothing is useful, and they both share recent troubleshooting sessions
where verbose, unstructured output forced them into KQL gymnastics just to find
the actual error. Brandon walks through a 503 that turned out to be a database
fault hidden one layer down, and Carl recounts a customer whose "unplanned" VM
reboots were actually planned Kubernetes node maintenance — a story you can only
untangle by correlating infrastructure and platform logs. Along the way they
cover the six log sources worth thinking about (application, infrastructure,
platform/managed service, security, audit, and access logs), with a detour into
a customer whose minute-long latency vanished once infra logs revealed a VPN
routing New York users through Texas.

The middle of the episode is a clinic on log hygiene. Carl walks through log
levels — debug/verbose, info, warn, error, fatal — and the distinction Brandon
draws between an exception (a code construct) and an error (a log level): a
caught exception is an error, an uncaught one becomes fatal. They make the case
for structured logging into stores like Kusto or via OpenTelemetry so keys can
be projected, indexed, and fed directly into dashboards, and Brandon's tip on
not pre-computing expensive log arguments is a reminder that a disabled verbose
call still costs CPU if you build its message eagerly. Centralized logging
pipelines beat rolling your own helper class — log4-anything frameworks exist
for a reason — and UTC alone won't save you when scaled-out instances drift
apart in time. Correlation and trace IDs, especially parent/child IDs from
OpenTelemetry, are the thread that stitches a single user's journey back
together across microservices.

Carl and Brandon close on cost and discipline. Logging budgets balloon fast, so
production should not be running verbose, retention should be tiered (a month of
exceptions is plenty once the fix ships), duplicate destinations like Log
Analytics plus Event Hubs plus a storage account should pick one source of
truth, and Application Insights-style sampling can collapse repetitive traffic
into representative events. Compliance logs that sit for years belong in cold or
frozen storage tiers where the access pattern actually matches the cost. Their
do's and don'ts land on a simple posture: log with intent, redact secrets and
connection strings, standardize across teams, and — especially if AI agents are
writing your code — make sure the logging conventions travel with the work.
Point an agent at a recent run and ask where the gaps and noise are; it's a fast
way to audit whether your logs are actually doing their job.

## Links

### Observability and logging concepts

- [OpenTelemetry](https://opentelemetry.io/)
- [OpenTelemetry traces and spans](https://opentelemetry.io/docs/concepts/signals/traces/)
- [W3C Trace Context (correlation IDs)](https://www.w3.org/TR/trace-context/)
- [Structured logging overview (Microsoft Learn)](https://learn.microsoft.com/en-us/dotnet/core/extensions/logging?tabs=command-line#log-message-template)
- [Log levels in .NET (LogLevel enum)](https://learn.microsoft.com/en-us/dotnet/api/microsoft.extensions.logging.loglevel)

### Logging frameworks

- [log4j (Apache)](https://logging.apache.org/log4j/2.x/)
- [log4net (Apache)](https://logging.apache.org/log4net/)
- [Serilog (structured logging for .NET)](https://serilog.net/)

### Azure platform logging

- [Azure Monitor Logs / Log Analytics](https://learn.microsoft.com/en-us/azure/azure-monitor/logs/log-analytics-overview)
- [Azure diagnostic settings](https://learn.microsoft.com/en-us/azure/azure-monitor/essentials/diagnostic-settings)
- [Azure Application Insights sampling](https://learn.microsoft.com/en-us/azure/azure-monitor/app/sampling)
- [Kusto Query Language (KQL)](https://learn.microsoft.com/en-us/kusto/query/)
- [Azure Event Hubs](https://learn.microsoft.com/en-us/azure/event-hubs/event-hubs-about)
- [Azure Blob Storage access tiers (hot/cool/cold/archive)](https://learn.microsoft.com/en-us/azure/storage/blobs/access-tiers-overview)

### Security and supply chain

- [XZ Utils backdoor (CVE-2024-3094)](https://nvd.nist.gov/vuln/detail/CVE-2024-3094)
- [Veritasium: "The Internet Was Weeks Away From Disaster and No One Knew"](https://www.youtube.com/watch?v=aoag03mSuXQ)

### Related CloudChat episodes

- [Episode 0024 — Operating Excellently](https://cloudchat.tech/2025/08/0024-operating-excellently/)
- [Episode 0025 — The Sound of Security](https://cloudchat.tech/2025/09/0025-the-sound-of-security/)
- [Episode 0026 — Are Your Cloud Costs Too Damn High?](https://cloudchat.tech/2025/10/0026-are-your-cloud-costs-too-damn-high/)
