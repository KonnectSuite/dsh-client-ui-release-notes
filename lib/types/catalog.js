/**
 * What each AryaAI version changed, in the languages the shell already speaks.
 *
 * Add an entry when a version should tell people what changed. Newest lines
 * belong at the top. A dated build such as `0.1.7-rc.2.20260926.4` uses the
 * longest shorter entry it still matches, so one note covers that line until
 * a build needs its own.
 */
/**
 * The version people see. A harness prerelease continues with a dot; a stable harness version opens a prerelease.
 * @param entry - one catalog line.
 * @returns `0.1.7-rc.2.AryaAI.0.4.0`, or the harness version when this line has no Arya number.
 */
export function publishedVersion(entry) {
    if (entry.arya === undefined)
        return entry.version;
    const joiner = entry.version.includes('-') ? '.AryaAI.' : '-AryaAI.';
    return `${entry.version}${joiner}${entry.arya}`;
}
/** Notes the shell can show. Newest product lines belong at the top. */
export const RELEASE_NOTES = [
    {
        version: '0.2.1-rc.2',
        arya: '0.12.7',
        en: [
            'The compression plugin is no longer bundled with the installer; install billion-context from Plugin Market when a profile needs it.',
            'Every tool schema reaches the model from the first request again, so the agent no longer spends turns discovering tools.',
        ],
        zh: [
            '压缩插件不再随安装包一起安装；某个配置需要时，请在插件市场安装 billion-context。',
            '工具定义从第一次请求起就全部提供给模型，智能体不再花轮次去发现工具。',
        ],
    },
    {
        version: '0.2.1-rc.2',
        arya: '0.12.6',
        en: [
            'AryaAI moves to DeepSeek Harness 0.2.1-rc.2, and every saved conversation stays readable.',
            'Carries the product work the upgrade needed: the model picker gives each model its own child slot, the thinking controls follow the capability a model actually declares, Strata is offered as one plugin instead of a controller plus a preset, Windows upgrades replay cleanly, and web search setup and labels appear once per settings entry point.',
            'Pinned third-party bundles are current as of this release: dsh-better-sidebar 0.28.0, dshmarket 1.66.14-arya.0.8, ds-harness-remote 0.5.13, dsh-plugin-guide 0.3.37, billion-context 0.1.201, and the image generation and Google Remote Desktop bundles at their newest commits.',
            'Carries everything published as 0.12.5, 0.12.4, 0.12.3, 0.12.2, 0.12.1, 0.12.0 and 0.11.0 for anyone updating from 0.10.1: the Plugins page grouped by plugin authorship, every shipped plugin version published as its own release for Plugin Market, the user-invoked Studio 5000 and MotionWorks engineering skills at 0.3.3 and 0.5.7, the FactoryTalk View bundle at 0.1.7 that reports the version it actually ships, the Content studio with photo and video conversations, parsed Studio 5000 analysis with coordinated offline drafts and optional SDK-independent read-only PLC polling with live chat trends, and generation speed measured from the text that actually streamed.',
        ],
        zh: [
            'AryaAI 现在基于 DeepSeek Harness 0.2.1-rc.2，已保存的每个对话都仍可读取。',
            '包含此次升级所需的产品改动：模型选择器为每个模型分配各自的子槽位，思考控制按模型实际声明支持的能力显示，Strata 以单个插件提供而不再是控制器加持设，Windows 升级可干净重放，网页搜索的设置与标签在同一设置入口只出现一次。',
            '固定的第三方组合包在本次发布中均为最新版本：dsh-better-sidebar 0.28.0、dshmarket 1.66.14-arya.0.8、ds-harness-remote 0.5.13、dsh-plugin-guide 0.3.37、billion-context 0.1.201，以及图片生成与 Google 远程桌面组合包的最新提交。',
            '为从 0.10.1 升级的用户携带 0.12.5、0.12.4、0.12.3、0.12.2、0.12.1、0.12.0 与 0.11.0 发布的全部内容：按插件作者分组的插件页面，为插件市场把每个随包插件版本都作为独立发行版发布，由用户调用的 Studio 5000 与 MotionWorks 工程技能（0.3.3 与 0.5.7），报告自身实际版本、作为 0.1.7 的 FactoryTalk View 组合包，含图片与视频对话的内容工作室，Studio 5000 解析式项目分析与协同离线草稿、可选的独立于 SDK 的只读 PLC 轮询与实时对话趋势图，以及只按实际流式文本计量的生成速度。',
        ],
    },
    {
        version: '0.2.0-rc.2',
        arya: '0.12.5',
        en: [
            'Packaged installations launch the compression proxy from real files outside the application archive, so its separate Node process can start successfully.',
            'Disabled capabilities remove their tools from model requests and block execution. Plugin and MCP tools load on demand, including tools from newly installed community plugins.',
            'Compression controls stay available from the start. Compression gateways can reclaim the response allowance after fitting conversation history, so local reasoning models can finish their answers.',
            'Local LLM Control Center remains an optional Plugin Market download and is not bundled with this installer.',
            'The Plugins page groups plugins by who authors them: AryaAI plugins, which this installer ships or Plugin Market offers; DeepSeek Harness core; and community plugins built outside AryaAI. Each group carries a heading and one line saying what it means.',
            'Bundles this installer ships and Plugin Market offers now sit together under AryaAI instead of being split between AryaAI and Community, and a plugin AryaAI authors that ships as a tool bundle is listed there too.',
            'Carries everything published as 0.12.4, 0.12.3, 0.12.2, 0.12.1, 0.12.0 and 0.11.0 for anyone updating from 0.10.1: the newest pinned third-party bundles, every shipped plugin version as its own release for Plugin Market, the user-invoked Studio 5000 and MotionWorks engineering skills at 0.3.3 and 0.5.7, the FactoryTalk View bundle at 0.1.7 that reports the version it actually ships, the Content studio with photo and video conversations, parsed Studio 5000 analysis with coordinated offline drafts and optional SDK-independent read-only PLC polling with live chat trends, and generation speed measured from the text that actually streamed.',
        ],
        zh: [
            '安装版从应用归档之外的实际文件启动压缩代理，使其独立 Node 进程能够正常启动。',
            '关闭功能后，其工具会从模型请求中移除，并禁止执行。插件与 MCP 工具按需加载，包括新安装的社区插件所提供的工具。',
            '上下文压缩工具从会话开始即可使用。压缩网关可在调整对话历史后重新分配回复额度，使本地推理模型能够完成回答。',
            '本地 LLM 控制中心仍是插件市场中的可选下载，不随本安装包提供。',
            '插件页面现在按作者分组：由 AryaAI 开发的插件（随本安装包提供或由插件市场提供）、DeepSeek Harness 核心，以及由 AryaAI 之外的项目开发的社区插件。每组都有标题和一行说明其含义。',
            '随本安装包提供与由插件市场提供的组合包现在都归入 AryaAI 分组，不再分散在 AryaAI 与社区两处；由 AryaAI 开发、以工具组合包形式随包提供的插件也列在其中。',
            '为从 0.10.1 升级的用户携带 0.12.4、0.12.3、0.12.2、0.12.1、0.12.0 与 0.11.0 发布的全部内容：最新的固定第三方组合包，为插件市场把每个随包插件版本都作为独立发行版发布，由用户调用的 Studio 5000 与 MotionWorks 工程技能（0.3.3 与 0.5.7），报告自身实际版本、作为 0.1.7 的 FactoryTalk View 组合包，含图片与视频对话的内容工作室，Studio 5000 解析式项目分析与协同离线草稿、可选的独立于 SDK 的只读 PLC 轮询与实时对话趋势图，以及只按实际流式文本计量的生成速度。',
        ],
    },
    {
        version: '0.2.0-rc.2',
        arya: '0.12.4',
        en: [
            'The Plugins page groups what is installed by where it comes from: AryaAI bundles this product ships, DeepSeek Harness core settings, and community plugins added on this machine. Each group carries a heading and one line saying what it means.',
            'Pinned third-party bundles move to their newest releases: billion-context 0.1.197, dsh-plugin-guide 0.3.33, ds-harness-remote 0.5.8, and the image generation and Google Remote Desktop bundles at their newest commits.',
            'Every plugin version this installer ships is published as its own release, so Plugin Market can install an earlier version again.',
            'Carries everything published as 0.12.3, 0.12.2, 0.12.1, 0.12.0 and 0.11.0 for anyone updating from 0.10.1: the user-invoked Studio 5000 and MotionWorks engineering skills at 0.3.3 and 0.5.7, the FactoryTalk View bundle at 0.1.7 that reports the version it actually ships, the Content studio with photo and video conversations, parsed Studio 5000 analysis with coordinated offline drafts and optional SDK-independent read-only PLC polling with live chat trends, and generation speed measured from the text that actually streamed.',
        ],
        zh: [
            '插件页面按来源分组显示已安装的内容：本产品自带的 AryaAI 组合包、DeepSeek Harness 核心设置，以及在这台机器上添加的社区插件。每组都有标题和一行说明其含义。',
            '固定的第三方组合包升级到各自最新版本：billion-context 0.1.197、dsh-plugin-guide 0.3.33、ds-harness-remote 0.5.8，以及图片生成与 Google 远程桌面组合包的最新提交。',
            '本安装包携带的每个插件版本都作为独立发行版发布，因此插件市场可以再次安装较早的版本。',
            '为从 0.10.1 升级的用户携带 0.12.3、0.12.2、0.12.1、0.12.0 与 0.11.0 发布的全部内容：由用户调用的 Studio 5000 与 MotionWorks 工程技能（0.3.3 与 0.5.7），报告自身实际版本、作为 0.1.7 的 FactoryTalk View 组合包，含图片与视频对话的内容工作室，Studio 5000 解析式项目分析与协同离线草稿、可选的独立于 SDK 的只读 PLC 轮询与实时对话趋势图，以及只按实际流式文本计量的生成速度。',
        ],
    },
    {
        version: '0.2.0-rc.2',
        arya: '0.12.3',
        en: [
            'The Studio 5000 and MotionWorks engineering skills declare themselves user-invoked, so they stay out of the model\'s tool catalog and load only when the user runs `/rockwell-l5x-engineering` or `/motionworks-iec-use`. Both bundles ship their newest releases with this change: dsh-tool-l5x 0.3.3 and MotionWorks 0.5.7.',
            'Carries everything published as 0.12.2, 0.12.1, 0.12.0 and 0.11.0 for anyone updating from 0.10.1: the FactoryTalk View bundle at 0.1.7 that reports the version it actually ships, the Content studio with photo and video conversations, parsed Studio 5000 analysis with coordinated offline drafts and optional SDK-independent read-only PLC polling with live chat trends, and generation speed measured from the text that actually streamed.',
        ],
        zh: [
            'Studio 5000 与 MotionWorks 工程技能声明为由用户调用，因此不再出现在模型的工具目录中，只有用户执行 `/rockwell-l5x-engineering` 或 `/motionworks-iec-use` 时才会加载。两个组合包都以此改动发布各自的最新版本：dsh-tool-l5x 0.3.3 与 MotionWorks 0.5.7。',
            '为从 0.10.1 升级的用户携带 0.12.2、0.12.1、0.12.0 与 0.11.0 发布的全部内容：报告自身实际版本、作为 0.1.7 的 FactoryTalk View 组合包，含图片与视频对话的内容工作室，Studio 5000 解析式项目分析与协同离线草稿、可选的独立于 SDK 的只读 PLC 轮询与实时对话趋势图，以及只按实际流式文本计量的生成速度。',
        ],
    },
    {
        version: '0.2.0-rc.2',
        arya: '0.12.2',
        en: [
            'Corrects the version the FactoryTalk View bundle reports. Its engine kept its own copy of the number, which still said 0.1.4 after the 0.1.5 and 0.1.6 releases, so the workspace status and the exported change-package manifest named a version the bundle no longer had. The bundle now reads its released manifest and ships as 0.1.7.',
            'The Skills page can switch a skill that a plugin registers at runtime off and on again. The registry owns that override now, so the skills manager, the tool catalog and the `/name` gesture read the same answer, and a skill a harness-owned package ships stays locked.',
            'Carries everything published as 0.12.1, 0.12.0 and 0.11.0 for anyone updating from 0.10.1: the FactoryTalk View browser half that draws an exported ME display in the right sidebar file pane in place of its XML, the Content studio with photo and video conversations, parsed Studio 5000 analysis with coordinated offline drafts and optional SDK-independent read-only PLC polling with live chat trends, the Studio 5000 bundle at 0.3.2, and generation speed measured from the text that actually streamed.',
        ],
        zh: [
            '修正 FactoryTalk View 组合包报告的版本。其引擎保留了自身的版本号副本，在 0.1.5 与 0.1.6 发布后仍写着 0.1.4，导致工作区状态与导出的变更包清单标注了组合包已不再具备的版本。该组合包现在读取其发布清单，并作为 0.1.7 发布。',
            '技能页面可以关闭插件在运行时注册的 skill 并重新开启。该覆盖现由注册表持有，因此技能管理器、工具目录与 `/name` 手势读取同一结论；由 harness 自带包提供的 skill 仍保持锁定。',
            '为从 0.10.1 升级的用户携带 0.12.1、0.12.0 与 0.11.0 发布的全部内容：在右侧边栏文件窗格中直接绘制导出 ME 画面、替代其 XML 的 FactoryTalk View 浏览器部分，含图片与视频对话的内容工作室，Studio 5000 解析式项目分析与协同离线草稿，可选的独立于 SDK 的只读 PLC 轮询与实时对话趋势图，0.3.2 的 Studio 5000 组合包，以及只按实际流式文本计量的生成速度。',
        ],
    },
    {
        version: '0.2.0-rc.2',
        arya: '0.12.1',
        en: [
            'Ships the FactoryTalk View bundle as 0.1.6. Its browser half draws an exported ME display in the right sidebar file pane in place of its XML, and packaging now unpacks those browser resources with the engine, bridge, and skill. Analysis still requires Python with lxml 6.x, which the Desktop runtime includes.',
            'Carries everything published as 0.12.0 and 0.11.0 for anyone updating from 0.10.1: the Content studio with photo and video conversations, parsed Studio 5000 analysis with coordinated offline drafts and optional SDK-independent read-only PLC polling with live chat trends, the Studio 5000 bundle republished from its merged main line as 0.3.2, and generation speed measured from the text that actually streamed.',
        ],
        zh: [
            'FactoryTalk View 组合包改为 0.1.6。其浏览器部分在右侧边栏文件窗格中直接绘制导出的 ME 画面，而不显示其 XML；打包时这些浏览器资源与引擎、桥接和技能一并解包。分析仍需 Python 与 lxml 6.x，Desktop 运行时已包含。',
            '为从 0.10.1 升级的用户携带 0.12.0 与 0.11.0 发布的全部内容：含图片与视频对话的内容工作室、Studio 5000 解析式项目分析与协同离线草稿、可选的独立于 SDK 的只读 PLC 轮询与实时对话趋势图、从已合并主线重新发布为 0.3.2 的 Studio 5000 组合包，以及只按实际流式文本计量的生成速度。',
        ],
    },
    {
        version: '0.2.0-rc.2',
        arya: '0.12.0',
        en: [
            'Corrects the generation speed shown with a reply. A step that produced only tool-call arguments no longer counts toward generation time, so the reading reflects the text that actually streamed instead of an inflated figure.',
            'Ships the Studio 5000 bundle rebuilt from its current source and re-released as 0.3.2. The archive 0.11.0 carried came from a branch that had not been merged, so that work now sits on the main line with the plugin\'s newest tools, and the archive also carries the SDK-independent read-only PLC polling and live chat trends 0.11.0 introduced.',
            'Registers the Studio 5000 engineering skill from its own file, so it can be switched off from the Skills page like other user-editable skills.',
            'Compresses the bundled MotionWorks tool descriptions by about 8 percent of their prompt tokens, without changing any argument, precondition, refusal condition, or stated limit.',
            'Fixes the Windows launcher so a build started from the installed application no longer fails on temporary-directory permissions.',
        ],
        zh: [
            '修正回复旁显示的生成速度。仅产出工具调用参数的步骤不再计入生成时间，读数反映实际流式输出的文本，而不是虚高的数值。',
            'Studio 5000 组合包改用当前源码重新构建，并重新发布为 0.3.2。0.11.0 携带的归档来自一个尚未合并的分支，这些工作现已与该插件最新工具一同进入主线；该归档同时包含 0.11.0 引入的独立于 SDK 的只读 PLC 轮询与实时聊天趋势。',
            'Studio 5000 工程技能改为从自身文件注册，因此可以像其他用户可编辑技能一样在技能页面上关闭。',
            '压缩内置 MotionWorks 的工具描述，提示词 token 减少约 8%，未改变任何参数、前置条件、拒绝条件或已声明的限制。',
            '修正 Windows 启动器，从已安装应用发起的构建不再因临时目录权限而失败。',
        ],
    },
    {
        version: '0.2.0-rc.2',
        arya: '0.11.0',
        en: [
            'Introduces the Content studio with photo and video conversations, reusable media references, search, and separate Studio and Library views.',
            'Adds image editing, visual reference search, storyboards, timed scenes, saved LTX Director workflows, and film assembly through configured compatible ComfyUI workflows. Models and workflow dependencies require separate setup.',
            'Updates Studio 5000 tools with parsed project analysis, symbol and logic inspection, and coordinated offline drafts. FactoryTalk Optix adds native authoring and preview inspection.',
            'Adds optional SDK-independent, read-only PLC polling and live chat trends through Studio 5000 tools. Native polling is disabled by default; physical-controller performance remains unqualified.',
            'Improves engineering browser sign-in and visible Playwright sessions, workspace projects, Native Window docking, and development launch reliability.',
            'Restores the third-party community catalog alongside Arya plugins in Plugin Market. Updates preserve personal plugins and conversations.',
            'LLM Control Center and the Local LLM Agent Preset remain separate plugins; local model weights and runtimes are not included in this installer.',
        ],
        zh: [
            '新增内容工作室，提供图片和视频对话、可复用媒体参考、搜索，以及独立的工作室和媒体库视图。',
            '通过已配置的兼容 ComfyUI 工作流，新增图片编辑、视觉参考搜索、分镜、定时场景、已保存的 LTX Director 工作流和影片合成。模型与工作流依赖需要单独配置。',
            '更新 Studio 5000 工具，支持解析项目分析、符号与逻辑检查，以及协同离线草稿。FactoryTalk Optix 新增原生创作与预览检查。',
            '通过 Studio 5000 工具新增可选的独立于 SDK 的只读 PLC 轮询和实时对话趋势图。原生轮询默认关闭，实际控制器性能尚未验证。',
            '改进工程浏览器登录、可见 Playwright 会话、工作区项目、Native Window 停靠和开发启动可靠性。',
            '在插件市场中恢复第三方社区目录，并与 Arya 插件并列显示。更新保留个人插件和对话。',
            'LLM 控制中心与本地 LLM 代理预设仍为独立插件；此安装包不包含本地模型权重和运行时。',
        ],
    },
    {
        version: '0.2.0-rc.2',
        arya: '0.10.1',
        en: [
            'Repairs Native Window loading after an update by correcting the bundled configuration in plugin version 0.2.3.',
            'Installer checks reject shipped plugins whose bundle configuration cannot be loaded.',
        ],
        zh: [
            '修复更新后 Native Window 的加载问题，插件 0.2.3 更正随附配置。',
            '安装包检查拒绝无法加载 bundle 配置的随附插件。',
        ],
    },
    {
        version: '0.2.0-rc.2',
        arya: '0.10.0',
        en: [
            'Adds Arya Plugin Market with public packaged releases, plugin updates, and restoration of retained versions. FactoryTalk View Use and Native Window appear with Arya built-in plugins.',
            'Updates Native Window to 0.2.2: Arya can inspect docked applications, accessible controls, text, dialogs and screenshots, then edit or invoke observed controls and verify the result.',
            'Screenshot reasoning requires an image-capable model; text-only models use accessible controls and text. Foreground mouse and keyboard actions depend on Windows focus and access permissions.',
            'Upgrades preserve sessions, personal plugins and removal of optional built-in bundles.',
        ],
        zh: [
            '新增 Arya 插件市场，提供公开打包的插件版本、插件更新及保留版本的恢复。FactoryTalk View Use 与 Native Window 显示在 Arya 内置插件分组中。',
            '将 Native Window 更新至 0.2.2：Arya 可检查停靠应用、可访问控件、文本、对话框与截图，然后编辑或调用已观察的控件并验证结果。',
            '截图推理需要支持图像的模型；纯文本模型使用可访问控件与文本。前台鼠标及键盘操作取决于 Windows 焦点与访问权限。',
            '升级保留会话、个人插件及用户对可选内置 bundle 的移除。',
        ],
    },
    {
        version: '0.2.0-rc.2',
        arya: '0.9.0',
        en: [
            'Adds Native Window as an included plugin for docking Windows applications beside Arya conversations. Elevated applications require separately approved helper elevation.',
            'Adds FactoryTalk View Use 0.1.4 with eleven tools and an engineering skill: discover workspace files and missing ME exports, analyze displays and tags, prepare guarded changes, and verify Studio imports.',
            'Both plugins are enabled by default and managed through Plugin Market. Upgrades preserve sessions, personal plugins, and subsequent removal of these optional bundles.',
            'Repairs the DeepSeek Chat caption layout and makes Reload act consistently.',
        ],
        zh: [
            '新增随安装包提供的 Native Window 插件，可将 Windows 应用停靠在 Arya 对话旁。提权应用需要另行批准辅助程序提权。',
            '新增 FactoryTalk View Use 0.1.4，包含十一个工具及工程技能：查找工作区文件与缺失的 ME 导出，分析画面与标签，准备受保护的修改，并验证 Studio 导入。',
            '两个插件默认启用，并通过插件市场管理。升级保留会话、个人插件以及用户随后对这些可选 bundle 的移除。',
            '修复 DeepSeek Chat 标题栏布局，并使重新加载操作保持一致。',
        ],
    },
    {
        version: '0.2.0-rc.2',
        arya: '0.8.1',
        en: [
            'Updates the included MotionWorks IEC plugin with current compiler-artifact reviews, protected function-block verification, guarded library reads, and more reliable IDE diagnostics and checkpoint paths.',
            'Removes the MCP token-efficiency plugin, its settings page, and conversation controls. The regular context meter remains, and sessions containing its recorded state remain readable.',
        ],
        zh: [
            '更新随附的 MotionWorks IEC 插件，支持当前编译产物审查、受保护功能块验证、受保护的库读取，以及更可靠的 IDE 诊断和检查点路径。',
            '移除 MCP 工具效率插件、其设置页及对话控制。保留常规上下文计量，含有此前记录状态的会话仍可读取。',
        ],
    },
    {
        version: '0.2.0-rc.2',
        arya: '0.8.0',
        en: [
            'Adds Projects above Workspaces: group several source folders, create chats beneath each project, and edit project folders through a shared popup.',
            'Includes the Projects plugin in every installation, with search, view options, and folder browsing. Project chats appear once; disabling Projects restores their workspace listing.',
            'Repairs plugin reloads so workspace and Images chats remain available. Upgrading preserves personal plugins, sessions, and previously removed optional features.',
            'Multi-folder Workspace Write is supported on Windows; other platforms retain writes in the primary chat folder.',
        ],
        zh: [
            '在工作区上方新增项目：组织多个源文件夹，在项目下创建聊天，并通过统一弹窗编辑项目文件夹。',
            '每次安装均包含项目插件，提供搜索、视图选项和文件夹浏览。项目聊天只显示一次；禁用项目后恢复工作区列表。',
            '修复插件重载，保持工作区与图片聊天可用。升级保留个人插件、会话及此前移除的可选功能。',
            'Windows 支持多文件夹工作区写入；其他平台仍仅允许在聊天主文件夹内写入。',
        ],
    },
    {
        version: '0.2.0-rc.2',
        arya: '0.7.0',
        en: [
            'Ships pinned community plugins, including billion-context, and exposes optional Arya features as individually managed Plugin Market bundles.',
            'Images now uses ordinary conversations and tools from the included community image plugin, with reference-image editing and saved conversations.',
            'Adds a live ComfyUI status card, visible start/stop/restart controls, and animated lifecycle progress. Local image chat waits until the server is ready.',
            'Preserves recent images, local media, multi-selection, bulk downloads, and deletion below chat. Repairs directory-picker typing for reliable rebuilds.',
        ],
        zh: [
            '提供固定版本的社区插件（包括 billion-context），并将可选 Arya 功能作为可单独管理的插件市场 bundle。',
            '图片页面现使用随安装包提供的社区图像插件提供普通对话和工具，支持参考图编辑与已保存对话。',
            '新增实时 ComfyUI 状态卡片、启动/停止/重启控制和生命周期进度动画。本地图像聊天需等待服务器就绪。',
            '保留聊天下方的最近图片、本地媒体、多选、批量下载和删除，并修复目录选择器类型以确保重新构建。',
        ],
    },
    {
        version: '0.2.0-rc.2',
        arya: '0.6.11',
        en: [
            'Restores "Download session log" in the session header menu. A header layout change began clipping that menu, so it opened empty in both the Web and desktop shells; the /export command and its download route were unaffected.',
        ],
        zh: [
            '恢复会话标题菜单中的“下载 Session 日志”。标题布局改动开始裁剪该菜单，使其在 Web 与桌面外壳中打开为空；/export 命令及其下载路由不受影响。',
        ],
    },
    {
        version: '0.2.0-rc.2',
        arya: '0.6.10',
        en: [
            'Adds a mobile shell, browser pairing and installable Web app icons while preserving Arya branding and built-in engineering plugins.',
            'Adds token-efficiency settings and conversation context controls, and updates Images workflow routing and media management.',
            'Refreshes built-in MotionWorks tools for guarded native function-block edits, complete compiler diagnostics and longer project inspections.',
            'Repairs development build test classification and incomplete Images test fixtures. Installer publication is a separate release step.',
        ],
        zh: [
            '新增移动外壳、浏览器配对和可安装 Web 应用图标，并保留 Arya 品牌与内置工程插件。',
            '新增 token 效率设置和对话上下文控制，并更新图片工作流路由与媒体管理。',
            '更新内置 MotionWorks 工具，支持受保护的原生功能块编辑、完整编译器诊断和耗时较长的项目检查。',
            '修复开发构建中的测试分类和不完整的图片测试配置。安装包发布仍是独立的发布步骤。',
        ],
    },
    {
        version: '0.2.0-rc.2',
        arya: '0.6.9',
        en: [
            'Updates the development engine to DeepSeek Harness 0.2.0-rc.2 while retaining Arya branding, built-in engineering tools, Images and Skills & MCP.',
            'Updates the sidebar and Plugin Market, and adapts workflow command handoffs to the new session API. DeepSeek Chat remains optional.',
            'Built-in MotionWorks tools load with the updated engine; live IDE operation still requires separate acceptance checks.',
        ],
        zh: [
            '开发引擎更新至 DeepSeek Harness 0.2.0-rc.2，并保留 Arya 品牌、内置工程工具、图片以及技能与 MCP。',
            '更新侧边栏和插件市场，并使工作流命令转交适配新的会话 API。DeepSeek Chat 仍为可选插件。',
            '内置 MotionWorks 工具可在更新后的引擎中加载；真实 IDE 操作仍需单独验收。',
        ],
    },
    {
        version: '0.1.7-rc.2',
        arya: '0.6.8',
        en: [
            'Windows development builds start Electron from a temporary runtime directory so a checkout marked with low integrity can open the app.',
            'DeepSeek Chat remains an optional profile plugin. The development checkout includes the latest Images, Skills & MCP, Logix viewer and desktop fixes.',
        ],
        zh: [
            'Windows 开发版本从临时运行时目录启动 Electron，使标记为低完整性的仓库也能打开应用。',
            'DeepSeek Chat 仍是可选的 profile 插件。开发仓库包含最新的图片、技能与 MCP、Logix 查看器及桌面修复。',
        ],
    },
    {
        version: '0.1.7-rc.2',
        arya: '0.6.7',
        en: [
            'Images uses a chat-style conversation with a persistent composer, inline generated media, recent runs below the chat and local media below recents. Advanced generation and media-management actions remain available.',
            'Reference photos support multiple attachments, drag and drop, paste and individual removal. Follow-up messages use the Images agent instructions while preserving model, permission, dictation and stop controls.',
            'ComfyUI connection settings support local or remote server addresses, connection testing and Save and reconnect. Image conversations and Advanced generation use the same configured endpoint; a shared output directory is optional.',
            'Saved image conversations switch without releasing the displayed session early. Long transcripts scroll independently of the composer, including at laptop window sizes.',
        ],
        zh: [
            '图片页面采用聊天式对话，输入框始终可见，生成的媒体显示在对话中，最近运行位于聊天下方，本地媒体位于最近运行下方。高级生成和媒体管理功能均保留。',
            '参考图片支持多附件、拖放、粘贴和逐项移除。后续消息使用图片代理指令，并保留模型、权限、语音输入和停止控件。',
            'ComfyUI 连接设置支持本地或远程服务器地址、连接测试及保存后重新连接。图片对话和高级生成使用同一个配置地址，共享输出目录可选。',
            '切换已保存的图片对话时，不再提前释放正在显示的会话。长对话可独立滚动，输入框在笔记本窗口尺寸下也保持可见。',
        ],
    },
    {
        version: '0.1.7-rc.2',
        arya: '0.6.6',
        en: [
            'Images opens a conversation room where Arya uses enabled ComfyUI MCP tools to choose image and video workflows. Reference photos, follow-up edits, saved conversations, recent runs and the local media library remain available alongside Advanced controls.',
            'New image conversation creates a saved room immediately. Images can continue its Auto conversation when the separately configured ComfyUI controller is offline.',
            'Skills & MCP exposes Windows Computer Use kill switch and dry run settings with Save and restart. The server checks every mutating tool path; read-only inspection remains available.',
            'Safety controls wrap within their MCP card on narrow windows, and neighboring server cards keep independent heights.',
        ],
        zh: [
            '图片页面提供对话房间，Arya 通过已启用的 ComfyUI MCP 工具选择图片和视频工作流。参考图片、后续编辑、已保存对话、最近运行和本地媒体库与高级设置均保留。',
            '新图片对话会立即创建并保存房间。单独配置的 ComfyUI 控制器离线时，图片页面仍可继续 Auto 对话。',
            '技能与 MCP 提供 Windows Computer Use 的紧急停止和试运行设置，可保存并重启服务。服务端检查所有会修改桌面的工具调用，只读检查仍可使用。',
            '窄窗口内的安全控件会在 MCP 卡片中换行，相邻服务器卡片保持独立高度。',
        ],
    },
    {
        version: '0.1.7-rc.2',
        arya: '0.6.5',
        en: ['Fixes the JavaScript startup error in the 0.6.4 Windows installer. Desktop now bundles its remote-stream protocol dependencies, and packaging verifies external Desktop imports before release.'],
        zh: ['修复 0.6.4 Windows 安装程序的 JavaScript 启动错误。桌面入口现在内置远程流协议依赖，打包流程会在发布前验证桌面外部模块导入。'],
    },
    {
        version: '0.1.7-rc.2',
        arya: '0.6.4',
        en: [
            'MotionWorks IEC 0.5.1 adds engineering guides, fresh Build/Make verification after reopening, and reports that retain failed-step diagnostics.',
            'The latest pinned Studio 5000 L5X update is bundled. Opening a workspace in Explorer now launches Windows File Explorer correctly.',
            'The Images prompt supports dictation and reference-image editing, including Flux 2 Klein when its model files are installed. Local images and videos support bulk selection, ZIP download, and deletion.',
            'ComfyUI MCP is enabled by default for new profiles. Existing explicit disable choices are preserved. The Images Auto conversation remains an opt-in preview.',
        ],
        zh: [
            'MotionWorks IEC 0.5.1 新增工程指南，重新打开项目后会执行新的 Build/Make 验证，报告也会保留失败步骤的诊断信息。',
            '包含固定版本的最新 Studio 5000 L5X 更新。在资源管理器中打开工作区现在会正确启动 Windows 文件资源管理器。',
            '图片提示词支持语音输入和参考图片编辑；安装相应模型后可使用 Flux 2 Klein。本地图片和视频支持批量选择、ZIP 下载和删除。',
            '新配置默认启用 ComfyUI MCP，保留现有用户明确禁用的选择。图片 Auto 对话仍为需要主动启用的预览功能。',
        ],
    },
    {
        version: '0.1.7-rc.2',
        arya: '0.6.3',
        en: [
            'Studio 5000 L5X tools now report clearer SDK diagnostics and support typed live tag reads and bounded sampling.',
            'Controller operations check the supplied IP against the saved Linx route. Downloads require a reviewed offline build based on an approved upload from the same session.',
        ],
        zh: [
            'Studio 5000 L5X 工具现在提供更清晰的 SDK 诊断，并支持按类型读取实时标签和有界采样。',
            '控制器操作会核对提供的 IP 与已保存的 Linx 路由。下载需要基于同一会话中已获批准的上传，且离线构建已经过审查。',
        ],
    },
    {
        version: '0.1.7-rc.2',
        arya: '0.6.2',
        en: [
            'Creator mode opens again. Its filesystem search setting is now assigned to the search plugin, so the preset loads instead of reporting a configuration error.',
            'The GitHub account action remains visible in the sidebar when Remote is present. A workspace menu can open its root folder in Explorer.',
        ],
        zh: [
            '创造模式现在可以重新打开。文件系统搜索设置已分配给搜索插件，预设不再因配置错误而加载失败。',
            '启用远程访问时，侧边栏仍会显示 GitHub 账户入口。工作区菜单可以在资源管理器中打开其根文件夹。',
        ],
    },
    {
        version: '0.1.7-rc.2',
        arya: '0.6.1',
        en: [
            'Studio 5000 L5X tools now keep large draft proposals valid, write new tag descriptions in export order, and report the stage and diagnostics when an offline build fails.',
            'The Logix Designer SDK bridge checks that its Windows service is running before opening or building a project. Controller upload, mode change, and download require an Ask approval session.',
        ],
        zh: [
            'Studio 5000 L5X 工具现在能正确保留大型草案的文件哈希、按导出顺序写入新标签的描述，并在离线构建失败时报告失败阶段和诊断信息。',
            'Logix Designer SDK 桥接会在打开或构建项目前检查其 Windows 服务是否正在运行。控制器上传、模式切换和下载需要使用“询问审批”会话。',
        ],
    },
    {
        version: '0.1.7-rc.2',
        arya: '0.6.0',
        en: [
            'Remote access is included in new Arya profiles. Pair this computer through dsh.r2049.cn to reach its sessions and workspaces from another device.',
            'The updated Studio 5000 L5X tools and Logix project viewer let you inspect controller projects inside Arya.',
            'The Images library can select multiple local images or videos for download or deletion.',
            'Skills & MCP has a redesigned manager for viewing skills and MCP server status.',
        ],
        zh: [
            '新建的 Arya 配置包含远程访问。通过 dsh.r2049.cn 配对这台电脑，即可从其他设备访问会话和工作区。',
            '更新后的 Studio 5000 L5X 工具和 Logix 项目查看器可在 Arya 内检查控制器项目。',
            '图片库可批量选择本地图片或视频并下载或删除。',
            '技能与 MCP 管理页经过重新设计，可查看技能和 MCP 服务器状态。',
        ],
    },
    {
        version: '0.1.7-rc.2',
        arya: '0.5.0',
        en: [
            'The MotionWorks IEC plugin is reliable. Adding a variable no longer fails because some other variable in the same program carries a mismatch between its declaration and its worksheet record — the mismatch is reported, and the edit goes through.',
            'A program that declares none of the type you are adding borrows that record layout from another program in the same project, instead of refusing the edit.',
            'Make and Build report what the compiler actually did. They previously reported a failure after 90 seconds on a project that was already compiled.',
            'The IDE bridge waits for a MotionWorks window that is still starting, instead of refusing to open the project.',
        ],
        zh: [
            'MotionWorks IEC 插件现在稳定可靠。添加变量不再因为同一程序中另一个变量的声明与工作表记录不一致而失败——该不一致会被报告出来，编辑照常完成。',
            '如果要添加的类型在目标程序中没有声明，会改为从同一项目的另一个程序借用该记录布局，而不是直接拒绝。',
            'Make 和 Build 现在如实报告编译器的结果。此前对已经编译完成的项目，它们会在 90 秒后报告失败。',
            'IDE 桥接会等待仍在启动中的 MotionWorks 窗口，而不是拒绝打开项目。',
        ],
    },
    {
        version: '0.1.7-rc.2',
        arya: '0.4.0',
        en: [
            'Right-click a workspace in the left panel to rename or delete it. Right-click a chat to pin, rename, fork, or archive it. The same menu opens at your cursor, without opening what you clicked.',
            'The account area names the account instead of reporting a sign-in state. Your name and picture appear once DeepSeek returns them; until then the account card says why they are missing.',
            'Arya now loads. Her overlay ships enabled on Desktop, and it no longer keeps the whole interface from opening.',
            'The Files panel keeps the folders you expanded. Switch to another tab and come back, and the tree is still open where you left it.',
            'A task that starts opens in the bottom panel, so the right panel stays where you put it.',
            'The Windows Computer Use MCP server is listed again in the MCP server list, ready to switch on or off.',
            'A file opened from a chat renders in its own viewer, HTML included, instead of failing to load.',
        ],
        zh: [
            '在左侧面板右键点击工作区即可重命名或删除。右键点击对话即可置顶、重命名、分支或归档。同样的菜单会出现在光标位置，不会打开你点的那一项。',
            '账号区域显示账号名称，而不是登录状态。DeepSeek 返回后就会显示你的名字和头像；在此之前，账号卡片会说明缺失原因。',
            'Arya 现在可以加载了。她的浮层在桌面端默认开启，也不会再阻止整个界面打开。',
            '文件面板会记住你展开的文件夹。切到别的标签再回来，树还是你离开时的样子。',
            '任务开始时会打开在底部面板，右侧面板保持在原处。',
            'Windows 计算机使用 MCP 服务器重新出现在 MCP 服务器列表里，可以随时打开或关闭。',
            '从对话里打开的文件会用它自己的查看器渲染，包括 HTML，而不会再加载失败。',
        ],
    },
    {
        version: '0.1.7-rc.2',
        arya: '0.3.0',
        en: [
            'Right-click a workspace in the left panel to rename or delete it. Right-click a chat to pin, rename, fork, or archive it. The same menu opens at your cursor, without opening what you clicked.',
            'The account area names the account instead of reporting a sign-in state. Your name and picture appear once DeepSeek returns them; until then the account card says why they are missing.',
            'Fixed an auto pet that kept the whole interface from loading. The interface now opens reliably; the pet returns once it can load with it.',
        ],
        zh: [
            '在左侧面板右键点击工作区即可重命名或删除。右键点击对话即可置顶、重命名、分支或归档。同样的菜单会出现在光标位置，不会打开你点的那一项。',
            '账号区域显示账号名称，而不是登录状态。DeepSeek 返回后就会显示你的名字和头像；在此之前，账号卡片会说明缺失原因。',
            '修复了导致整个界面无法加载的内置宠物。界面现在可以可靠打开；宠物会在能同时加载后回归。',
        ],
    },
    {
        version: '0.1.7-rc.2',
        arya: '0.2.0',
        en: [
            'Images is now a built-in Cordis plugin for AryaAI WebUI and Desktop. It creates images with the local ComfyUI installation.',
            'Choose a compatible saved ComfyUI workflow, including Z-Image-Turbo-improved, and reuse its generation settings.',
            'Recent image cards show the workflow used and can remove a generation from the gallery after confirmation.',
        ],
        zh: [
            'Images 现在是 AryaAI WebUI 和桌面端的内置 Cordis 插件，可使用本机 ComfyUI 创建图像。',
            '可以选择兼容的 ComfyUI 已保存工作流（包括 Z-Image-Turbo-improved），并复用其生成设置。',
            '最近图像卡片会显示所用工作流，并可在确认后从图库中移除一次生成。',
        ],
    },
    {
        version: '0.1.7-rc.2',
        arya: '0.1.0',
        en: [
            'Arya is now the built-in desktop pet, with English settings and a complete animated character.',
            'ComfyUI Canvas and the official local ComfyUI MCP server are built in. Arya can edit workflows, run generations, monitor jobs, and collect outputs without a separate MCP installation.',
            'Session cost estimates keep each provider and model separate when you switch models. Unknown rates are marked unpriced.',
            'Updates are offered on their own. The installer shows its progress, then reopens AryaAI. Chats and settings stay.',
            'A plan stays in the workspace, and opening it shows the plan beside the chat.',
            'A DXF in the file tree opens as a drawing. Scroll to zoom and drag to pan.',
            'Add skill sits beside Refresh, with Add server. The form asks when to use the skill and what to do.',
            'Sign in to GitHub in Settings. Add workspace can clone a repository onto this PC and open it as a workspace.',
            'No Repo sits above Ungrouped. A chat there has no workspace folder.',
            'The slash menu has MCP. Turn a server on or off without leaving the chat, and the list stays open.',
            'The header opens Changes, Browser, Terminal, and Files on the right. Press the open one again to close it.',
            'Arya can read the text in a PDF: what the file is, its contents, a word search, and the pages you name. A scanned page stays empty.',
            'The bottom left shows the GitHub name and picture. The menu signs in, signs out, and opens Settings.',
            'Settings has Release notes. Each version is listed there, newest first.',
        ],
        zh: [
            'Arya 现在是内置桌面宠物，提供英文设置和完整的动画角色。',
            'ComfyUI Canvas 和官方本地 ComfyUI MCP 服务器现已内置。无需另行安装 MCP，Arya 即可编辑工作流、运行生成任务、监控作业并收集输出。',
            '会话费用估算在切换模型后分别保留各服务商和模型的用量，未知费率标为未计价。',
            '更新会自己出现。安装程序会显示进度，然后重新打开 AryaAI。对话和设置会保留。',
            '计划会留在工作区里，打开后显示在对话旁边。',
            '文件树里的 DXF 会画成图纸。滚轮缩放，拖动平移。',
            '添加技能在刷新旁边，和添加服务器同一位置。表单要写清什么时候用、具体怎么做。',
            '设置里可以登录 GitHub。添加工作区可以把仓库克隆到这台电脑，并当作工作区打开。',
            '无仓库在未分组上方。那里的对话没有工作区文件夹。',
            '斜杠菜单里有 MCP。不用离开对话就能打开或关闭服务器，列表保持打开。',
            '标题栏可以打开右侧的变更、浏览器、终端和文件。再按一次正在显示的那一项就会收起。',
            'Arya 可以读 PDF 里的文字：文件信息、目录、按词搜索，以及你点名的页。扫描页没有文字。',
            '左下角显示 GitHub 名字和头像。菜单可以登录、退出，以及打开设置。',
            '设置里有版本说明。每个版本都列在那里，新的在前。',
        ],
    },
];
/**
 * The note a build should show. A longer matching version wins over a shorter one.
 * @param version - the installed version, or the version the feed is offering.
 * @returns that entry, or undefined when this version has nothing to say.
 */
export function releaseEntry(version) {
    let best;
    for (const entry of RELEASE_NOTES) {
        const published = publishedVersion(entry);
        const matched = version === published || version.startsWith(`${published}.`);
        if (matched && (best === undefined || published.length > publishedVersion(best).length))
            best = entry;
    }
    if (best !== undefined)
        return best;
    return RELEASE_NOTES.find(entry => version === entry.version || version.startsWith(`${entry.version}.`));
}
//# sourceMappingURL=catalog.js.map