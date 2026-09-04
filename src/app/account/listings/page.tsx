import Footer from '@/components/footer/Footer'
import Topbar from '@/components/topbar'
import { Plus } from 'lucide-react'
import SideBar from '../components/SideBar'
import AccountListings from './components/AccountListings'

const Page = () => {
  return (
    <>
      <Topbar
        className="bg-white shadow-sm dark:bg-[#121519]"
        ShowUser
        ButtonClassName="text-nowrap rounded-md"
        ButtonIcon={<Plus className="size-4.5 me-2" />}
        ButtonText={
          <>
            Add
            <span className="ms-1 lg:block hidden">Property</span>
          </>
        }
      />

      <section className="pt-24 pb-12 lg:mb-4 lg:mt-10">
        <div className="container">
          <div className="grid lg:grid-cols-12 grid-cols-1 gap-6 lg:pb-12 md:pb-8">
            <div className="lg:col-span-3 pe-6 lg:block hidden pe-6">
              <SideBar />
            </div>
            <AccountListings />
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Page
