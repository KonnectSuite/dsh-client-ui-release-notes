/** Settings page that lists every published version, newest first. */
import type { LocaleSnapshot } from '@deepseek-ai/dsh-client-locale/client';
import type { PropsRuntime, SnapshotSelectorHook } from '@deepseek-ai/dsh-client-ui-slots';
import type { ReleaseNotesKey } from './locales.ts';
/** Chrome copy plus the active locale, so the page follows the language switch. */
export interface ReleaseNotesSectionProps extends PropsRuntime<'settings.section'> {
    t: (key: ReleaseNotesKey, values?: Record<string, string | number>) => string;
    useLocale: SnapshotSelectorHook<LocaleSnapshot>;
}
/**
 * Render the version history. The installed build is marked on the catalog line it belongs to.
 * @param props - settings owner share, copy, and the locale snapshot.
 * @returns the history, newest version first.
 */
export declare function ReleaseNotesSection({ t, useLocale }: ReleaseNotesSectionProps): import("react").JSX.Element;
//# sourceMappingURL=ReleaseNotesSection.d.ts.map