import Topbar from '@/components/topbar'
import Footer from '../components/Footer'
import SideBar from '../components/SideBar'
import PropertyLocation from './components/PropertyLocation'

const Page = () => {
  return (
    <>
      <Topbar className="bg-white shadow-sm dark:bg-[#121519]" ShowUser />
      <section className="md:mt-20 mt-10 pt-6 pb-12 lg:py-12 h-full">
        <div className="container">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 pt-4 pb-12 md:mb-0 mb-6">
            <SideBar />
            <PropertyLocation />
          </div>
        </div>
      </section>
      <Footer className="justify-between" width="28.57%" backButtonLink="/listings/property-type" nextButtonLink="/listings/property-photos" backShow />
    </>
  )
}

export default Page
