import Topbar from '@/components/topbar'
import Icon from '@/components/wrappers/Icon'
import SellCar from './components/SellCar'
import SideBar from './components/SideBar'
import Footer from './components/Footer'

const Page = () => {
  return (
    <>
      <Topbar className="bg-white shadow-sm dark:bg-[#121519]" ShowUser />

      <section className="bg-default-100 dark:bg-white/3 md:pt-18 pt-14">
        <div className="container">
          <div className="lg:pt-18 md:pt-14 pt-6 lg:pb-24 md:pb-18 pb-12">
            <div className="grid lg:grid-cols-12 grid-cols-1 gap-6">
              <SellCar />
              <SideBar />
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <div className="lg:hidden text-center fixed lg:z-0 z-20 bottom-0 inset-x-0">
        <button
          type="button"
          className="pt-3.5 px-4.5 pb-4.5 w-full inline-flex justify-center items-center text-start bg-default-900 text-body-bg font-medium align-middle hover:bg-default-950 focus:outline-hidden"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="quickPreview"
          aria-label="Toggle navigation"
          data-hs-overlay="#quickPreview"
        >
          <Icon icon="eye" className="me-2 text-body-bg" /> Quick preview
        </button>
      </div>
    </>
  )
}

export default Page
