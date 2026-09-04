import Topbar from '@/components/topbar'
import { Plus } from 'lucide-react'
import { Metadata } from 'next'
import Contact from './components/Contact'
import Hero from './components/Hero'
import ContactForm from './components/ContactForm'
import ParterLogo from './components/ParterLogo'
import Footer from './components/Footer'
import { setRequestLocale } from 'next-intl/server'

export const metadata: Metadata = { title: 'Contact V2' }

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
      <Contact />
      <ContactForm />
      <ParterLogo />
      <Footer />
    </>
  )
}

export default Page
