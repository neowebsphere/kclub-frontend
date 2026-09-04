import Topbar from '@/components/topbar'
import { UserRound } from 'lucide-react'
import { Metadata } from 'next'
import Contact from './components/Contact'
import Footer from './components/Footer'

export const metadata: Metadata = { title: 'Contact V3' }

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
      <Contact />
      <Footer />
    </>
  )
}

export default Page
