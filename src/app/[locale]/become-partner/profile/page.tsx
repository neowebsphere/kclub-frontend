import Topbar from '@/components/topbar'
import NavigationStep from '../components/NavigationStep'
import ProfileDetail from './components/ProfileDetail'
import Footer from '../components/Footer'
import { setRequestLocale } from 'next-intl/server'

type Props = {
  params: Promise<{ locale: string }>
}

const Page = async ({ params }: Props) => {
  const { locale } = await params

  // Enables static rendering and keeps <Link> on the current locale
  setRequestLocale(locale)

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
