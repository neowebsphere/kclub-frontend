import { Icon } from "@iconify/react"
import hero from '@/assets/img/home/partners/hero.jpeg'
import Image from "next/image"

const Hero = () => {
  return (
    <>
      <section className="relative bg-dark dark overflow-hidden lg:py-18 md:py-4 lg:mt-20 mt-15">
        <div className="container relative z-10 pb-2 py-4 md:py-10">
          <div className="mx-auto py-8 lg:py-12" style={{ maxWidth: 630 }}>
            <h1 className="text-white text-center md:mb-12 mb-8 md:text-4.8xl text-3.5xl lg:text-5.5xl font-bold">Explore top-rated certified pros nearby</h1>
            <form className="bg-white border rounded-xl p-2 mb-6 md:mb-12">
              <div className="flex flex-col md:flex-row gap-3 p-1">
                <div className="flex flex-col sm:flex-row w-full gap-2 sm:gap-3">
                  <div className="relative w-full">
                    <Icon icon="lucide:search" className="size-5 absolute top-1/2 start-0 -translate-y-1/2 text-lg text-default-100 ms-2" />
                    <input type="search" placeholder="What service do you need?" required className="w-full border-0 rounded-none ps-9 py-3 text-lg focus:outline-none" />
                  </div>
                  <hr className="sm:hidden m-0" />
                  <div className="hidden sm:block my-2 w-px bg-default-300" />
                  <div className="relative w-full sm:max-w-[150px]">
                    <Icon icon="lucide:map-pin" className="size-5 absolute top-1/2 start-0 -translate-y-1/2 text-lg text-default-100 ms-2" />
                    <input type="text" placeholder="Zip code" required className="w-full border-0 rounded-none pe-0 ps-9 py-3 text-lg focus:outline-none" />
                  </div>
                </div>
                <button type="submit" className="btn btn-lg btn-primary px-6 py-3.5 font-semibold rounded-md bg-primary text-white hover:bg-primary/90 transition">
                  Search
                </button>
              </div>
            </form>
            <div className="flex flex-wrap justify-center gap-2 pt-2 md:pt-0">
              <button type="button" className="border border-white text-white rounded-full py-2.5 px-5 font-medium text-sm hover:bg-white hover:text-black transition">
                Handyperson
              </button>
              <button type="button" className="border border-white text-white rounded-full py-2.5 px-5 font-medium text-sm hover:bg-white hover:text-black transition">
                Electrician
              </button>
              <button type="button" className="border border-white text-white rounded-full py-2.5 px-5 font-medium text-sm hover:bg-white hover:text-black transition">
                Plumbing
              </button>
              <button type="button" className="border border-white text-white rounded-full py-2.5 px-5 font-medium text-sm hover:bg-white hover:text-black transition">
                Landscaping
              </button>
              <button type="button" className="border border-white text-white rounded-full py-2.5 px-5 font-medium text-sm hover:bg-white hover:text-black transition">
                Roofing
              </button>
            </div>
          </div>
        </div>
        <Image src={hero} alt="" fill priority sizes="100vw" className="object-cover object-center" />

        {/* Scrim: the photo burns out to near-white at the sunrise, and the heading above it is white */}
        <div className="absolute inset-0 bg-black/45" />
      </section>
    </>
  )
}

export default Hero
