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
import { setRequestLocale } from 'next-intl/server'

export const metadata: Metadata = { title: 'About V2' }

type Props = {
  params: Promise<{ locale: string }>
}

const Page = async ({ params }: Props) => {
  const { locale } = await params

  // Enables static rendering and keeps <Link> on the current locale
  setRequestLocale(locale)

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
