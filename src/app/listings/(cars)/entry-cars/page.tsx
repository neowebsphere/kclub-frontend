import Topbar from '@/components/topbar'
import { Plus } from 'lucide-react'
import Footer from '../components/Footer'
import Blog from './components/Blog'
import Breadcrumb from './components/Breadcrumb'
import CarDetail from './components/CarDetail'
import Hero from './components/Hero'

const Page = () => {
  return (
    <>
      <Topbar className="bg-white shadow-sm dark:bg-[#121519]" showSignIn ButtonText="Sell car" ButtonClassName="rounded-md" ButtonIcon={<Plus className="size-4 me-2" />} />
      <section className="lg:mt-20 mt-15 pt-6 md:pb-12 mb-6">
        <div className="container">
          <Breadcrumb />
          <Hero />
          <CarDetail />
        </div>
      </section>
      <Blog />

      <Footer />
    </>
  )
}

export default Page
