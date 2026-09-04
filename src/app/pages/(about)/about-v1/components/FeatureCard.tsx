import feature01 from '@/assets/img/about/v1/feature01.jpg'
import feature02 from '@/assets/img/about/v1/feature02.jpg'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'

const FeatureCard = () => {
  return (
    <>
      <section className="lg:py-12 md:pt-6 pt-4 pb-12 lg:my-4">
        <div className="container">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
            <div className="lg:col-span-8 md:col-span-7 col-span-1 group cursor-pointer">
              <div className="w-full h-full overflow-hidden relative rounded-md">
                <Image src={feature01} alt="Image" className="w-full md:h-full h-74 object-cover transition-transform duration-500 group-hover:scale-110 z-0" />
                <span className="absolute inset-0 bg-gradient-to-t from-neutral-800/75 via-neutral-800/20 " />
                <div className="absolute inset-0 flex items-end lg:p-8 p-6">
                  <div className="flex flex-col md:flex-row md:items-end justify-between lg:gap-12 gap-8">
                    <div>
                      <h3 className="text-white lg:text-2.5xl text-2xl font-semibold mb-2 pb-1">
                        <Link href="" className="relative text-white font-semibold after:absolute after:bottom-0 after:start-0 after:w-full after:opacity-0 group-hover:after:opacity-100 after:h-0.25 after:bg-current hover:after:w-full after:transition-all after:duration-100">
                          Connect with potential clients
                        </Link>
                      </h3>
                      <p className="text-white/90">Respond promptly to inquiries and schedule viewings to turn leads into satisfied customers.</p>
                    </div>
                    <div>
                      <Link href="https://www.youtube.com/watch?v=Y39P5BQElNY" className="dark w-auto inline-flex text-nowrap text-sm items-center px-5 py-2.5 rounded-full bg-white text-default-100 font-medium shadow hover:bg-white/95 transition">
                        <Icon icon="lucide:play" className="text-base me-1" />
                        Watch video
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 md:col-span-5 col-span-1 group cursor-pointer">
              <div className="w-full h-full overflow-hidden relative rounded-md">
                <Image src={feature02} alt="Image" className="w-full md:h-full h-74 object-cover transition-transform duration-500 group-hover:scale-110 z-0" />
                <span className="absolute inset-0 bg-gradient-to-t from-neutral-800/75 via-neutral-800/20 " />
                <div className="absolute inset-0 flex items-end lg:p-8 p-6">
                  <div>
                    <h3 className="text-white lg:text-2.5xl text-2xl font-semibold mb-2 pb-1">
                      <Link href="" className="relative text-white font-semibold after:absolute after:bottom-0 after:start-0 after:w-full after:opacity-0 group-hover:after:opacity-100 after:h-0.25 after:bg-current hover:after:w-full after:transition-all after:duration-100">
                        Monitor engagement
                      </Link>
                    </h3>
                    <p className="text-white/90">Track and inquiries to see which properties attract the most interest.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FeatureCard
