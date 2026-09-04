import Topbar from '@/components/topbar'
import { Plus } from 'lucide-react'
import { Metadata } from 'next'
import Category from './components/Category'
import CTA from './components/CTA'
import ExpertAdvice from './components/ExpertAdvice'
import Footer from './components/Footer'
import Hero from './components/Hero'
import HomeProject from './components/HomeProject'
import PopularProject from './components/PopularProject'
import Pricing from './components/Pricing'
import ProCTA from './components/ProCTA'
import Work from './components/Work'
import { setRequestLocale } from 'next-intl/server'

export const metadata: Metadata = { title: 'Index' }

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
            <span className="lg:block hidden ms-1">Pro Network</span>
          </>
        }
        ButtonIcon={<Plus className="size-4 me-2" />}
      />
      <Hero />
      <Category />
      <PopularProject />
      <HomeProject />
      <ExpertAdvice />
      <Work />
      <ProCTA />
      <CTA />
      <Pricing />
      <Footer />
    </>
  )
}

export default Page
