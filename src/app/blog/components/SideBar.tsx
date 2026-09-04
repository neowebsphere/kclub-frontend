'use client'
import subscribe from '@/assets/img/blog/v4/subscribe.jpg'
import { Icon } from '@iconify/react'
import type { StaticImageData } from 'next/image'
import Image from 'next/image'
import Link from 'next/link'

type CategoryType = {
  id: number
  title: string
  count: number
}

const visibleCategories: CategoryType[] = [
  { id: 1, title: 'All topics', count: 130 },
  { id: 2, title: 'Healthcare system', count: 8 },
  { id: 3, title: 'Hospital quality', count: 15 },
  { id: 4, title: 'Wellness guides', count: 10 },
  { id: 5, title: 'Medical industry', count: 9 },
  { id: 6, title: 'Life science', count: 4 },
  { id: 7, title: 'Herbal medicine', count: 12 },
  { id: 8, title: 'Upcoming events', count: 3 },
  { id: 9, title: 'Family medicine', count: 7 },
]

const hiddenCategories: CategoryType[] = [
  { id: 10, title: 'Medical news', count: 18 },
  { id: 11, title: 'Health tips', count: 11 },
  { id: 12, title: 'Doctor advice', count: 25 },
  { id: 13, title: 'Treatment options', count: 6 },
  { id: 14, title: 'Healthcare trends', count: 2 },
]

type SubscribeCardType = {
  title: string
  image: StaticImageData
}

const subscribeCard: SubscribeCardType = {
  title: 'Stay updated with kclub',
  image: subscribe,
}

const SideBar = () => {
  return (
    <div className="col-span-4 ms-auto lg:w-80 w-full">
      <div
        id="blogSidebar"
        className="hs-overlay lg:z-0 z-30 [--auto-close:lg] lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 w-[350px] hs-overlay-open:translate-x-0 translate-x-full transition-all duration-300 transform h-full hidden lg:sticky lg:top-10 fixed end-0 bottom-0 bg-white dark:bg-default-950 lg:border-0 border-e border-gray-200 dark:border-white/10"
        role="dialog"
        tabIndex={-1}
        aria-label="Sidebar"
      >
        <div className="relative flex flex-col h-full max-h-full">
          <header className="lg:hidden flex p-6 justify-between items-center gap-x-2 border-b border-default-200 dark:border-white/10">
            <h4 className="text-xl text-default-900 font-semibold">Sidebar</h4>
            <button type="button" className="flex justify-center items-center size-6 bg-white dark:bg-default-900 border border-gray-200 dark:border-white/10 text-sm text-gray-600 dark:text-white hover:bg-gray-100 rounded-full" data-hs-overlay="#blogSidebar">
              <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>

              <span className="sr-only">Close</span>
            </button>
          </header>

          <div className="lg:p-0 p-6 lg:sticky lg:h-auto lg:top-26 h-[calc(100vh-64px)] overflow-y-auto" data-simplebar>
            <h4 className="mb-4 text-xl text-default-900 font-semibold">Categories</h4>

            <ul className="flex flex-col gap-1 mb-6 pb-4">
              {visibleCategories.map((category, index) => (
                <li key={category.id}>
                  <Link href="" className={`flex justify-between items-center relative py-1 text-sm text-body-color ${index === 0 ? 'font-semibold' : 'font-normal'}`}>
                    <span className="hover:underline">{category.title}</span>

                    <span className="text-xs text-default-500">({category.count})</span>
                  </Link>
                </li>
              ))}

              <div id="commentsCollapse" className="hidden">
                {hiddenCategories.map((category) => (
                  <li key={category.id}>
                    <Link href="" className="flex justify-between items-center relative font-normal py-1 text-sm text-body-color">
                      <span className="hover:underline">{category.title}</span>
                      <span className="text-xs text-default-500">({category.count})</span>
                    </Link>
                  </li>
                ))}
              </div>

              <div className="nav">
                <div className="flex">
                  <button onClick={() => document.getElementById('commentsCollapse')?.classList.toggle('hidden')} className="w-full text-default-900 inline-flex items-center text-start text-sm font-medium pb-3 hover:underline" type="button" aria-expanded="false" aria-controls="commentsCollapse">
                    Show more
                    <Icon icon="lucide:chevron-down" className="ms-1" />
                  </button>
                </div>
              </div>
            </ul>

            <div className="bg-default-100 dark:bg-white/3 rounded-md p-6">
              <div className="relative mx-auto mb-2" style={{ width: 40 }}>
                <div className="ratio bg-secondary" style={{ aspectRatio: 'calc(33 / 40 * 100%)', WebkitClipPath: 'url(#mask)', clipPath: 'url(#mask)' }}>
                  <Image src={subscribeCard.image} alt={subscribeCard.title} className="object-cover" />
                  <svg className="absolute" xmlns="http://www.w3.org/2000/svg" width={0} height={0} viewBox="0 0 40 33" fill="none">
                    <defs>
                      <clipPath id="mask" clipPathUnits="objectBoundingBox" transform="scale(0.025, 0.0303030303)">
                        <path d="M28.6582 0.00077145C25.3214 -0.0169982 22.1493 1.4433 20 3.98667C17.8641 1.42591 14.6831 -0.0385342 11.3417 0.00077145C5.07783 0.00077145 0 5.06077 0 11.3026C0 21.9992 18.7342 32.4433 19.4937 32.847C19.8001 33.051 20.1998 33.051 20.5063 32.847C21.2658 32.4433 40 22.1505 40 11.3026C40 5.06077 34.9221 0.00077145 28.6582 0.00077145Z" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>

              <h4 className="mb-4 text-default-900 font-semibold text-center">{subscribeCard.title}</h4>

              <form className="flex flex-col gap-4 needs-validation" noValidate>
                <input type="email" className="w-full border border-border rounded-md focus:ring-0 focus:outline-none placeholder-default-500 text-sm bg-body-bg" placeholder="Your email" aria-label="Email input" required />

                <button type="submit" className="py-2.5 px-3.5 rounded text-sm font-semibold w-full bg-info text-white">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar
