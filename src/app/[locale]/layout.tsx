import favicon from '@/assets/app-icons/favicon.ico'
import AppProvidersWrapper from '@/components/wrappers/AppProvidersWrapper'
import { DEFAULT_PAGE_TITLE } from '@/config/constants'
import { routing } from '@/i18n/routing'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import '@/assets/css/style.css'

export const metadata: Metadata = {
  title: {
    template: `%s | ${DEFAULT_PAGE_TITLE}`,
    default: DEFAULT_PAGE_TITLE,
  },
  icons: { icon: favicon.src },
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  // Enables static rendering for this locale
  setRequestLocale(locale)

  return (
    <html lang={locale}>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" />
      </head>
      <body suppressHydrationWarning>
        <NextIntlClientProvider>
          <AppProvidersWrapper>{children}</AppProvidersWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
