import { Icon } from '@iconify/react'
import { ArrowUpDown } from 'lucide-react'
import Link from 'next/link'

const ListingToolbar = () => {
  return (
    <>
      <div className="flex items-center gap-6 pb-4 md:mb-4">
        <div className="text-sm whitespace-nowrap hidden md:inline">Showing 116 results</div>
        <div className="relative md:ms-auto w-42.5">
          <ArrowUpDown className="absolute top-1/2 start-4 -translate-y-1/2 z-10 size-3.5" />
          <select className="w-full rounded-full border bg-transparent border-default-300 dark:border-white/20 ps-10 pe-18 py-2 text-sm text-default-700">
            <option value="Popular" defaultChecked>
              Popular
            </option>
            <option value="Rating">Rating</option>
            <option value="Price asc">Price asc</option>
            <option value="Price desc">Price desc</option>
          </select>
        </div>
        <div className="ms-auto md:ms-0 flex items-center">
          <Link href="#map" className="relative inline-flex items-center">
            <Icon icon="lucide:map" className="text-base me-2" />
          </Link>
          <Link href="" className="hover:underline text-sm text-default-800 font-medium">
            <span>
              View on <span className="hidden sm:inline">the</span> map
            </span>
          </Link>
        </div>
      </div>
    </>
  )
}

export default ListingToolbar
