/**
 * Release notes, browser half. Adds a Settings page that lists each version.
 * Unplug this plugin by removing its patch row, or setting that row disabled.
 */
import type { Context } from '@deepseek-ai/cordis'
import type {} from '@deepseek-ai/dsh-client-locale/client'
import type {} from '@deepseek-ai/dsh-client-ui-renderer/client'
import type {} from '@deepseek-ai/dsh-client-ui-settings/client'
import { en, NS, zh } from './locales.ts'
import { ReleaseNotesSection } from './ReleaseNotesSection.tsx'

declare module '@deepseek-ai/dsh-client-ui-slots' {
  interface LocaleNamespaceMap {
    /** Settings page that lists published versions. */
    releaseNotes: keyof typeof zh
  }
}

/** Services this plugin waits for. The page needs the slot registry and copy. */
export const inject = ['slots', 'locale']

/**
 * Register the dictionaries and the Settings page.
 * @param ctx - client root context.
 */
export function apply(ctx: Context): void {
  ctx.effect(() => ctx.locale.register(NS, { zh, en }), 'ui-release-notes: dictionaries')
  ctx.slots.inject('settings.section', () => ctx.slots.register({
    name: 'settings.section',
    id: 'release-notes',
    order: 1,
    label: () => ctx.locale.bind(NS)('nav'),
    locale: NS,
    inject: () => ({ hooks: { locale: ctx.locale } }),
  }, ReleaseNotesSection))
}
