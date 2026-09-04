'use client'
import Icon from '@/components/wrappers/Icon'
import { usePathname, useRouter } from '@/i18n/navigation'
import { localeNames, routing, type Locale } from '@/i18n/routing'
import clsx from 'clsx'
import { useLocale, useTranslations } from 'next-intl'
import { useTransition } from 'react'

const LocaleSwitcher = () => {
  const t = useTranslations('LocaleSwitcher')
  const locale = useLocale() as Locale
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  const change = (next: Locale) => {
    if (next === locale) return
    startTransition(() => {
      // `pathname` is locale-agnostic here, so the same route is kept
      router.replace(pathname, { locale: next })
    })
  }

  return (
    <div className="hs-dropdown [--trigger:hover] relative inline-flex">
      <button
        type="button"
        className={clsx(
          'hs-dropdown-toggle cursor-pointer text-default-900 flex items-center gap-1 py-2 px-3 font-medium rounded-full',
          isPending && 'opacity-60',
        )}
        aria-haspopup="menu"
        aria-expanded="false"
        aria-label={t('label')}
        disabled={isPending}
      >
        <Icon icon="world" className="size-4.5" />
        <span className="text-sm uppercase">{locale}</span>
        <Icon icon="chevron-down" className="size-4" />
      </button>

      <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-20" role="menu" aria-orientation="vertical">
        <div className="p-2 border border-border bg-body-bg shadow-custom rounded-xl min-w-40 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full" data-hs-transition>
          <ul className="flex flex-col gap-0.5">
            {routing.locales.map((item) => (
              <li key={item}>
                <button
                  type="button"
                  onClick={() => change(item)}
                  className={clsx(
                    'w-full text-start text-sm py-2 px-3 rounded-lg hover:bg-default-100 dark:hover:bg-white/10',
                    item === locale && 'bg-default-100 dark:bg-white/10 font-semibold',
                  )}
                >
                  {localeNames[item]}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default LocaleSwitcher
