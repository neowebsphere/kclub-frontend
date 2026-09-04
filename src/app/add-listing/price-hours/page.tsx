import Topbar from '@/components/topbar'
import Footer from '../components/Footer'
import NavigationStep from '../components/NavigationStep'
import AddPayment from './components/AddPayment'
import PaymentMethod from './components/PaymentMethod'

const Page = () => {
  return (
    <>
      <Topbar className="bg-white shadow-sm dark:bg-[#121519]" ShowUser />
      <NavigationStep />
      <PaymentMethod />
      <Footer />
      <AddPayment />
    </>
  )
}

export default Page
