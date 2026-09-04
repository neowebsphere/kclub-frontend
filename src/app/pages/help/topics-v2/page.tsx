import Topbar from '@/components/topbar'
import { Icon } from '@iconify/react'
import { Plus } from 'lucide-react'
import Blog from './components/Blog'
import Footer from './components/Footer'
import SideBar from './components/SideBar'

const Page = () => {
  return (
    <>
      <Topbar className="bg-white shadow-sm dark:bg-[#121519]" showSignIn ButtonClassName="rounded-md" ButtonText="Sell car" ButtonIcon={<Plus className="size-4 me-2" />} />
      <section className="mt-24 lg:mb-8 py-12">
        <div className="container">
          <div className="grid lg:grid-cols-12 grid-cols-1 lg:pb-12 md:pb-6 pb-0">
            <Blog />
            <SideBar />
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
          <Icon icon="lucide:message-circle-more" className="me-2 text-body-bg" /> Chat
        </button>
      </div>
    </>
  )
}

export default Page
