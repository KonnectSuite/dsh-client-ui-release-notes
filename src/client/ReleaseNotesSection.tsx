/** Settings page that lists every published version, newest first. */
import type { LocaleSnapshot } from '@deepseek-ai/dsh-client-locale/client'
import type { PropsRuntime, SnapshotSelectorHook } from '@deepseek-ai/dsh-client-ui-slots'
import type {} from '@deepseek-ai/dsh-client-ui-settings/client'
import { publishedVersion, releaseEntry, RELEASE_NOTES } from '../catalog.ts'
import type { ReleaseNotesKey } from './locales.ts'
import css from './ReleaseNotes.module.css'

/** Chrome copy plus the active locale, so the page follows the language switch. */
export interface ReleaseNotesSectionProps extends PropsRuntime<'settings.section'> {
  t: (key: ReleaseNotesKey, values?: Record<string, string | number>) => string
  useLocale: SnapshotSelectorHook<LocaleSnapshot>
}

/**
 * Render the version history. The installed build is marked on the catalog line it belongs to.
 * @param props - settings owner share, copy, and the locale snapshot.
 * @returns the history, newest version first.
 */
export function ReleaseNotesSection({ t, useLocale }: ReleaseNotesSectionProps) {
  const active = useLocale(snapshot => snapshot.active)
  const language = active.toLowerCase().startsWith('zh') ? 'zh' : 'en'
  const installed = process.env.DSH_CLIENT_VERSION
  const currentEntry = installed === undefined || installed === '' ? undefined : releaseEntry(installed)
  const current = currentEntry === undefined ? undefined : publishedVersion(currentEntry)
  return <div className={css.section}>
    {installed !== undefined && installed !== '' && <p className={css.current}>{t('current', { version: installed })}</p>}
    {RELEASE_NOTES.map((entry) => {
      const version = publishedVersion(entry)
      return <section key={version} data-current={version === current ? 'true' : undefined}>
        <h3 className={css.version}>
          {version}
          {version === current && <span className={css.badge}>{t('badge')}</span>}
        </h3>
        {entry.arya !== undefined && <p className={css.current}>{t('harness', { version: entry.version })}</p>}
        <ul className={css.list}>
          {entry[language].map(line => <li key={line} className={css.item}>{line}</li>)}
        </ul>
      </section>
    })}
  </div>
}
