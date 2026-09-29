/** @vitest-environment jsdom */
import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import type { LocaleSnapshot } from '@deepseek-ai/dsh-client-locale/client'
import type { GlobalStandardProps } from '@deepseek-ai/dsh-client-ui-slots'
import { en } from '../src/client/locales.ts'
import { ReleaseNotesSection } from '../src/client/ReleaseNotesSection.tsx'

const t = (key: keyof typeof en, values?: Record<string, string | number>) => {
  let text: string = en[key]
  if (values !== undefined) {
    for (const [name, value] of Object.entries(values)) text = text.replaceAll(`{${name}}`, String(value))
  }
  return text
}

const useLocale = <T,>(select: (snapshot: LocaleSnapshot) => T) => select({
  active: 'en',
  locales: [],
  revision: 0,
})

describe('release notes page', () => {
  afterEach(() => {
    cleanup()
    vi.unstubAllEnvs()
  })

  it('lists the current line first and marks the installed build', () => {
    vi.stubEnv('DSH_CLIENT_VERSION', '0.1.7-rc.2.20260927.1')
    render(<ReleaseNotesSection {...({} as GlobalStandardProps)} t={t} useLocale={useLocale} close={() => {}} />)
    expect(screen.getByText('This installation is 0.1.7-rc.2.20260927.1')).toBeTruthy()
    // The dated build carries no Arya number, so it matches the newest line.
    expect(screen.getByRole('heading', { name: /0\.1\.7-rc\.2\.AryaAI\.0\.5\.0/ }).closest('section')?.getAttribute('data-current')).toBe('true')
    expect(screen.getAllByText('DeepSeek Harness 0.1.7-rc.2')).toHaveLength(5)
    // The 0.3.0 line repeats this bullet verbatim, so both entries carry it.
    expect(screen.getAllByText(/Right-click a workspace in the left panel/)).toHaveLength(2)
    // The older lines stay listed below the current one.
    expect(screen.getByText(/official local ComfyUI MCP server/)).toBeTruthy()
  })

  it('marks an exact older Arya release independently', () => {
    vi.stubEnv('DSH_CLIENT_VERSION', '0.1.7-rc.2.AryaAI.0.1.0')
    render(<ReleaseNotesSection {...({} as GlobalStandardProps)} t={t} useLocale={useLocale} close={() => {}} />)
    expect(screen.getByRole('heading', { name: /0\.1\.7-rc\.2\.AryaAI\.0\.1\.0/ }).closest('section')?.getAttribute('data-current')).toBe('true')
    expect(screen.getByRole('heading', { name: /0\.1\.7-rc\.2\.AryaAI\.0\.2\.0/ }).closest('section')?.getAttribute('data-current')).toBeNull()
  })
})
