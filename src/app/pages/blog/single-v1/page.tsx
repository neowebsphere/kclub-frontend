import Footer from '@/components/footer/Footer'
import Topbar from '@/components/topbar'
import { Plus } from 'lucide-react'
import { Metadata } from 'next'
import Blog from './components/Blog'
import Breadcrumb from './components/Breadcrumb'
import Post from './components/Post'
import SideBar from './components/SideBar'
import Icon from '@/components/wrappers/Icon'

export const metadata: Metadata = { title: 'Blog Single V1' }

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
      <section className="lg:mt-20 mt-15 pt-6 md:pb-12 mb-6">
        <div className="container">
          <Breadcrumb />
          <div className="grid lg:grid-cols-12 grid-cols-1 gap-6">
            <Post />
            <SideBar />
          </div>
        </div>
      </section>
      <Blog />
      <Footer />

      <div className="lg:hidden text-center fixed lg:z-0 z-20 bottom-0 inset-x-0">
        <button
          type="button"
          className="pt-3.5 px-4.5 pb-4.5 w-full inline-flex justify-center items-center text-start bg-default-900 text-body-bg font-medium align-middle hover:bg-default-950 focus:outline-hidden"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="blogSidebar"
          aria-label="Toggle navigation"
          data-hs-overlay="#blogSidebar"
        >
          <Icon icon="columns-2" className="me-2 text-body-bg" /> Sidebar
        </button>
      </div>
    </>
  )
}

export default Page
