import Topbar from '@/components/topbar'
import { Icon } from '@iconify/react'
import { ArrowUpDown, MapPin, Navigation, Search, UserRound } from 'lucide-react'
import DoctorsSection from './components/DoctorsSection'
import Link from 'next/link'
import Footer from '../components/Footer'

const Page = () => {
  return (
    <>
      <Topbar
        className="bg-white shadow-sm dark:bg-[#121519]"
        ButtonClassName="text-nowrap rounded-md"
        showLogIn
        ButtonText="Sign up"
        ButtonIcon={
          <div>
            <UserRound className="size-4 me-2" />
          </div>
        }
      />
      <section className="bg-default-100 dark:bg-white/3 lg:pt-25 pt-22 md:pb-18 pb-14">
        <div className="container">
          <ol className="flex flex-wrap items-center whitespace-nowrap pb-4 lg:mb-4 mb-2">
            <li className="inline-flex items-center">
              <Link className="flex items-center text-sm font-medium text-default-700 hover:text-default-900 focus:outline-hidden" href="/">
                Home
              </Link>
              <Icon icon="lucide:chevron-right" className="mx-2" />
            </li>
            <li className="inline-flex items-center text-sm font-medium text-default-500/80 truncate" aria-current="page">
              Physicians
            </li>
          </ol>
          <div>
            <h1 className="lg:text-3.5xl md:text-2.5xl text-2xl text-default-900 font-semibold pb-2 mb-6">Physicians in Chicago</h1>
            <div className="flex flex-wrap items-center lg:gap-6 gap-4 md:mb-6 mb-5">
              <div className="w-full md:w-37/100 lg:w-1/5">
                <div className="relative">
                  <Search  className="absolute top-1/2 start-3.5 -translate-y-1/2 text-default-500 size-3.5" />
                  <input type="search" defaultValue="Physician" placeholder="Search doctor" className="w-full border border-default-300 dark:border-white/30 rounded-md ps-10 pe-3 py-2 bg-transparent focus:ring-2 text-sm" />
                </div>
              </div>
              <div className="w-full md:w-4/12 lg:w-3/20">
                <div className="relative">
                  <MapPin className="absolute top-1/2 start-3.5 -translate-y-1/2 text-default-500 size-3.5" />
                  <select className="w-full border border-default-300 dark:border-white/30 rounded-md ps-10 pe-8 py-2 bg-transparent focus:ring-2 text-sm appearance-none">
                    <option>Any location</option>
                    <option>New York</option>
                    <option>Los Angeles</option>
                    <option defaultChecked>Chicago</option>
                    <option>Houston</option>
                    <option>Phoenix</option>
                    <option>Philadelphia</option>
                    <option>San Antonio</option>
                    <option>San Diego</option>
                    <option>Dallas</option>
                    <option>San Jose</option>
                  </select>
                </div>
              </div>
              <div className="w-full sm:w-5/12 md:w-3/12 lg:w-2/12">
                <div className="relative">
                  <Navigation className="absolute top-1/2 start-3.5 -translate-y-1/2 text-default-500 size-3.5" />
                  <select className="w-full border border-default-300 dark:border-white/30 rounded-md ps-10 pe-8 py-2 bg-transparent focus:ring-2 text-sm appearance-none">
                    <option>Any radius</option>
                    <option defaultChecked>5 mi</option>
                    <option>10 mi</option>
                    <option>20 mi</option>
                    <option>30 mi</option>
                    <option>40 mi</option>
                    <option>50 mi</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-6 lg:w-4/12">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="peer hidden" />
                  <span className="w-11 h-6 rounded-full bg-default-300 peer-checked:bg-success relative after:content-[''] after:absolute after:top-0.75 after:start-0.75 after:w-4.5 after:h-4.5 after:bg-white after:rounded-full after:transition-all peer-checked:after:translate-x-5" />
                  <span className="text-sm">Online</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="peer hidden" />
                  <span className="w-11 h-6 rounded-full bg-default-300 peer-checked:bg-success relative after:content-[''] after:absolute after:top-0.75 after:start-0.75 after:w-4.5 after:h-4.5 after:bg-white after:rounded-full after:transition-all peer-checked:after:translate-x-5" />
                  <span className="text-sm">Visit clinic</span>
                </label>
              </div>
            </div>
            <div className="lg:mb-6 mb-4">
              <div className="flex items-center justify-between gap-4 md:pb-2 mb-2">
                <div className="text-sm text-nowrap flex gap-1">
                  <span className="md:block hidden">Showing</span> 56 results
                </div>
                <div className="flex items-center gap-4 justify-end">
                  <div className="text-sm font-semibold text-default-900 lg:block hidden">Sort by:</div>
                  <div className="relative w-31.25">
                    <ArrowUpDown className="absolute start-0 top-1/2 -translate-y-1/2 z-10 size-3.5" />
                    <select className="w-full ps-6 pe-2 py-1 border-0 rounded-none text-sm text-default-700 focus:outline-none focus:ring-0 bg-transparent">
                      <option defaultChecked>Popular</option>
                      <option>Newest</option>
                    </select>
                  </div>
                  <div className="flex">
                    <Link href="/listings/grid-cars" className="text-xl text-default-500 px-2 py-0 pointer-events-none">
                      <Icon icon="lucide:layout-grid"  />
                    </Link>
                    <Link href="/listings/list-cars" className="text-xl text-default-700 px-2 py-0">
                      <Icon icon="lucide:list"  />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <DoctorsSection />
            <nav className="flex items-center justify-center gap-x-1 mt-8 lg:mb-12 lg:pt-4" aria-label="Pagination">
              <div className="flex items-center gap-x-1">
                <button
                  type="button"
                  className="min-h-9.5 min-w-9.5 flex justify-center items-center bg-default-200 text-default-800 py-2 px-3 text-sm rounded-lg focus:outline-hidden focus:bg-default-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-600 dark:text-white dark:focus:bg-neutral-500"
                  aria-current="page"
                >
                  1
                </button>
                <button
                  type="button"
                  className="min-h-9.5 min-w-9.5 flex justify-center items-center text-default-800 hover:bg-default-100 py-2 px-3 text-sm rounded-lg focus:outline-hidden focus:bg-default-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
                >
                  2
                </button>
                <button
                  type="button"
                  className="min-h-9.5 min-w-9.5 flex justify-center items-center text-default-800 hover:bg-default-100 py-2 px-3 text-sm rounded-lg focus:outline-hidden focus:bg-default-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
                >
                  3
                </button>
                <button
                  type="button"
                  className="min-h-9.5 min-w-9.5 flex justify-center items-center text-default-800 hover:bg-default-100 py-2 px-3 text-sm rounded-lg focus:outline-hidden focus:bg-default-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
                >
                  4
                </button>
                <button
                  type="button"
                  className="min-h-9.5 min-w-9.5 flex justify-center items-center text-default-800 hover:bg-default-100 py-2 px-3 text-sm rounded-lg focus:outline-hidden focus:bg-default-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
                >
                  5
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
                  8
                </button>
              </div>
            </nav>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Page
