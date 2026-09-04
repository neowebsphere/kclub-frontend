import Topbar from '@/components/topbar'
import { Metadata } from 'next'
import Category from './components/Category'
import Event from './components/Event'
import EventFilter from './components/EventFilter'
import Hero from './components/Hero'
import MusicDanceEvents from './components/MusicDanceEvents'
import Sport from './components/Sport'
import Upcoming from './components/Upcoming'
import Feature from './components/Feature'
import CTA from './components/CTA'
import Footer from './components/Footer'

export const metadata: Metadata = { title: 'Index' }

const Page = () => {
  return (
    <>
      <Topbar className="bg-white shadow-sm dark:bg-[#121519]" showSignInButton showSignIn={false} ButtonClassName='rounded-md' />
      <Hero />
      <Category />
      <Upcoming />
      <Event />
      <EventFilter />
      <Sport />
      <MusicDanceEvents />
      <Feature />
      <CTA />
      <Footer />
    </>
  )
}

export default Page
