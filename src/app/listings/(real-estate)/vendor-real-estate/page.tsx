import Topbar from '@/components/topbar'
import { Plus } from 'lucide-react'
import Hero from './components/Hero'
import VendorDetail from './components/VendorDetail'
import Blog from './components/Blog'
import Reviews from './components/Reviews'
import Footer from '@/components/footer/Footer'

const Page = () => {
  return (
    <>
      <Topbar
        className="bg-white shadow-sm dark:bg-[#121519]"
        showSignIn
        ButtonClassName="rounded-md"
        ButtonText={
          <>
            Add
            <span className="lg:block hidden ms-1">property</span>
          </>
        }
        ButtonIcon={<Plus className="size-4 me-2" />}
      />
      <Hero />
      <VendorDetail />
      <Blog />
      <Reviews />
      <Footer />
    </>
  )
}

export default Page
