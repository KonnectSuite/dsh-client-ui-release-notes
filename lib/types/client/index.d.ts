/**
 * Release notes, browser half. Adds a Settings page that lists each version.
 * Unplug this plugin by removing its patch row, or setting that row disabled.
 */
import type { Context } from '@deepseek-ai/cordis';
import { zh } from './locales.ts';
declare module '@deepseek-ai/dsh-client-ui-slots' {
    interface LocaleNamespaceMap {
        /** Settings page that lists published versions. */
        releaseNotes: keyof typeof zh;
    }
}
/** Services this plugin waits for. The page needs the slot registry and copy. */
export declare const inject: string[];
/**
 * Register the dictionaries and the Settings page.
 * @param ctx - client root context.
 */
export declare function apply(ctx: Context): void;
//# sourceMappingURL=index.d.ts.map