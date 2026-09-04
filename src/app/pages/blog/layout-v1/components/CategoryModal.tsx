import { Icon } from '@iconify/react'
import Link from 'next/link'

const CategoryModal = () => {
  return (
    <>
      <div id="categoriesModal" className="hs-overlay hidden size-full fixed top-0 start-0 z-80 overflow-x-hidden overflow-y-auto pointer-events-none" role="dialog" tabIndex={-1} aria-labelledby="categoriesModallabel">
        categoriesModal
        <div className="hs-overlay-animation-target hs-overlay-open:scale-100 hs-overlay-open:opacity-100 scale-95 opacity-0 ease-in-out transition-all duration-200 md:max-w-lg md:w-full m-3 md:mx-auto min-h-[calc(100%-56px)] flex items-center">
          <div className="w-full flex flex-col bg-body-bg border border-gray-200 shadow-2xs rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
            <div className="flex justify-between items-center border-b border-default-200 px-6 py-5">
              <h3 id="categoriesModallabel" className="font-semibold text-default-800 text-xl">
                Categories
              </h3>
              <button type="button" className="size-8 " aria-label="Close" data-hs-overlay="#categoriesModal">
                <Icon icon="lucide:x" className="size-5" />
              </button>
            </div>
            <div className="p-6">
              <ul className="flex gap-2 flex-wrap">
                <li className="md:hidden block">
                  <Link href="" className="py-2.5 px-5 inline-flex rounded-full text-default-900 border border-default-900 bg-default-100 dark:bg-white/3 text-sm font-semibold">
                    All
                  </Link>
                </li>
                <li className="md:hidden block">
                  <Link href="" className="py-2.5 px-5 inline-flex rounded-full text-default-900 border border-default-300 dark:border-white/20 hover:border-default-900 transition-all duration-300 text-sm font-semibold">
                    Real estate news
                  </Link>
                </li>
                <li className="md:hidden block">
                  <Link href="" className="py-2.5 px-5 inline-flex rounded-full text-default-900 border border-default-300 dark:border-white/20 hover:border-default-900 transition-all duration-300 text-sm font-semibold">
                    Buying tips
                  </Link>
                </li>
                <li className="lg:hidden block">
                  <Link href="" className="py-2.5 px-5 inline-flex rounded-full text-default-900 border border-default-300 dark:border-white/20 hover:border-default-900 transition-all duration-300 text-sm font-semibold">
                    Selling strategies
                  </Link>
                </li>
                <li>
                  <Link href="" className="py-2.5 px-5 inline-flex rounded-full text-default-900 border border-default-300 dark:border-white/20 hover:border-default-900 transition-all duration-300 text-sm font-semibold">
                    Home improvement
                  </Link>
                </li>
                <li>
                  <Link href="" className="py-2.5 px-5 inline-flex rounded-full text-default-900 border border-default-300 dark:border-white/20 hover:border-default-900 transition-all duration-300 text-sm font-semibold">
                    Interior design
                  </Link>
                </li>
                <li>
                  <Link href="" className="py-2.5 px-5 inline-flex rounded-full text-default-900 border border-default-300 dark:border-white/20 hover:border-default-900 transition-all duration-300 text-sm font-semibold">
                    Renting advice
                  </Link>
                </li>
                <li>
                  <Link href="" className="py-2.5 px-5 inline-flex rounded-full text-default-900 border border-default-300 dark:border-white/20 hover:border-default-900 transition-all duration-300 text-sm font-semibold">
                    Neighborhood guides
                  </Link>
                </li>
                <li>
                  <Link href="" className="py-2.5 px-5 inline-flex rounded-full text-default-900 border border-default-300 dark:border-white/20 hover:border-default-900 transition-all duration-300 text-sm font-semibold">
                    Property management
                  </Link>
                </li>
                <li>
                  <Link href="" className="py-2.5 px-5 inline-flex rounded-full text-default-900 border border-default-300 dark:border-white/20 hover:border-default-900 transition-all duration-300 text-sm font-semibold">
                    Legal and tax issues
                  </Link>
                </li>
                <li>
                  <Link href="" className="py-2.5 px-5 inline-flex rounded-full text-default-900 border border-default-300 dark:border-white/20 hover:border-default-900 transition-all duration-300 text-sm font-semibold">
                    Investment advice
                  </Link>
                </li>
                <li>
                  <Link href="" className="py-2.5 px-5 inline-flex rounded-full text-default-900 border border-default-300 dark:border-white/20 hover:border-default-900 transition-all duration-300 text-sm font-semibold">
                    Mortgage and financing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CategoryModal
