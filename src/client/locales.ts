/** Release notes page copy. zh is the key source. */

export const NS = 'releaseNotes'

export const zh = {
  'nav': '版本说明',
  'current': '当前安装 {version}',
  'harness': 'DeepSeek Harness {version}',
  'badge': '当前',
}

export type ReleaseNotesKey = keyof typeof zh

export const en = {
  'nav': 'Release notes',
  'current': 'This installation is {version}',
  'harness': 'DeepSeek Harness {version}',
  'badge': 'Current',
} satisfies Record<ReleaseNotesKey, string>
