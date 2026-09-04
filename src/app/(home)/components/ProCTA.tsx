import become from '@/assets/img/home/contractors/become-pro-cta.jpg'
import { Icon } from "@iconify/react"
import Image from "next/image"
import Link from 'next/link'

const ProCTA = () => {
  return (
    <>
      <section className="relative bg-info lg:py-48 md:py-16 py-12">
        <div className="container">
          <div className="lg:w-md md:w-50 w-full lg:py-12">
            <h2 className="lg:text-3.5xl md:text-2.5xl text-2xl md:text-start text-center text-white font-semibold mb-8">Grow your business with us. Become a Pro today</h2>
            <div className="flex gap-4 flex-wrap items-center">
              <Link href="/add-listing/location" className="py-3.5 px-6 rounded-md text-white bg-primary transition-all duration-300 hover:bg-primary-hover lg:w-auto w-full flex justify-center items-center gap-2">
                <Icon icon="lucide:plus" className="text-lg" />
                Add business
              </Link>
              <Link href="" className="inline-flex items-center justify-center px-6 py-3 border lg:w-auto w-full border-white text-white rounded-md group">
                <span className="flex items-center gap-2 relative ">
                  <span className="flex items-center gap-2 relative">
                    <span className="relative z-10">Learn more</span>
                    <span className="relative size-4 overflow-hidden">
                      <Icon icon="lucide:chevron-right" className="absolute top-0 start-0 transform transition-transform duration-300 group-hover:-translate-x-full" />
                      <Icon icon="lucide:chevron-right" className="absolute top-0 start-full transform transition-transform duration-300 group-hover:-translate-x-full" />
                    </span>
                  </span>
                </span>
              </Link>
              <div className="absolute z-10 top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center" style={{ width: 164, height: 164 }}>
                <svg className="animate-spin" width={144} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ animationDuration: '22s' }}>
                  <path id="circlePath" fill="none" d="M 10, 50a 40,40 0 1,1 80,0a 40,40 0 1,1 -80,0" />
                  <text fontSize="7.7" fill="#fff" style={{ letterSpacing: '-.05em' }}>
                    <textPath href="#circlePath">Feature your business customers &nbsp; Feature your business customers</textPath>
                  </text>
                </svg>
                <span className="absolute top-0 start-0 w-full h-full border-2 border-white rounded-full" />
                <span className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-full" style={{ width: 87, height: 87 }} />
                <span className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary rounded-full" style={{ width: 30, height: 30 }} />
              </div>
            </div>
          </div>
        </div>
        <Image src={become} className="absolute top-0 end-0 w-1/2 h-full object-cover hidden md:block" alt="Image" />
      </section>
    </>
  )
}

export default ProCTA
