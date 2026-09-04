import Footer from '@/components/footer/Footer'
import Topbar from '@/components/topbar'
import { Plus } from 'lucide-react'
import Faq from './components/Faq'
import Hero from './components/Hero'
import PopularArticle from './components/PopularArticle'
import Topic from './components/Topic'

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
      <Topic />
      <PopularArticle />
      <Faq />
      <Footer />
    </>
  )
}

export default Page
