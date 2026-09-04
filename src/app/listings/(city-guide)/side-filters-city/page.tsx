'use client'
import Topbar from '@/components/topbar'
import Icon from '@/components/wrappers/Icon'
import { Plus } from 'lucide-react'
import { useState } from 'react'
import Footer from '../components/Footer'
import Blog from './components/Blog'
import Breadcrumb from './components/Breadcrumb'
import FilterCity from './components/FilterCity'
import ListingToolbar from './components/ListingToolbar'
import Pagination from './components/Pagination'

const Page = () => {
  const [priceRange, setPriceRange] = useState([5, 150])
  return (
    <>
      <Topbar
        className="bg-white shadow-sm dark:bg-[#121519]"
        showSignIn
        ButtonClassName="rounded-full"
        ButtonText={
          <>
            Add
            <span className="lg:block hidden ms-1">business</span>
          </>
        }
        ButtonIcon={<Plus className="size-4.5 me-2" />}
      />

      <section className="lg:pt-25 pt-22 pb-14">
        <div className="container">
          <Breadcrumb />
          <div className="grid lg:grid-cols-4 grid-cols-1 gap-6 md:pb-12">
            <div className="lg:col-span-1 pe-6">
              <FilterCity priceRange={priceRange} setPriceRange={setPriceRange} />
            </div>
            <div className="lg:col-span-3 col-span-1">
              <ListingToolbar />
              <Blog priceRange={priceRange} />
              <Pagination />
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <div className="lg:hidden text-center fixed lg:z-0 z-20 bottom-0 inset-x-0">
        <button
          type="button"
          className="pt-3.5 px-4.5 pb-4.5 w-full inline-flex justify-center items-center text-start bg-default-900 text-body-bg font-medium align-middle hover:bg-default-950 focus:outline-hidden"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="accountSidebar"
          aria-label="Toggle navigation"
          data-hs-overlay="#accountSidebar"
        >
          <Icon icon="columns-2" className="me-2 text-body-bg" /> Filters
        </button>
      </div>
    </>
  )
}

export default Page
