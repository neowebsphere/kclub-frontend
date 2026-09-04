import Topbar from '@/components/topbar'
import Footer from './components/Footer'
import Pricing from './components/Pricing'
import Service from './components/Service'

const Page = () => {
  return (
    <>
      <Topbar className="bg-white shadow-sm dark:bg-[#121519]" ShowUser />
      <section className="md:mt-20 mt-10 pt-6 pb-12 lg:pt-10 lg:pb-50">
        <div className="container">
          <h1 className="text-default-900 font-semibold lg:text-4.5xl md:text-3.5xl text-2xl mb-6 pt-4">Effective promotion of your ad</h1>
          <p>We have created a special offer for your business to make promotion on Finder convenient and effective.</p>
          <Pricing />
          <h2 className="pt-12 lg:mt-1 md:mb-4 lg:mb-4 text-3.5xl font-semibold text-default-900">Other services</h2>
          <Service />
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Page
