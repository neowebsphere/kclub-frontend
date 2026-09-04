import Topbar from '@/components/topbar'
import { Plus } from 'lucide-react'
import { Metadata } from 'next'
import Article from './components/Article'
import Blog from './components/Blog'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Hero from './components/Hero'

export const metadata: Metadata = { title: 'Blog Layout V3' }

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
      <Article />
      <Blog />
      <CTA />
      <Footer />
    </>
  )
}

export default Page
