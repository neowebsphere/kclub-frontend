import Topbar from '@/components/topbar'
import { Plus } from 'lucide-react'
import { Metadata } from 'next'
import CompanyLocation from './components/CompanyLocation'
import Hero from './components/Hero'
import Faq from './components/Faq'
import Footer from '@/components/footer/Footer'

export const metadata: Metadata = { title: 'Contact V1' }

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
      <CompanyLocation />
      <Faq />
      <Footer />
    </>
  )
}

export default Page
