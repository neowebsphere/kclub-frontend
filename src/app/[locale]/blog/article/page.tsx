import Topbar from '@/components/topbar'
import Icon from '@/components/wrappers/Icon'
import { UserRound } from 'lucide-react'
import { Metadata } from 'next'
import BlogSingle from './components/BlogSingle'
import CTA from './components/CTA'
import Footer from './components/Footer'
import { setRequestLocale } from 'next-intl/server'

export const metadata: Metadata = { title: 'Blog Single V3' }

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
        showLogIn
        ButtonText="Sign up"
        ButtonIcon={
          <div>
            <UserRound className="size-4 me-2" />
          </div>
        }
        ButtonClassName="rounded-md text-nowrap"
      />
      <BlogSingle />
      <CTA />
      <Footer />
      <div className="lg:hidden text-center fixed lg:z-0 z-20 bottom-0 inset-x-0">
        <button
          type="button"
          className="pt-3.5 px-4.5 pb-4.5 w-full inline-flex justify-center items-center text-start bg-default-900 text-body-bg font-medium align-middle hover:bg-default-950 focus:outline-hidden"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="blogSidebar"
          aria-label="Toggle navigation"
          data-hs-overlay="#blogSidebar"
        >
          <Icon icon="columns-2" className="me-2 text-body-bg" /> Sidebar
        </button>
      </div>
    </>
  )
}

export default Page
