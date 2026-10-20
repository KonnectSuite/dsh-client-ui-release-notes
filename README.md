---
description: "Settings page that lists AryaAI version history, newest first, and marks the line this installation belongs to."
kind: "package-bundle"
---

# @deepseek-ai/dsh-client-ui-release-notes

English | [中文](README.zh.md)

## Summary

`dsh-client-ui-release-notes` adds a Settings page named Release notes. The page lists each published version, newest first, with the same bullets the desktop update dialog shows, and marks the catalog line this installation belongs to. A dated build uses the longest shorter entry it still matches. Remove the patch row, or set it disabled, to hide the page.

## Table of Contents

- [Use this package](#use-this-package)
- [Model Experience](#model-experience)
- [Known Limitations and Deferred Work](#known-limitations-and-deferred-work)

-----

<a id="use-this-package"></a>
## Use this package

Open Settings and choose Release notes. The page names the installed version, then each catalog entry. The entry this build belongs to is marked Current.

Add a version in `src/catalog.ts` before packaging a release. Newest entries belong at the top, and the Chinese and English bullets stay in the same order. The desktop update dialog and published update feed read that same catalog.

The AryaAI 0.6.3 entry describes the updated Studio 5000 L5X SDK diagnostics, live tag reads, route checks, and download verification.

-----

<a id="model-experience"></a>
## Model Experience

None, as the page only shows release notes already written for people and registers no prompt, tool, or session event.

#### KV Cache effect

No direct effect. The page never reads or writes a model request.

## Known Limitations and Deferred Work

<a id="known-limitations-and-deferred-work"></a>

- **One catalog line covers every Arya build of that harness line** — `0.1.7-rc.2.AryaAI.0.0.2` and a dated build such as `0.1.7-rc.2.20260927.1` both show the `0.1.7-rc.2` note until that build has its own entry.
- **The page does not install an update** — choosing a version only reads what changed. Installing stays with the desktop update offer.

The Host program compiles the plugin entry and release catalog through `tsconfig.host.json`; the browser page uses `tsconfig.client.json`. The root config only combines these programs.

<a id="dev-note"></a>
### Dev Note

<details>
<summary>Maintainer context</summary>

None.

</details>
