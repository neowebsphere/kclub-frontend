import { Icon } from '@iconify/react'
import Link from 'next/link'

const Breadcrumb = () => {
  return (
    <>
      <ol className="flex flex-wrap items-center whitespace-nowrap pb-4 mb-2">
        <li className="inline-flex items-center">
          <Link className="flex items-center text-sm font-medium text-default-700 hover:text-default-900 focus:outline-hidden" href="/">
            Home
          </Link>
          <Icon icon="lucide:chevron-right" className="mx-2" />
        </li>
        <li className="inline-flex items-center">
          <Link className="flex items-center text-sm font-medium text-default-700 hover:text-default-900 focus:outline-hidden" href="/listings/side-filters-city">
            Restaurant
          </Link>
          <Icon icon="lucide:chevron-right" className="mx-2" />
        </li>
        <li className="inline-flex items-center text-sm font-medium text-default-500/80 truncate" aria-current="page">
          Sbarro Restaurant
        </li>
      </ol>
    </>
  )
}

export default Breadcrumb
