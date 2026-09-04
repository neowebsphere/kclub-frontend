import featured from '@/assets/img/blog/v3/featured.jpg'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <>
      <section className="lg:mt-15 mt-10 pt-6 md:mb-6 relative">
        <div className="grid md:grid-cols-2 grid-cols-1 bg-info items-center">
          <div className="lg:w-111.5 md:w-80 w-80 mx-auto my-12">
            <h2 className="text-white mb-4 pb-4 font-semibold lg:text-3.5xl md:text-2.5xl text-2xl ">DIY guide to fixing common power tool issues</h2>
            <Link href="" className="border border-white py-3.5 px-6 rounded-md text-white font-semibold text-base inline-flex items-center">
              Read More
              <Icon icon="lucide:chevron-right" className="text-lg" />
            </Link>
          </div>
          <div>
            <div className="col-span-1 md:block hidden">
              <Image src={featured} className="w-full h-full object-cover" alt="Image" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
