import Topbar from '@/components/topbar'
import { Plus } from 'lucide-react'
import { Metadata } from 'next'
import BestOfBarcelona from './components/BestOfBarcelona'
import CTA from './components/CTA'
import Hero from './components/Hero'
import Offer from './components/Offer'
import PopularActivity from './components/PopularActivity'
import Restaurant from './components/Restaurant'
import UpcomingEvent from './components/UpcomingEvent'
import VacationSpots from './components/VacationSpots'
import WhatsNewBarcelona from './components/WhatsNewBarcelona'
import Footer from './components/Footer'

export const metadata: Metadata = { title: 'Index' }

const Page = () => {
  return (
    <>
      <Topbar
        className="bg-white shadow-sm dark:bg-[#121519]"
        showSignIn
        ButtonClassName="rounded-full"
        ButtonText={
          <>
            Add
            <span className="lg:block hidden ms-1">business</span>
          </>
        }
        ButtonIcon={<Plus className="size-4.5 me-2" />}
      />
      <Hero />
      <VacationSpots />
      <Offer />
      <UpcomingEvent />
      <WhatsNewBarcelona />
      <Restaurant />
      <BestOfBarcelona />
      <PopularActivity />
      <CTA />
      <Footer />
    </>
  )
}

export default Page
