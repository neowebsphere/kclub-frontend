import Footer from '@/components/footer/Footer'
import Topbar from '@/components/topbar'
import { Plus } from 'lucide-react'
import { Metadata } from 'next'
import Blog from './components/Blog'
import CategoryModal from './components/CategoryModal'
import Feature from './components/Feature'

export const metadata: Metadata = { title: 'Blog Layout V1' }

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
      <Feature />
      <Blog />
      <Footer />

      <CategoryModal />
    </>
  )
}

export default Page
