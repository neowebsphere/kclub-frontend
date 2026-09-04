import Topbar from '@/components/topbar'
import { Icon } from '@iconify/react'
import { ArrowUpDown, UserRound } from 'lucide-react'
import Footer from '../components/Footer'
import Breadcrumb from './components/Breadcrumb'
import DoctorFilter from './components/DoctorFilter'
import DoctorsGrid from './components/DoctorsGrid'
import Pagination from './components/Pagination'
import Link from 'next/link'

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
          <Breadcrumb />
          <div>
            <DoctorFilter />

            <div className="lg:mb-6 mb-4">
              <div className="flex items-center justify-between gap-4 md:pb-2 mb-2">
                <div className="text-sm text-nowrap flex gap-1">
                  <span className="md:block hidden">Showing</span> 73 results
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
                      <Icon icon="lucide:layout-grid" />
                    </Link>
                    <Link href="/listings/list-cars" className="text-xl text-default-700 px-2 py-0">
                      <Icon icon="lucide:list" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <DoctorsGrid />
            <Pagination />
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Page
