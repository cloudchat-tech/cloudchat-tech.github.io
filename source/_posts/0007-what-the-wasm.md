---
episode: 0007
date: 2024-06-17
libsynId: 31768777
summary:
  Carl and Brandon are joined by Steven Murawski, a Principal Cloud Advocate at
  Microsoft, to discuss Web Assembly (WASM) and how it can empower developers
  building cloud solutions.
guest:
  name: Steven Murawski
  bio:
    Steven is a principal cloud advocate at Microsoft, spending his time working
    in Rust, WASM, kubernetes, and Azure.
  socials:
    twitter: stevenmurawski
    linkedin: usepowershell
---

# What the WASM?

## Summary

In this episode, we are joined by our first guest, Steven Murawski, a Principal
Cloud Advocate at Microsoft, who provides an insightful discussion on
WebAssembly (WASM) and its role in enabling interoperability across programming
languages. The conversation delves into Web Assembly's objective of creating a
portable execution format for multiple languages with near-native performance,
and how it is designed to create a new interface when transitioning from the
browser to the server-side.

We also explore how WebAssembly can be leveraged to modify application behavior
by publishing interfaces for scenarios such as incoming changes, logging, or
composing rule components, and the potential standalone use cases in a cloud
ecosystem. We also discuss the possibilites of SDKs as wrappers around REST APIs
or other shared endpoints, the role of different runtimes like wasmtime and
Spin, and the concept of "worlds" in WebAssembly.

We would like to extend our gratitude to Steven for joining us and sharing his
valuable insights!

## Links

- **Web Assembly System Interface (WASI)**
  - [Web assembly system interface](https://wasi.dev/)
  - [WASI 0.2 Launched](https://bytecodealliance.org/articles/WASI-0.2)
  - [Azure AKS Use WASI Node Pools](https://learn.microsoft.com/en-us/azure/aks/use-wasi-node-pools)
- **Component Model**
  - [Component Model](https://component-model.bytecodealliance.org/)
  - [WIT](https://github.com/WebAssembly/component-model/blob/main/design/mvp/WIT.md)
- **WASM Runtimes**
  - [Wasmtime](https://wasmtime.dev/)
  - [Wamr](https://bytecodealliance.github.io/wamr.dev/)
  - [JCO](https://bytecodealliance.org/articles/jco-1.0)
  - [containerd shim](https://github.com/deislabs/containerd-wasm-shims)
- **Fermyon**
  - [Fermyon - Spin](https://www.fermyon.com/blog/introducing-spin)
  - [Fermyon - SpinKube](https://www.fermyon.com/blog/introducing-spinkube-fermyon-platform-for-k8s)
  - [Getting Started with Fermyon](https://www.fermyon.com/spin)
- **Wasmcloud**
  - [Wasmcloud](https://wasmcloud.com/)
- **.NET**
  - [.NET WASI SDK](https://github.com/dotnet/dotnet-wasi-sdk)
  - [C# (and .NET) in WebAssembly](https://developer.fermyon.com/wasm-languages/c-sharp)
  - [WASI Developer Experience Goals](https://github.com/dotnet/runtime/issues/96419)
- **DeisLabs**
  - [Hippo](https://github.com/deislabs/hippo)
  - [Yo Wasm](https://github.com/deislabs/yo-wasm/blob/main/LICENSE)
- **Binding Generation**
  - [Wit Bind Gen](https://github.com/bytecodealliance/wit-bindgen)
- **Additional Learning Resources**
  - [WASM by Example](https://wasmbyexample.dev/home.en-us.html)
  - [VS Code and WASM](https://code.visualstudio.com/blogs/2024/05/08/wasm)
  - [VS Code Extensions and WebAssembly](https://code.visualstudio.com/blogs/2024/05/08/wasm)
  - [Hyperlight](https://arschles.com/blog/hyperlight-overview-1/)
  - [Microsoft Build 2023 Inside Azure Innovations - Hyperlight](https://www.youtube.com/watch?v=Tz2SOjKZwVA)
  - [Extending Web Assembly to the Cloud](https://devblogs.microsoft.com/dotnet/extending-web-assembly-to-the-cloud/)
- **Open Source Projects**
  - [Cloudflare Cobweb](https://github.com/cloudflare/cobweb)
  - [Azure Samples - AKS Store Demo](https://github.com/Azure-Samples/aks-store-demo)
