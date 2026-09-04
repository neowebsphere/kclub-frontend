import Topbar from '@/components/topbar'
import { UserRound } from 'lucide-react'
import Article from './components/Article'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Icon from '@/components/wrappers/Icon'

const Page = () => {
  return (
    <>
      <Topbar
        className="bg-white shadow-sm dark:bg-[#121519]"
        ButtonClassName="text-nowrap rounded-md"
        showLogIn
        ButtonText="Sign up"
        ButtonIcon={
          <div>
            <UserRound className="size-4 me-2" />
          </div>
        }
      />
      <Hero />
      <Article />
      <CTA />
      <Footer />

      <div className="lg:hidden text-center fixed lg:z-0 z-20 bottom-0 inset-x-0">
        <button
          type="button"
          className="pt-3.5 px-4.5 pb-4.5 w-full inline-flex justify-center items-center text-start bg-default-900 text-body-bg font-medium align-middle hover:bg-default-950 focus:outline-hidden"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="articlesSidebar"
          aria-label="Toggle navigation"
          data-hs-overlay="#articlesSidebar"
        >
          <Icon icon="columns-2" className="me-2 text-body-bg" /> Search and navigation
        </button>
      </div>
    </>
  )
}

export default Page
