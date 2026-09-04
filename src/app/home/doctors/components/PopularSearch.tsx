import searcheslight from '@/assets/img/home/doctors/popular-searches-light.png'
import searchesdark from '@/assets/img/home/doctors/popular-searches-dark.png'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import Link from 'next/link'

const PopularSearch = () => {
  return (
    <>
      <section className="lg:py-30 md:py-18 py-12">
        <div className="container">
          <div className="grid lg:grid-cols-3 md:grid-cols-1 lg:gap-6">
            <div className="col-span-1">
              <div>
                <h2 className="text-default-900 lg:text-4.5xl md:text-3.5xl text-2.5xl font-semibold pb-5">
                  Popular <br className="hidden lg:block" /> searches
                </h2>
                <div className="mt-12 lg:block hidden">
                  <Image src={searcheslight} className="block dark:hidden rounded-xl" alt="Image" />
                  <Image src={searchesdark} className="hidden dark:block rounded-xl" alt="Image" />
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 col-span-1">
              <div className="lg:w-3xl w-full lg:ms-auto">
                <div className="grid md:grid-cols-3 grid-cols-1 gap-6 lg:mb-12 mb-8">
                  <div className="col-span-1">
                    <div className="md:block flex justify-between items-center">
                      <h3 className="md:mb-4 lg:text-2.5xl md:text-2xl text-xl text-default-900 font-semibold">Specialties</h3>
                      <div className="inline-flex items-center gap-2 ">
                        <Link href="" className="hover:underline text-sm py-2 flex items-center text-nowrap me-1 font-semibold">
                          View all
                          <Icon icon="lucide:chevron-right" className="text-lg" />
                        </Link>
                      </div>
                    </div>
                    <hr className="mt-4 text-default-200 dark:text-white/20" />
                  </div>
                  <div className="md:col-span-2 col-span-1 lg:w-md lg:ms-auto w-full">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <Link href="" className="text-default-700 hover:underline hover:text-default-900">
                          Family medicine
                        </Link>
                        <Link href="" className="text-default-700 hover:underline hover:text-default-900">
                          Dentistry
                        </Link>
                        <Link href="" className="text-default-700 hover:underline hover:text-default-900">
                          Internal medicine
                        </Link>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Link href="" className="text-default-700 hover:underline hover:text-default-900">
                          Obstetrics gynecology
                        </Link>
                        <Link href="" className="text-default-700 hover:underline hover:text-default-900">
                          Orthopedic surgery
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-6 lg:mb-12 mb-8">
                  <div className="col-span-1">
                    <div className="md:block flex justify-between items-center">
                      <h3 className="md:mb-4 lg:text-2.5xl md:text-2xl text-xl text-default-900 font-semibold">Conditions</h3>
                      <div className="inline-flex items-center gap-2 ">
                        <Link href="" className="hover:underline text-sm py-2 flex items-center text-nowrap me-1 font-semibold">
                          View all
                          <Icon icon="lucide:chevron-right" className="text-lg" />
                        </Link>
                      </div>
                    </div>
                    <hr className="mt-4 text-default-200 dark:text-white/20" />
                  </div>
                  <div className="md:col-span-2 grid-cols-1 lg:w-md lg:ms-auto w-full">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <Link href="" className="text-default-700 hover:underline hover:text-default-900">
                          Endometriosis
                        </Link>
                        <Link href="" className="text-default-700 hover:underline hover:text-default-900">
                          ADHD and-or ADD
                        </Link>
                        <Link href="" className="text-default-700 hover:underline hover:text-default-900">
                          Fibromyalgia
                        </Link>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Link href="" className="text-default-700 hover:underline hover:text-default-900">
                          Sleep apnea
                        </Link>
                        <Link href="" className="text-default-700 hover:underline hover:text-default-900">
                          Anxiety
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
                  <div className="col-span-1">
                    <div className="md:block flex justify-between items-center">
                      <h3 className="md:mb-4 lg:text-2.5xl md:text-2xl text-xl text-default-900 font-semibold">Procedures</h3>
                      <div className="inline-flex items-center gap-2 ">
                        <Link href="" className="hover:underline text-sm py-2 flex items-center text-nowrap me-1 font-semibold">
                          View all
                          <Icon icon="lucide:chevron-right" className="text-lg" />
                        </Link>
                      </div>
                    </div>
                    <hr className="mt-4 text-default-200 dark:text-white/20" />
                  </div>
                  <div className="md:col-span-2 col-span-1 lg:w-md lg:ms-auto w-full">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <Link href="" className="text-default-700 hover:underline hover:text-default-900">
                          Replacement therapy
                        </Link>
                        <Link href="" className="text-default-700 hover:underline hover:text-default-900">
                          Knee replacemen
                        </Link>
                        <Link href="" className="text-default-700 hover:underline hover:text-default-900">
                          Colonoscopy
                        </Link>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Link href="" className="text-default-700 hover:underline hover:text-default-900">
                          Hernia repair
                        </Link>
                        <Link href="" className="text-default-700 hover:underline hover:text-default-900">
                          Vasectomy
                        </Link>
                      </div>
                    </div>
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

export default PopularSearch
