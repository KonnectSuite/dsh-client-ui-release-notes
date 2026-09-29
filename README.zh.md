---
description: "设置页列出 AryaAI 的版本历史，新的在前，并标出当前安装所属的那一条。"
kind: "package-reference"
---

# @deepseek-ai/dsh-client-ui-release-notes

[English](README.md) | 中文

## 概述

`dsh-client-ui-release-notes` 在设置里增加名为版本说明的页面。页面按从新到旧列出每个已发布版本，条目与桌面更新对话框相同，并标出当前安装所属的那一条。带日期的构建使用它仍然匹配的最长较短条目。去掉补丁行，或把该行设为禁用，页面就会消失。

## 目录

- [使用本包](#use-this-package)
- [模型体验](#model-experience)
- [已知限制与延期工作](#known-limitations-and-deferred-work)

-----

<a id="use-this-package"></a>
## 使用本包

打开设置并选择版本说明。页面先写出已安装的版本，然后列出每一条目录。当前构建所属的那一条标为当前。

在 `src/catalog.ts` 里增加一个版本。新的条目放在最上面，中文和英文要点保持同一顺序。桌面更新对话框读取同一份目录。

-----

<a id="model-experience"></a>
## 模型体验

无。该页面只展示已经写给人看的版本说明，不注册提示词、工具或会话事件。

#### KV 缓存影响

没有直接影响。该页面不读取也不写入模型请求。

## 已知限制与延期工作

<a id="known-limitations-and-deferred-work"></a>

- **一条目录覆盖该 Harness 线上的每个 Arya 构建** — `0.1.7-rc.2.AryaAI.0.0.2` 和诸如 `0.1.7-rc.2.20260927.1` 的带日期构建都会显示 `0.1.7-rc.2` 的说明，直到该构建有自己的条目。
- **该页面不安装更新** — 选择一个版本只是阅读变化。安装仍由桌面更新提示负责。
