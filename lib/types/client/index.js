import { en, NS, zh } from "./locales.js";
import { ReleaseNotesSection } from "./ReleaseNotesSection.js";
/** Services this plugin waits for. The page needs the slot registry and copy. */
export const inject = ['slots', 'locale'];
/**
 * Register the dictionaries and the Settings page.
 * @param ctx - client root context.
 */
export function apply(ctx) {
    ctx.effect(() => ctx.locale.register(NS, { zh, en }), 'ui-release-notes: dictionaries');
    ctx.slots.inject('settings.section', () => ctx.slots.register({
        name: 'settings.section',
        id: 'release-notes',
        order: 1,
        label: () => ctx.locale.bind(NS)('nav'),
        locale: NS,
        inject: () => ({ hooks: { locale: ctx.locale } }),
    }, ReleaseNotesSection));
}
//# sourceMappingURL=index.js.map