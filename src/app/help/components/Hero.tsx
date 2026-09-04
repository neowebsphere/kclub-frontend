import hero01 from '@/assets/img/help/v1/hero.png'
import { Search } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  return (
    <>
      <section className="mt-20 mb-4 pb-12">
        <div className="container">
          <div className="bg-info rounded-lg">
            <div className="grid md:grid-cols-12 md:gap-6 lg:items-center items-end">
              <div className="md:col-span-7 md:py-12 lg:ps-0 md:ps-12 pt-12 px-6 pb-4">
                <div className="lg:w-159 w-full ms-auto">
                  <h1 className="text-white font-bold lg:text-4.8xl md:text-3.5xl text-3xl mb-6 md:text-start text-center">How can we help you?</h1>
                  <div className="bg-white border rounded-md p-2">
                    <form className="flex flex-col md:flex-row gap-2 p-1">
                      <div className="relative w-full">
                        <Search className="absolute start-2 top-1/2 -translate-y-1/2 text-default-500 size-5" />
                        <input type="search" placeholder="What do you need help with?" className="w-full ps-10 pe-3 py-3 text-base border-0 focus:ring-0 rounded-none" />
                      </div>
                      <button type="submit" className="px-6 py-3.5 font-medium text-white bg-primary hover:bg-primary-hover rounded-md">
                        Search
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="md:col-span-5 lg:ps-0 md:ps-14">
                <div className="lg:w-104 md:w-auto w-55 mx-auto lg:ms-auto">
                  <Image src={hero01} alt="Image" className="lg:w-104 md:w-auto w-55" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
