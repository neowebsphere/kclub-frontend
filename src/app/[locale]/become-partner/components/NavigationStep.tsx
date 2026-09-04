'use client'

import { Icon } from '@iconify/react'
import clsx from 'clsx'
import { Link } from '@/i18n/navigation'
import { usePathname } from '@/i18n/navigation'

type StepType = {
  label: string
  href: string
  icon: string
}

const steps: StepType[] = [
  {
    label: 'Business location',
    href: '/become-partner/location',
    icon: 'lucide:map',
  },
  {
    label: 'Choose services',
    href: '/become-partner/services',
    icon: 'lucide:swatch-book',
  },
  {
    label: 'Profile details',
    href: '/become-partner/profile',
    icon: 'lucide:user-check',
  },
  {
    label: 'Price and hours',
    href: '/become-partner/price-hours',
    icon: 'lucide:clock',
  },
  {
    label: 'Create first project',
    href: '/become-partner/project',
    icon: 'lucide:layout-grid',
  },
]

const NavigationStep = () => {
  const pathname = usePathname()

  const currentIndex = steps.findIndex((step) => step.href === pathname)

  return (
    <section className="bg-info lg:mt-20 md:mt-17 mt-15">
      <div className="container">
        <div className="overflow-auto">
          <div className="flex items-center gap-1 py-4 md:my-1">
            {steps.map((step, index) => {
              const isActive = pathname === step.href
              const isCompleted = index < currentIndex

              return (
                <div key={step.href} className="flex items-center">
                  <Link href={step.href} className="flex items-center gap-4 whitespace-nowrap">
                    <div className={clsx('flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-all duration-200', isActive || isCompleted ? 'bg-white' : 'border border-white')}>
                      <Icon icon={step.icon} className={clsx('text-lg', isActive || isCompleted ? 'text-info' : 'text-white')} />
                    </div>

                    <div className="text-sm font-semibold text-white">{step.label}</div>
                  </Link>

                  {index !== steps.length - 1 && <hr className="mx-2 my-0 w-22 border-white/25" />}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default NavigationStep
