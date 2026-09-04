import { Icon } from "@iconify/react"
import Link from "next/link"

const Breadcrumb = () => {
  return (
    <>
      <ol className="flex flex-wrap items-center whitespace-nowrap md:pb-4 pb-2 mb-4">
        <li className="inline-flex items-center">
          <Link className="flex items-center text-sm font-medium text-default-700 hover:text-default-900 focus:outline-hidden" href="/">
            Home
          </Link>
          <Icon icon="lucide:chevron-right" className="mx-2" />
        </li>
        <li className="inline-flex items-center">
          <Link href="/listings/real-estate" className="flex items-center text-sm font-medium text-default-700 hover:text-default-900 focus:outline-hidden">
            Property for rent
          </Link>
          <Icon icon="lucide:chevron-right" className="mx-2" />
        </li>
        <li className="inline-flex items-center text-sm font-medium text-default-400 truncate" aria-current="page">
          67-04 Myrtle Ave Glendale, NY
        </li>
      </ol>
    </>
  )
}

export default Breadcrumb
