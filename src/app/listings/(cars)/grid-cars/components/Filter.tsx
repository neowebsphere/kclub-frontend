import { Icon } from '@iconify/react'
import Link from 'next/link'

const Filter = () => {
  return (
    <>
      <div className="flex justify-between gap-4 pb-2 mb-6 border-b border-border">
        <div className="flex gap-4 items-center">
          <div className="text-sm text-nowrap flex gap-1 pb-4">
            <span className="md:block hidden">Showing</span> 142 results
          </div>
          <div className=" overflow-x-auto whitespace-nowrap lg:w-full md:w-130 w-50">
            <div className="flex gap-2 pb-4">
              <button className="text-xs py-2 px-4 bg-default-100 font-semibold dark:bg-default-200 rounded-full inline-flex justify-center items-center transition-all duration-500 ease-in-out hover:bg-default-200 dark:hover:bg-default-300">
                <Icon icon="lucide:x" className="size-3.5 me-1" />
                Sedan
              </button>
              <button className="text-xs py-2 px-4 bg-default-100 font-semibold dark:bg-default-200 rounded-full inline-flex justify-center items-center transition-all duration-500 ease-in-out hover:bg-default-200 dark:hover:bg-default-300">
                <Icon icon="lucide:x" className="size-3.5 me-1" />
                SUV
              </button>
              <button className="text-xs py-2 px-4 bg-default-100 font-semibold dark:bg-default-200 rounded-full inline-flex justify-center items-center transition-all duration-500 ease-in-out hover:bg-default-200 dark:hover:bg-default-300">
                <Icon icon="lucide:x" className="size-3.5 me-1" />
                Coupe
              </button>
              <button className="text-xs py-2 px-4 bg-default-100 font-semibold dark:bg-default-200 rounded-full inline-flex justify-center items-center transition-all duration-500 ease-in-out hover:bg-default-200 dark:hover:bg-default-300">
                <Icon icon="lucide:x" className="size-3.5 me-1" />
                Under 2023
              </button>
              <button className="text-xs py-2 px-4 bg-default-100 font-semibold dark:bg-default-200 rounded-full inline-flex justify-center items-center transition-all duration-500 ease-in-out hover:bg-default-200 dark:hover:bg-default-300">
                <Icon icon="lucide:x" className="size-3.5 me-1" />
                $17,000 - $120,000
              </button>
            </div>
          </div>
        </div>
        <div className="pb-4">
          <Link className="text-xs underline hover:no-underline text-default-700 font-medium" href="">
            Clear all
          </Link>
        </div>
      </div>
    </>
  )
}

export default Filter
