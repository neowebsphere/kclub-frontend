'use client'
import Topbar from '@/components/topbar'
import Icon from '@/components/wrappers/Icon'
import { Plus } from 'lucide-react'
import { useState } from 'react'
import Footer from '../components/Footer'
import SideBar from '../components/SideBar'
import Breadcrumb from './components/Breadcrumb'
import Filter from './components/Filter'
import FilterBlog from './components/FilterBlog'

const Page = () => {
  const [priceRange, setPriceRange] = useState([10000, 2000000])

  return (
    <>
      <Topbar className="bg-white shadow-sm dark:bg-[#121519]" showSignIn ButtonText="Sell car" ButtonClassName="rounded-md" ButtonIcon={<Plus className="size-4 me-2" />} />
      <section className="lg:mt-20 mt-15 pt-6 md:pb-12 mb-6">
        <div className="container">
          <Breadcrumb />
          <Filter />
          <div className="grid lg:grid-cols-12 grid-cols-1 md:gap-6 md:pt-4 pb-12">
            <SideBar priceRange={priceRange} setPriceRange={setPriceRange} />

            <FilterBlog priceRange={priceRange} />
          </div>
        </div>
      </section>

      <div className="lg:hidden text-center fixed lg:z-0 z-20 bottom-0 inset-x-0">
        <button
          type="button"
          className="pt-3.5 px-4.5 pb-4.5 w-full inline-flex justify-center items-center text-start bg-default-900 text-body-bg font-medium align-middle hover:bg-default-950 focus:outline-hidden"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="filterSidebar"
          aria-label="Toggle navigation"
          data-hs-overlay="#filterSidebar"
        >
          <Icon icon="columns-2" className="me-2 text-body-bg" /> Filters
        </button>
      </div>

      <Footer />
    </>
  )
}

export default Page
