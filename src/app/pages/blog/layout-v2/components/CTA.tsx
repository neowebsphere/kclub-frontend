import cta2 from '@/assets/img/blog/v2/cta.png'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const CTA = () => {
  return (
    <>
      <section className="lg:py-12 mb-12 mt-2">
        <div className="container">
          <div className="my-12 py-2 lg:pe-12 lg:ps-8 bg-default-100 rounded-md grid md:grid-cols-12 grid-cols-1 items-center">
            <div className="md:col-span-5 col-span-1 md:py-12 pt-12 pb-6 lg:ps-12 ps-6 pe-6 md:ms-2">
              <div className="md:text-start text-center">
                <h2 className="pb-1 mb-2 lg:text-3.5xl md:text-2.5xl text-2xl font-semibold text-default-900">Need a car?</h2>
                <p className="mb-4 pb-4">Let's find the perfect car for your needs.</p>
                <Link href="/listings/grid-cars" className="py-3.5 px-6 inline-flex justify-center items-center rounded-md text-white bg-primary transition-all duration-300 hover:bg-primary-hover font-semibold">
                  Go to shop
                  <ChevronRight className="size-4.5 ms-1" />
                </Link>
              </div>
            </div>
            <div className="md:col-span-7 col-span-1 lg:-mb-7">
              <Image src={cta2} className="w-168" alt="Image" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CTA
