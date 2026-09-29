/**
 * What each AryaAI version changed, in the languages the shell already speaks.
 *
 * Add an entry when a version should tell people what changed. Newest lines
 * belong at the top. A dated build such as `0.1.7-rc.2.20260926.4` uses the
 * longest shorter entry it still matches, so one note covers that line until
 * a build needs its own.
 */

/** One published line of the product, with the same facts in both languages. */
export interface ReleaseNote {
  /** DeepSeek Harness version this note belongs to. Dated builds and Arya builds of this line match it. */
  readonly version: string
  /** AryaAI major.minor.patch on this harness line. */
  readonly arya?: string
  readonly en: readonly string[]
  readonly zh: readonly string[]
}

/**
 * The version people see. A harness prerelease continues with a dot; a stable harness version opens a prerelease.
 * @param entry - one catalog line.
 * @returns `0.1.7-rc.2.AryaAI.0.4.0`, or the harness version when this line has no Arya number.
 */
export function publishedVersion(entry: ReleaseNote): string {
  if (entry.arya === undefined) return entry.version
  const joiner = entry.version.includes('-') ? '.AryaAI.' : '-AryaAI.'
  return `${entry.version}${joiner}${entry.arya}`
}

/** Notes the shell can show. Newest product lines belong at the top. */
export const RELEASE_NOTES: readonly ReleaseNote[] = [
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
]

/**
 * The note a build should show. A longer matching version wins over a shorter one.
 * @param version - the installed version, or the version the feed is offering.
 * @returns that entry, or undefined when this version has nothing to say.
 */
export function releaseEntry(version: string): ReleaseNote | undefined {
  let best: ReleaseNote | undefined
  for (const entry of RELEASE_NOTES) {
    const published = publishedVersion(entry)
    const matched = version === published || version.startsWith(`${published}.`)
    if (matched && (best === undefined || published.length > publishedVersion(best).length)) best = entry
  }
  if (best !== undefined) return best
  return RELEASE_NOTES.find(entry => version === entry.version || version.startsWith(`${entry.version}.`))
}
