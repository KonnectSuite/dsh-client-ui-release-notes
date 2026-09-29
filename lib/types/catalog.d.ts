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
    readonly version: string;
    /** AryaAI major.minor.patch on this harness line. */
    readonly arya?: string;
    readonly en: readonly string[];
    readonly zh: readonly string[];
}
/**
 * The version people see. A harness prerelease continues with a dot; a stable harness version opens a prerelease.
 * @param entry - one catalog line.
 * @returns `0.1.7-rc.2.AryaAI.0.4.0`, or the harness version when this line has no Arya number.
 */
export declare function publishedVersion(entry: ReleaseNote): string;
/** Notes the shell can show. Newest product lines belong at the top. */
export declare const RELEASE_NOTES: readonly ReleaseNote[];
/**
 * The note a build should show. A longer matching version wins over a shorter one.
 * @param version - the installed version, or the version the feed is offering.
 * @returns that entry, or undefined when this version has nothing to say.
 */
export declare function releaseEntry(version: string): ReleaseNote | undefined;
//# sourceMappingURL=catalog.d.ts.map