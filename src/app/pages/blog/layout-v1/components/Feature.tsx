import feature from '@/assets/img/blog/v1/featured.jpg'
import Image from 'next/image'
import Link from 'next/link'

const Feature = () => {
  return (
    <>
      <section className="py-12 lg:mb-4 lg:mt-10 md:mt-8 mt-4">
        <div className="container">
          <div className="bg-default-100 dark:bg-white/3 rounded-md grid md:grid-cols-2 grid-cols-1">
            <div className="rounded-tl-md md:rounded-bl-md md:rounded-tr-none rounded-tr-md overflow-hidden">
              <Image src={feature} alt="Category image" className="w-full h-full object-cover transition-transform duration-500 rounded-tl-md md:rounded-bl-md md:rounded-tr-none rounded-tr-md hover:scale-110 z-0" />
            </div>
            <div className="md:p-12 p-6">
              <div className="lg:p-12">
                <Link className="mb-4 block text-default-800 hover:text-default-900 uppercase text-xs" href="">
                  Real estate news
                </Link>
                <h1 className="mb-4 text-default-900 font-semibold lg:text-4.5xl md:text-3.5xl text-2.5xl">Top trends shaping modern real estate design</h1>
                <p className="lg:mb-12 md:mb-8 mb-6">Discover the latest trends in contemporary architecture that are transforming modern real estate design today.</p>
                <Link className="text-body-bg bg-default-800 rounded-md py-3.5 px-6 inline-flex items-center font-semibold transition-all duration-300 hover:bg-default-950" href="/pages/blog/single-v1">
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Feature
