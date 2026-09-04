import Topbar from '@/components/topbar'
import { Plus } from 'lucide-react'
import Footer from '../components/Footer'
import Breadcrumb from './components/Breadcrumb'
import ListingContact from './components/ListingContact'
import ListingGallery from './components/ListingGallery'
import ListingHeader from './components/ListingHeader'
import ListingMeta from './components/ListingMeta'
import ListingOverview from './components/ListingOverview'
import NearbyPlaces from './components/NearbyPlaces'
import Review from './components/Review'

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
      <section className="lg:mt-20 mt-15 pt-6 lg:pb-12 mb-6">
        <div className="container">
          <Breadcrumb />
          <ListingHeader />
          <ListingMeta />
          <ListingContact />
          <ListingGallery />
          <ListingOverview />
        </div>
      </section>
      <section className="md:py-12 pt-8 pb-12 md:my-4">
        <div className="container">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-6 lg:pb-12">
            <Review />
            <NearbyPlaces />
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Page
