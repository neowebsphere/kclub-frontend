import galleryth01 from '@/assets/img/blog/v4/single/gallery/th01.jpg'
import galleryth02 from '@/assets/img/blog/v4/single/gallery/th02.jpg'
import GlightBox from '@/components/GlightBox'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'

const Article = () => {
  return (
    <>
      <section className="lg:py-12 pt-6 pb-12 mt-6">
        <div className="container">
          <div className="grid lg:grid-cols-12 grid-cols-1 gap-6">
            <div className="lg:col-span-8 col-span-1">
              <ol className="flex flex-wrap items-center whitespace-nowrap pb-2 mb-4">
                <li className="inline-flex items-center">
                  <Link className="flex items-center text-sm font-medium text-default-700 hover:text-default-900 focus:outline-hidden" href="/pages/help/topics-v3">
                    Help center
                  </Link>
                  <Icon icon="lucide:chevron-right" className="mx-2" />
                </li>
                <li className="inline-flex items-center">
                  <Link className="flex items-center text-sm font-medium text-default-700 hover:text-default-900 focus:outline-hidden" href="">
                    Search and navigation
                  </Link>
                  <Icon icon="lucide:chevron-right" className="mx-2" />
                </li>
                <li className="inline-flex items-center text-sm font-medium text-default-500/80 truncate" aria-current="page">
                  Single article v.3
                </li>
              </ol>
              <h1 className="text-default-900 font-semibold lg:text-3.5xl md:text-2.5xl text-2xl mb-12">How to use the search to find a doctor</h1>
              <p className="mb-4">
                Finding the right doctor is essential for maintaining good health, and our search tool is designed to make this process easy and efficient. Start by accessing the search bar on our homepage or within our mobile app. Enter relevant keywords that describe the type
                of doctor you need, such as the specialty (e.g., "Cardiologist," "Pediatrician"), condition (e.g., "Diabetes," "Allergies"), procedure (e.g., "Physical exam," "Surgery"), and your location to narrow down the results.
              </p>
              <p className="mb-4">After entering your keywords, use the available filters to refine your search further. Filters can help you sort by distance, patient ratings, years of experience, insurance acceptance, and even the doctor's gender if you have a preference.</p>
              <p className="mb-4">
                Reviewing the profiles of doctors in your search results is crucial. Each profile typically includes a biography detailing the doctor's background and specialties, patient reviews, office hours and locations, and contact information. These details will help you
                make an informed decision about which doctor suits your needs.
              </p>
              <p className="mb-4">
                When you find a doctor that matches your criteria, you can make an appointment directly online if that option is available, or contact the office using the provided phone number or email. Be sure to prepare any necessary documents and medical history for your
                visit to ensure a productive appointment.
              </p>
              <div className="pt-6 mb-4">
                <div className="grid grid-cols-12 lg:gap-6 gap-4" id="lightgallery">
                  <GlightBox href={galleryth01.src} className="col-span-6 relative group block rounded-md overflow-hidden">
                    <Image src={galleryth01} alt="" className="size-full bg-cover object-cover roundedtransition-transform duration-300 group-hover:scale-105" />
                    <div className="absolute inset-0 flex justify-center items-center z-20 opacity-0 group-hover:opacity-100 transition duration-300">
                      <Icon icon="lucide:zoom-in" className="text-white text-3xl relative z-30" />
                      <div className="absolute inset-0 bg-black opacity-20 z-10" />
                    </div>
                  </GlightBox>
                  <GlightBox href={galleryth02.src} className="col-span-6 relative group block rounded-md overflow-hidden">
                    <Image src={galleryth02} alt="" className="size-full bg-cover object-cover roundedtransition-transform duration-300 group-hover:scale-105" />
                    <div className="absolute inset-0 flex justify-center items-center z-20 opacity-0 group-hover:opacity-100 transition duration-300">
                      <Icon icon="lucide:zoom-in" className="text-white text-3xl relative z-30" />
                      <div className="absolute inset-0 bg-black opacity-20 z-10" />
                    </div>
                  </GlightBox>
                </div>
              </div>
              <h2 className="pt-6 mb-4 text-2xl font-semibold text-default-900">Additional tips</h2>
              <p className="mb-4">Using our search tool, finding the right doctor has never been easier. Follow these steps to ensure you find a healthcare provider that meets your needs and provides the care you deserve.</p>
              <ul className="flex flex-col gap-4 pb-6 mb-4">
                <li>
                  <span className="text-default-900 font-semibold">Ask for recommendations:</span>
                  If you're unsure where to start, ask friends, family, or your current healthcare provider for recommendations.
                </li>
                <li>
                  <span className="text-default-900 font-semibold">Check credentials:</span>
                  Verify the doctor's credentials and board certifications to ensure they are qualified.
                </li>
                <li>
                  <span className="text-default-900 font-semibold">Consider Telehealth options:</span>
                  If you have difficulty traveling, check if the doctor offers virtual appointments.
                </li>
              </ul>
              <div className="flex bg-info/10 mb-4 p-4 text-info border border-info/20 rounded" role="alert">
                <div>
                  <Icon icon="lucide:info" className="text-lg pe-1 mt-1 me-2" />
                </div>
                <p className="text-sm">When you find a doctor that matches your criteria, you can make an appointment directly online if that option is available, or contact the office using the provided phone number or email.</p>
              </div>
              <p className="pt-6 mb-4">
                If you're unsure where to start, consider asking for recommendations from friends, family, or your current healthcare provider. Always check the doctor's credentials and board certifications to ensure they are qualified. For those with travel difficulties, explore
                telehealth options that the doctor might offer.
              </p>
              <p className="mb-4">Using our search tool simplifies the process of finding a healthcare provider, ensuring you receive the care you deserve efficiently and conveniently.</p>
              <div className="flex items-center text-sm text-secondary pt-6 pb-2">
                5 months ago
                <Icon icon="lucide:dot" className="mx-1" />
                Updated
              </div>
              <hr className="text-default-200 dark:text-white/20 my-6" />
              <div className="pt-2">
                <h4 className="text-default-900 font-semibold pb-1 mb-4">Was this information helpful?</h4>
                <div className="flex gap-4">
                  <button type="button" className="py-2.5 px-5 border border-default-200 rounded-md text-default-800 transition-all duration-300 inline-flex items-center hover:border-default-900 dark:border-white/3 text-sm font-semibold">
                    <Icon icon="lucide:thumbs-up" className="me-2" />
                    Yes
                  </button>
                  <button type="button" className="py-2.5 px-5 border border-default-200 rounded-md text-default-800 transition-all duration-300 inline-flex items-center hover:border-default-900 dark:border-white/3 text-sm font-semibold">
                    <Icon icon="lucide:thumbs-down" className="me-2" />
                    No
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4">
              <div className="lg:w-80.5 w-full ms-auto">
                <div className="lg:sticky lg:top-25">
                  <div
                    id="articlesSidebar"
                    className="hs-overlay lg:static [--auto-close:lg] lg:block lg:translate-x-0 lg:end-auto lg:bottom-auto hs-overlay-open:translate-x-0 translate-x-full transition-all duration-300 transform  hidden fixed top-0 end-0 bottom-0 z-60 bg-body-bg lg:w-auto w-87"
                    role="dialog"
                    tabIndex={-1}
                    aria-label="Sidebar"
                  >
                    <div className="flex flex-col sticky top-0">
                      <header className="py-4 px-6 lg:px-0 lg:py-0 flex justify-between items-center gap-x-2 lg:border-none border-b border-default-200">
                        <Link className="focus:outline-hidden focus:opacity-80 " href="#" aria-label="Brand">
                          <h3 className="text-xl font-semibold text-default-900">Search and navigation</h3>
                        </Link>
                        <div className="lg:hidden -me-2">
                          <button type="button" data-hs-overlay="#articlesSidebar">
                            <Icon icon="lucide:x" className="size-5" />
                            <span className="sr-only">Close</span>
                          </button>
                        </div>
                      </header>
                      <nav className="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="w-full flex flex-col flex-wrap px-6 lg:px-0 pb-4 lg:pb-0 pt-6">
                          <ul className="flex flex-col gap-4">
                            <li>
                              <Link href="/pages/help/single-article-v3" className="flex items-center text-sm font-normal text-default-800 hover:text-default-900 transition-all duration-300 ease-in-out">
                                <Icon icon="lucide:chevron-right" className="text-lg me-2" />
                                <span className="hover:underline transition-all duration-300 ease-in-out">How to use the search to find a doctor</span>
                              </Link>
                            </li>
                            <li>
                              <Link href="/pages/help/single-article-v3" className="flex items-center text-sm font-normal text-default-800 hover:text-default-900 transition-all duration-300 ease-in-out">
                                <Icon icon="lucide:chevron-right" className="text-lg me-2" />
                                <span className="hover:underline transition-all duration-300 ease-in-out">Navigating the doctor directory</span>
                              </Link>
                            </li>
                            <li>
                              <Link href="/pages/help/single-article-v3" className="flex items-center text-sm font-normal text-default-800 hover:text-default-900 transition-all duration-300 ease-in-out">
                                <Icon icon="lucide:chevron-right" className="text-lg me-2" />
                                <span className="hover:underline transition-all duration-300 ease-in-out">Filtering options for doctor search</span>
                              </Link>
                            </li>
                            <li>
                              <Link href="/pages/help/single-article-v3" className="flex items-center text-sm font-normal text-default-800 hover:text-default-900 transition-all duration-300 ease-in-out">
                                <Icon icon="lucide:chevron-right" className="text-lg me-2" />
                                <span className="hover:underline transition-all duration-300 ease-in-out">How to schedule an appointment online</span>
                              </Link>
                            </li>
                            <li>
                              <Link href="/pages/help/single-article-v3" className="flex items-center text-sm font-normal text-default-800 hover:text-default-900 transition-all duration-300 ease-in-out">
                                <Icon icon="lucide:chevron-right" className="text-lg me-2" />
                                <span className="hover:underline transition-all duration-300 ease-in-out">Availability and waitlist information</span>
                              </Link>
                            </li>
                            <li>
                              <Link href="/pages/help/single-article-v3" className="flex items-center text-sm font-normal text-default-800 hover:text-default-900 transition-all duration-300 ease-in-out">
                                <Icon icon="lucide:chevron-right" className="text-lg me-2" />
                                <span className="hover:underline transition-all duration-300 ease-in-out">Using the map view to find nearby doctors</span>
                              </Link>
                            </li>
                            <li>
                              <Link href="/pages/help/single-article-v3" className="flex items-center text-sm font-normal text-default-800 hover:text-default-900 transition-all duration-300 ease-in-out">
                                <Icon icon="lucide:chevron-right" className="text-lg me-2" />
                                <span className="hover:underline transition-all duration-300 ease-in-out">Search for doctors by specialty and location</span>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </nav>
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

export default Article
