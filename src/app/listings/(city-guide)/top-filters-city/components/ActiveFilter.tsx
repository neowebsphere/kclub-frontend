import { Star, X } from 'lucide-react'
import Link from 'next/link'

const ActiveFilter = () => {
  return (
    <>
      <div className="mb-2 pb-1 flex gap-4 pt-2">
        <div className="flex gap-2 pb-4 whitespace-nowrap overflow-x-auto lg:w-auto w-70 md:w-165">
          <button className="text-xs py-2 px-4 bg-default-100 font-semibold dark:bg-default-200 rounded-full inline-flex justify-center items-center transition-all duration-500 ease-in-out hover:bg-default-200 dark:hover:bg-default-300">
            <X className="size-3.5 me-1" />
            Apartments
          </button>
          <button className="text-xs py-2 px-4 bg-default-100 font-semibold dark:bg-default-200 rounded-full inline-flex justify-center items-center transition-all duration-500 ease-in-out hover:bg-default-200 dark:hover:bg-default-300">
            <X className="size-3.5 me-1" />
            Hotels
          </button>
          <button className="text-xs py-2 px-4 bg-default-100 font-semibold dark:bg-default-200 rounded-full inline-flex justify-center items-center transition-all duration-500 ease-in-out hover:bg-default-200 dark:hover:bg-default-300">
            <X className="size-3.5 me-1" />
            Resorts
          </button>
          <button className="text-xs py-2 px-4 bg-default-100 font-semibold dark:bg-default-200 rounded-full inline-flex justify-center items-center transition-all duration-500 ease-in-out hover:bg-default-200 dark:hover:bg-default-300">
            <X className="size-3.5 me-1" />
            Cottages
          </button>
          <button className="text-xs py-2 px-4 bg-default-100 font-semibold dark:bg-default-200 rounded-full inline-flex justify-center items-center transition-all duration-500 ease-in-out hover:bg-default-200 dark:hover:bg-default-300">
            <X className="size-3.5 me-1" />
            Barcelona
          </button>
          <button className="text-xs py-2 px-4 bg-default-100 font-semibold dark:bg-default-200 rounded-full inline-flex justify-center items-center transition-all duration-500 ease-in-out hover:bg-default-200 dark:hover:bg-default-300">
            <X className="size-3.5 me-1" />
            5 <Star className="fill-warning text-warning ms-2 size-3" />
          </button>
          <button className="text-xs py-2 px-4 bg-default-100 font-semibold dark:bg-default-200 rounded-full inline-flex justify-center items-center transition-all duration-500 ease-in-out hover:bg-default-200 dark:hover:bg-default-300">
            <X className="size-3.5 me-1" />
            4 <Star className="fill-warning text-warning ms-2 size-3" />
          </button>
        </div>
        <div className="pb-4">
          <Link className="underline hover:no-underline text-default-800 text-xs" href="">
            Clear all
          </Link>
        </div>
      </div>
    </>
  )
}

export default ActiveFilter
