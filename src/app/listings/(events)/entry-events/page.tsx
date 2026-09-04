import Topbar from '@/components/topbar'
import Footer from './components/Footer'
import Concert from './components/Concert'
import SportEvent from './components/SportEvent'
import PopularNearYou from './components/PopularNearYou'

const Page = () => {
  return (
    <>
      <Topbar className="bg-white shadow-sm dark:bg-[#121519]" showSignInButton showSignIn={false} ButtonClassName="rounded-md" />
      <Concert />
      <SportEvent />
      <PopularNearYou />
      <Footer />
    </>
  )
}

export default Page
