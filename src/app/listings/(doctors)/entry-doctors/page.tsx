import Topbar from '@/components/topbar'
import { Icon } from '@iconify/react'
import { UserRound } from 'lucide-react'
import Footer from '../components/Footer'
import About from './components/About'
import Appointment from './components/Appointment'
import Breadcrumb from './components/Breadcrumb'
import NearbyDoctor from './components/NearbyDoctor'
import Review from './components/Review'

const Page = () => {
  return (
    <>
      <Topbar
        className="bg-white shadow-sm dark:bg-[#121519]"
        ButtonClassName="text-nowrap rounded-md"
        showLogIn
        ButtonText="Sign up"
        ButtonIcon={
          <div>
            <UserRound className="size-4 me-2" />
          </div>
        }
      />

      <section className="bg-default-100 dark:bg-white/3 lg:pt-25 pt-22 pb-14">
        <div className="container">
          <Breadcrumb />
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
            <div className="lg:col-span-2 col-span-1">
              <div className="flex flex-col gap-6">
                <About />
                <Review />
              </div>
            </div>

            <Appointment />
          </div>
          <NearbyDoctor />
        </div>
      </section>
      <div className="lg:hidden text-center fixed lg:z-0 z-20 bottom-0 inset-x-0">
        <button
          type="button"
          className="pt-3.5 px-4.5 pb-4.5 w-full inline-flex justify-center items-center text-start bg-default-900 text-body-bg font-medium align-middle hover:bg-default-950 focus:outline-hidden"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="bookAppointment"
          aria-label="Toggle navigation"
          data-hs-overlay="#bookAppointment"
        >
          <Icon icon="lucide:clock" className="me-2 text-body-bg" /> Book appointment
        </button>
      </div>

      <Footer />
    </>
  )
}

export default Page
