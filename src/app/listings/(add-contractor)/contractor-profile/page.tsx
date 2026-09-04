import Topbar from '@/components/topbar'
import NavigationStep from '../components/NavigationStep'
import ProfileDetail from './components/ProfileDetail'
import Footer from '../components/Footer'

const Page = () => {
  return (
    <>
      <Topbar className="bg-white shadow-sm dark:bg-[#121519]" ShowUser />
      <NavigationStep />
      <ProfileDetail />
      <Footer />
    </>
  )
}

export default Page
