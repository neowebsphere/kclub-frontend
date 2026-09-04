import Footer from '@/components/footer/Footer'
import Topbar from '@/components/topbar'
import { Plus } from 'lucide-react'
import Breadcrumb from './components/Breadcrumb'
import Detail from './components/Detail'
import Gallery from './components/Gallery'

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
      <section className="lg:mt-20 mt-15 pt-6 pb-16">
        <div className="container">
          <Breadcrumb />
          <Gallery />
          <Detail />
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Page
