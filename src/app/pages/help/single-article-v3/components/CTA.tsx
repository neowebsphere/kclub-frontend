import helpv3 from '@/assets/img/help/v3/cta.jpg'
import Image from 'next/image'
import Link from 'next/link'

const CTA = () => {
  return (
    <>
      <section className="lg:py-12 md:pt-6 pt-2 pb-12 lg:my-4">
        <div className="container">
          <div className="lg:mb-12 md:mb-6 bg-info rounded-md grid md:grid-cols-2 grid-cols-1 gap-6">
            <div className="lg:py-6 md:px-3 md:py-2">
              <div className="md:p-12 py-12 px-6 lg:ms-6">
                <h2 className="text-white mb-6 lg:text-3.5xl md:text-2.5xl text-2xl font-semibold md:text-start text-center">Are you a doctor looking for support?</h2>
                <div className="flex md:justify-start justify-center">
                  <Link href="" className="py-3 px-6 text-body-bg rounded-md border border-body-bg font-semibold inline-flex transition-all duration-300 ease-in-out hover:bg-body-bg hover:text-default-900">
                    See docter help
                  </Link>
                </div>
              </div>
            </div>
            <div className="rounded-tr-md rounded-br-md overflow-hidden md:block hidden">
              <Image src={helpv3} className="size-full object-cover" alt="Image" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CTA
