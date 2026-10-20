import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { publishedVersion, releaseEntry, RELEASE_NOTES } from "../catalog.js";
import css from './ReleaseNotes.module.css';
/**
 * Render the version history. The installed build is marked on the catalog line it belongs to.
 * @param props - settings owner share, copy, and the locale snapshot.
 * @returns the history, newest version first.
 */
export function ReleaseNotesSection({ t, useLocale }) {
    const active = useLocale(snapshot => snapshot.active);
    const language = active.toLowerCase().startsWith('zh') ? 'zh' : 'en';
    const installed = process.env.DSH_CLIENT_VERSION;
    const currentEntry = installed === undefined || installed === '' ? undefined : releaseEntry(installed);
    const current = currentEntry === undefined ? undefined : publishedVersion(currentEntry);
    return _jsxs("div", { className: css.section, children: [installed !== undefined && installed !== '' && _jsx("p", { className: css.current, children: t('current', { version: installed }) }), RELEASE_NOTES.map((entry) => {
                const version = publishedVersion(entry);
                return _jsxs("section", { "data-current": version === current ? 'true' : undefined, children: [_jsxs("h3", { className: css.version, children: [version, version === current && _jsx("span", { className: css.badge, children: t('badge') })] }), entry.arya !== undefined && _jsx("p", { className: css.current, children: t('harness', { version: entry.version }) }), _jsx("ul", { className: css.list, children: entry[language].map(line => _jsx("li", { className: css.item, children: line }, line)) })] }, version);
            })] });
}
//# sourceMappingURL=ReleaseNotesSection.js.map