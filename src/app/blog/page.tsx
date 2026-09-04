import Topbar from '@/components/topbar'
import Icon from '@/components/wrappers/Icon'
import { UserRound } from 'lucide-react'
import { Metadata } from 'next'
import Blog from './components/Blog'
import CategoryBlog from './components/CategoryBlog'
import CTA from './components/CTA'
import Footer from './components/Footer'
import SideBar from './components/SideBar'

export const metadata: Metadata = { title: 'Blog Layout V4' }

const Page = () => {
  return (
    <>
      <Topbar
        className="bg-white shadow-sm dark:bg-[#121519]"
        showLogIn
        ButtonText="Sign up"
        ButtonIcon={
          <div>
            <UserRound className="size-4 me-2" />
          </div>
        }
        ButtonClassName="rounded-md text-nowrap"
      />
      <Blog />
      <section className="md:py-12 py-6 mt-6">
        <div className="container">
          <div className="grid lg:grid-cols-12 grid-cols-1 gap-6 lg:pb-12 mb-6">
            <CategoryBlog />
            <SideBar />
          </div>
        </div>
      </section>
      <CTA />
      <Footer />

      <div className="lg:hidden">
        <button
          type="button"
          className="lg:static fixed w-full start-0 end-0 bottom-0 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-start bg-gray-800 border border-gray-800 text-white text-sm font-medium shadow-2xs align-middle hover:bg-gray-950 focus:outline-hidden focus:bg-gray-900"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="blogSidebar"
          aria-label="Toggle navigation"
          data-hs-overlay="#blogSidebar"
        >
          <Icon icon="columns-2" className="size-4.5" />
          Sidebar
        </button>
      </div>
    </>
  )
}

export default Page
