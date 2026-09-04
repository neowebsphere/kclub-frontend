import avatar from '@/assets/img/account/avatar-lg.jpg'
import { Icon } from '@iconify/react'
import { Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const VendorDetail = () => {
  return (
    <>
      <section className="relative z-10">
        <div className="-mt-32" />
        <div className="container">
          <div className="bg-body-bg border border-border rounded-md md:py-6 lg:px-12 p-6">
            <div className="lg:py-4 md:py-2 flex flex-col gap-6">
              <div className="md:flex justify-between lg:pb-1 mb-0 md:mb-2">
                <div className="flex items-start md:items-center mb-3 md:mb-0">
                  <div>
                    <div className="lg:size-31.5 md:size-20 size-18.25 border border-border rounded-full overflow-hidden">
                      <Image src={avatar} alt="Avatar" className="object-cover lg:size-31.5 md:size-20 size-18.25" />
                    </div>
                  </div>
                  <div className="ps-4 lg:ps-6 lg:ms-2 lg:w-full w-70">
                    <div className="bg-info mb-2 text-white text-xs inline-flex item-center font-medium px-2 py-1 rounded items-center">
                      Verified <Icon icon="lucide:shield" className="ms-1" />
                    </div>
                    <h1 className="lg:text-2xl text-xl text-default-900 font-semibold md:py-1 mb-2">Michael Williams</h1>
                    <ul className="flex flex-wrap items-center gap-2 text-sm">
                      <li className="me-2 text-secondary">New York, Brooklyn</li>
                      <li>
                        <Link href="" className="flex items-center text-default-700 hover:underline">
                          <Icon icon="lucide:link" className="text-base me-1" />
                          <span className="font-medium">Imperial Property Agency</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="md:ps-4 lg:text-end">
                  <div className="flex flex-col sm:flex-row gap-2 md:mb-4">
                    <Link href="tel:2125557890" className="btn bg-default-800 hover:bg-default-900 text-body-bg px-4 py-2 rounded-lg text-sm inline-flex items-center justify-center transition-all duration-300 ease-in-out">
                      <Icon icon="lucide:phone" className="text-base -ms-1 me-2" />
                      (212)&nbsp;555-7890
                    </Link>
                    <Link href="mailto:m.williams@example.com" className="border border-border hover:border-default-900 text-default-800 text-sm px-4 py-2 rounded-lg inline-flex items-center justify-center">
                      <Icon icon="lucide:mail" className="text-base -ms-1 me-2" />
                      Send email
                    </Link>
                  </div>
                  <div className="hidden md:block text-xs">Last visited 2 hours ago</div>
                </div>
              </div>
              <p className="md:mb-4">
                Extensive experience in rentals and a vast database means I can quickly find the options that are right for you. Looking for a seamless and exciting rental experience? Contact me today - I promise it won't be boring! Your perfect home is just a call away.
              </p>
              <div className="grid md:grid-cols-4 grid-cols-2 gap-6">
                <div>
                  <h5 className="mb-2 text-xl font-semibold text-default-900">3 years</h5>
                  <p className="text-sm">Works with Finder</p>
                </div>
                <div>
                  <h5 className="mb-2 text-xl font-semibold text-default-900">26</h5>
                  <p className="text-sm">Properties published</p>
                </div>
                <div>
                  <h5 className="mb-2 text-xl font-semibold text-default-900">12</h5>
                  <p className="text-sm">Properties sold</p>
                </div>
                <div>
                  <h5 className="mb-2 text-xl font-semibold text-default-900 flex items-center">
                    <Star className="size-5 fill-warning text-warning me-2" />
                    4.9
                  </h5>
                  <p className="text-sm">Finder overall rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default VendorDetail
