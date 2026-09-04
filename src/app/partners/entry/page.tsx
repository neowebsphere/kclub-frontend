import Topbar from '@/components/topbar'
import Icon from '@/components/wrappers/Icon'
import { Plus } from 'lucide-react'
import Footer from '../components/Footer'
import About from './components/About'
import Breadcrumb from './components/Breadcrumb'
import Hero from './components/Hero'
import SideBar from './components/SideBar'

const Page = () => {
  return (
    <>
      <Topbar
        className="bg-white shadow-sm dark:bg-[#121519]"
        showSignIn
        ButtonClassName="rounded-md"
        ButtonText={
          <>
            Join
            <span className="lg:block hidden ms-1">Pro Network</span>
          </>
        }
        ButtonIcon={<Plus className="size-4 me-2" />}
      />
      <section className="lg:mt-20 mt-15 pt-6 pb-12 mb-6">
        <div className="container">
          <Breadcrumb />
          <Hero />
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
            <About />
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
          aria-controls="contactForm"
          aria-label="Toggle navigation"
          data-hs-overlay="#contactForm"
        >
          <Icon icon="mail-2" className="me-2 text-body-bg" /> Connect
        </button>
      </div>
    </>
  )
}

export default Page
