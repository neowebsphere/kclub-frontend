import Topbar from '@/components/topbar'
import NavigationStep from '../components/NavigationStep'
import Service from './components/Service'
import Footer from '../components/Footer'

const Page = () => {
  return (
    <>
      <Topbar className="bg-white shadow-sm dark:bg-[#121519]" ShowUser />
      <NavigationStep />
      <Service />
      <Footer />
    </>
  )
}

export default Page
