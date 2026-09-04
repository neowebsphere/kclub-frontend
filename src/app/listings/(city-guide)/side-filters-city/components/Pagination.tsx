import { Icon } from '@iconify/react'
import Link from 'next/link'

const Pagination = () => {
  return (
    <>
      <nav className="flex items-center justify-between gap-x-1 mt-8" aria-label="Pagination">
        <Link
          href=""
          aria-label="Previous page"
          className="min-h-9.5 min-w-9.5 flex justify-center items-center text-default-500 hover:bg-default-100 py-2 px-3 text-sm rounded-full focus:outline-hidden focus:bg-default-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
        >
          <Icon icon="lucide:chevron-left" className="text-lg" />
        </Link>
        <div className="flex items-center gap-x-1">
          <button
            type="button"
            className="min-h-9.5 min-w-9.5 flex justify-center items-center bg-default-200 text-default-800 py-2 px-3 text-sm rounded-full focus:outline-hidden focus:bg-default-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-600 dark:text-white dark:focus:bg-neutral-500"
            aria-current="page"
          >
            1
          </button>
          <button
            type="button"
            className="min-h-9.5 min-w-9.5 flex justify-center items-center text-default-800 hover:bg-default-100 py-2 px-3 text-sm rounded-full focus:outline-hidden focus:bg-default-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
          >
            2
          </button>
          <button
            type="button"
            className="min-h-9.5 min-w-9.5 flex justify-center items-center text-default-800 hover:bg-default-100 py-2 px-3 text-sm rounded-full focus:outline-hidden focus:bg-default-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
          >
            3
          </button>
          <button
            type="button"
            className="min-h-9.5 min-w-9.5 flex justify-center items-center text-default-800 hover:bg-default-100 py-2 px-3 text-sm rounded-full focus:outline-hidden focus:bg-default-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
          >
            4
          </button>
          <div className="hs-tooltip inline-block">
            <button
              type="button"
              className="hs-tooltip-toggle group min-h-9.5 min-w-9.5 flex justify-center items-center text-default-400 hover:text-blue-600 p-2 text-sm rounded-lg focus:outline-hidden focus:bg-default-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:bg-white/10"
            >
              <Icon icon="lucide:ellipsis" className="text-lg" />
            </button>
          </div>
          <button
            type="button"
            className="min-h-9.5 min-w-9.5 flex justify-center items-center text-default-800 hover:bg-default-100 py-2 px-3 text-sm rounded-lg focus:outline-hidden focus:bg-default-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
          >
            10
          </button>
        </div>
        <Link
          href=""
          aria-label="Next page"
          className="min-h-9.5 min-w-9.5 flex justify-center items-center text-default-500 hover:bg-default-100 py-2 px-3 text-sm rounded-full focus:outline-hidden focus:bg-default-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
        >
          <Icon icon="lucide:chevron-right" className="text-lg" />
        </Link>
      </nav>
    </>
  )
}

export default Pagination
