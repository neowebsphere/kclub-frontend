import { defineRouting } from 'next-intl/routing'

export const locales = ['en', 'ru', 'uk'] as const

export type Locale = (typeof locales)[number]

export const localeNames: Record<Locale, string> = {
  en: 'English',
  ru: 'Русский',
  uk: 'Українська',
}

export const routing = defineRouting({
  locales,
  defaultLocale: 'en',
  localePrefix: 'always',
})
