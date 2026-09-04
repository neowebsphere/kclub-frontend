import Topbar from '@/components/topbar'
import Footer from '../components/Footer'
import NavigationStep from '../components/NavigationStep'
import BussinessLocation from './components/BussinessLocation'

const Page = () => {
  return (
    <>
      <Topbar className="bg-white shadow-sm dark:bg-[#121519]" ShowUser />
      <NavigationStep />
      <BussinessLocation />
      <Footer />
    </>
  )
}

export default Page
