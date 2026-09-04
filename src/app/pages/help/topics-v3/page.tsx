import Topbar from '@/components/topbar'
import { UserRound } from 'lucide-react'
import CTA from './components/CTA'
import Faq from './components/Faq'
import Footer from './components/Footer'
import Guides from './components/Guides'
import Hero from './components/Hero'
import Topic from './components/Topic'

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
      <Topic />
      <Guides />
      <Faq />
      <CTA />
      <Footer />
    </>
  )
}

export default Page
