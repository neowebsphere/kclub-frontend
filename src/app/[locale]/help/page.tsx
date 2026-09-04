import Footer from '@/components/footer/Footer'
import Topbar from '@/components/topbar'
import { Plus } from 'lucide-react'
import Faq from './components/Faq'
import HelpTopic from './components/HelpTopic'
import Hero from './components/Hero'
import PopularArticle from './components/PopularArticle'
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
            Add
            <span className="lg:block hidden ms-1">property</span>
          </>
        }
        ButtonIcon={<Plus className="size-4 me-2" />}
      />
      <Hero />
      <HelpTopic />
      <PopularArticle />
      <Faq />
      <Footer />
    </>
  )
}

export default Page
