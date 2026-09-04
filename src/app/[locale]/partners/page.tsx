import Topbar from '@/components/topbar'
import { Plus } from 'lucide-react'
import Footer from './components/Footer'
import Breadcrumb from './components/Breadcrumb'
import PartnerListing from './components/PartnerListing'
import SideBar from './components/SideBar'
import { setRequestLocale } from 'next-intl/server'

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
      <section className="lg:mt-20 mt-15 pt-6 pb-8 mb-6">
        <div className="container">
          <Breadcrumb />
          <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-6 lg:pb-12">
            <SideBar />
            <PartnerListing />
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Page
