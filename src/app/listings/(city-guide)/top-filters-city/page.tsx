import Topbar from '@/components/topbar'
import { Plus } from 'lucide-react'
import Footer from '../components/Footer'
import ActiveFilter from './components/ActiveFilter'
import Breadcrumb from './components/Breadcrumb'
import FilterOffcanvas from './components/FilterOffcanvas'
import ListingToolbar from './components/ListingToolbar'
import Pagination from './components/Pagination'
import PropertyGrid from './components/PropertyGrid'
import SearchFilter from './components/SearchFilter'

const Page = () => {
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
          <SearchFilter />
          <ActiveFilter />
          <ListingToolbar />
          <PropertyGrid />
          <Pagination />
        </div>
      </section>
      <Footer />
      <FilterOffcanvas />
    </>
  )
}

export default Page
