import Topbar from '@/components/topbar'
import Footer from '../components/Footer'
import NavigationStep from '../components/NavigationStep'
import AddPayment from './components/AddPayment'
import PaymentMethod from './components/PaymentMethod'
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
      <PaymentMethod />
      <Footer />
      <AddPayment />
    </>
  )
}

export default Page
