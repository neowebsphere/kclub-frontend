import Footer from '@/components/footer/Footer'
import Topbar from '@/components/topbar'
import { Plus } from 'lucide-react'
import { Metadata } from 'next'
import CTA from './components/CTA'
import Feature from './components/Feature'
import Hero from './components/Hero'
import Principle from './components/Principle'
import Story from './components/Story'
import Team from './components/Team'
import Testimonial from './components/Testimonial'
import TopPartner from './components/TopPartner'

export const metadata: Metadata = { title: 'About V2' }

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
            <span className="ms-1 lg:block hidden">Pro Network</span>
          </>
        }
        ButtonIcon={<Plus className="size-4.5 me-2" />}
      />
      <Hero />
      <Feature />
      <Principle />
      <Story />
      <Testimonial />
      <Team />
      <CTA />
      <TopPartner />
      <Footer />
    </>
  )
}

export default Page
