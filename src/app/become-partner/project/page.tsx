import Topbar from '@/components/topbar'
import Footer from '../components/Footer'
import NavigationStep from '../components/NavigationStep'
import Project from './components/Project'

const Page = () => {
  return (
    <>
      <Topbar className="bg-white shadow-sm dark:bg-[#121519]" ShowUser />
      <NavigationStep />
      <Project />
      <Footer />
    </>
  )
}

export default Page
