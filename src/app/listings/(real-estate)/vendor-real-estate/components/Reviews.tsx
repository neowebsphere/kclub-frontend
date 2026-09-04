import review01 from '@/assets/img/account/reviews/01.jpg'
import review02 from '@/assets/img/account/reviews/02.jpg'
import review03 from '@/assets/img/account/reviews/03.jpg'
import avatar01 from '@/assets/img/account/reviews/ava01.jpg'
import avatar02 from '@/assets/img/account/reviews/ava02.jpg'
import ava03 from '@/assets/img/account/reviews/ava03.jpg'
import ava04 from '@/assets/img/account/reviews/ava04.jpg'
import GlightBox from '@/components/GlightBox'
import { Icon } from '@iconify/react'
import { Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const Reviews = () => {
  return (
    <>
      <section className="lg:mt-6 md:mt-4 mt-2 py-12">
        <div className="container">
          <div className="grid grid-cols-12 gap-6">
            <div className="lg:col-span-9 col-span-12 lg:mb-4 lg:pb-12 ">
              <div className="flex items-center justify-between mb-4 lg:pb-4 md:pb-6">
                <h2 className="lg:text-3.5xl md:text-2.5xl text-2xl text-default-900 font-semibold">Reviews</h2>
                <div className="flex items-center text-xl text-default-900 font-semibold">
                  <Star className="fill-warning text-warning me-2 size-3.5" />
                  4.9
                  <span className="text-sm font-normal text-default-500 ms-1">(32)</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="mb-4 me-4 w-full whitespace-nowrap overflow-x-auto">
                  <div className="flex flex-nowrap gap-2 pb-2 mb-1">
                    <div>
                      <input type="radio" className="hidden peer" defaultChecked />
                      <label className="cursor-pointer rounded-full font-medium px-5 py-2 inline-flex text-sm border border-default-300 peer-checked:bg-default-100 peer-checked:dark:bg-white/3 peer-checked:text-default-800 peer-checked:border-default-900 peer-checked:dark:border-white hover:border-default-900 hover:bg-default-100 dark:hover:bg-white/3">
                        All
                      </label>
                    </div>
                    <div>
                      <input type="radio" className="hidden peer" />
                      <label className="cursor-pointer rounded-full font-medium px-5 py-2 inline-flex text-sm border border-default-300 peer-checked:bg-default-100 peer-checked:dark:bg-white/3 peer-checked:text-default-800 peer-checked:border-default-900 peer-checked:dark:border-white hover:border-default-900 hover:bg-default-100 dark:hover:bg-white/3">
                        Only positive (30)
                      </label>
                    </div>
                    <div>
                      <input type="radio" className="hidden peer" />
                      <label className="cursor-pointer rounded-full font-medium px-5 py-2 inline-flex text-sm border border-default-300 peer-checked:bg-default-100 peer-checked:dark:bg-white/3 peer-checked:text-default-800 peer-checked:border-default-900 peer-checked:dark:border-white hover:border-default-900 hover:bg-default-100 dark:hover:bg-white/3">
                        Only negative (2)
                      </label>
                    </div>
                  </div>
                </div>
                <div className="mb-4 pb-4">
                  <button className="border border-default-900 text-nowrap text-default-800 text-sm px-4 py-2 rounded-md inline-flex items-center justify-center hover:bg-default-900 hover:text-body-bg transition-all duration-300">
                    <Icon icon="lucide:edit-3" className="text-base -ms-1 me-2" />
                    Add review
                  </button>
                </div>
              </div>
              <div className="border-b border-border pb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center pe-4">
                    <div className="rounded-full overflow-hidden size-12">
                      <Image src={avatar01} alt="Avatar" className="w-full h-full object-cover" />
                    </div>
                    <div className="ps-4">
                      <h6 className="mb-1 font-semibold text-default-900">Randy Walker</h6>
                      <div className="text-xs">Nov 12, 2024</div>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <Star className="fill-warning text-warning size-3.5" />
                    <Star className="fill-warning text-warning size-3.5" />
                    <Star className="fill-warning text-warning size-3.5" />
                    <Star className="fill-warning text-warning size-3.5" />
                    <Star className="fill-warning text-warning size-3.5" />
                  </div>
                </div>
                <p className="text-sm mb-2">
                  Review on:
                  <Link className="hover-underline font-semibold text-default-900 ms-2" href="">
                    67-04 Myrtle Ave Glendale, NY 11385
                  </Link>
                </p>
                <p className="text-sm mb-4">Excellent apartment in the very center of the city, attractions and entertainment venues are located 50m from the flat. The flat was perfectly clean and had basic slippers, gel-shampoo, clean towels.</p>
                <div className="flex items-center">
                  <button type="button" className="text-default-600 flex items-center">
                    <Icon icon="lucide:thumbs-up" className="text-base me-1" />6
                  </button>
                  <div className="w-px h-5 bg-default-300 dark:bg-white/20 my-2 mx-4" />
                  <button type="button" className="text-default-600 flex items-center">
                    <Icon icon="lucide:thumbs-down" className="text-base me-1" />0
                  </button>
                </div>
              </div>
              <div className="border-b border-border py-6">
                <div className="flex items-center justify-between mb-4 mt-2">
                  <div className="flex items-center pe-4">
                    <div className="rounded-full overflow-hidden size-12">
                      <Image src={avatar02} alt="Avatar" className="w-full h-full object-cover" />
                    </div>
                    <div className="ps-4">
                      <h6 className="mb-1 font-semibold text-default-900">Kathryn Murphy</h6>
                      <div className="text-xs">Sep 17, 2024</div>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <Star className="fill-warning text-warning size-3.5" />
                    <Star className="fill-warning text-warning size-3.5" />
                    <Star className="fill-warning text-warning size-3.5" />
                    <Star className="fill-warning text-warning size-3.5" />
                    <Star className="text-warning size-3.5" />
                  </div>
                </div>
                <p className="text-sm mb-2">
                  Review on:
                  <Link className="hover-underline font-semibold text-default-900 ms-2" href="">
                    517 82nd St, Brooklyn, NY 11209
                  </Link>
                </p>
                <p className="text-sm mb-4">
                  I recently rented an apartment, and it has been a fantastic experience. The apartment itself is beautiful, with modern finishes and plenty of natural light. The property management team is very attentive and responds quickly to any maintenance requests. The
                  common areas, including the pool and gym, are always clean and well-maintained.
                </p>
                <div className="grid grid-cols-3 gap-2 md:w-88.5 w-full mb-4">
                  <div className="group relative overflow-hidden rounded-xl">
                    <Image src={review01} alt="" className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-xl">
                      <GlightBox href={review01.src} className="image-popup after:absolute after:inset-0 after:z-1 rounded-xl">
                        <div className="absolute inset-0 flex justify-center items-center z-20 opacity-0 group-hover:opacity-100 transition duration-300">
                          <Icon icon="lucide:zoom-in" className="text-white text-3xl relative z-30" />
                        </div>
                      </GlightBox>
                    </div>
                  </div>
                  <div className="group relative overflow-hidden rounded-xl">
                    <Image src={review02} alt="" className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-xl">
                      <GlightBox href={review02.src} className="image-popup after:absolute after:inset-0 after:z-1 rounded-xl">
                        <div className="absolute inset-0 flex justify-center items-center z-20 opacity-0 group-hover:opacity-100 transition duration-300">
                          <Icon icon="lucide:zoom-in" className="text-white text-3xl relative z-30" />
                        </div>
                      </GlightBox>
                    </div>
                  </div>
                  <div className="group relative overflow-hidden rounded-xl">
                    <Image src={review03} alt="" className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-xl">
                      <GlightBox href={review03.src} className="image-popup after:absolute after:inset-0 after:z-1 rounded-xl">
                        <div className="absolute inset-0 flex justify-center items-center z-20 opacity-0 group-hover:opacity-100 transition duration-300">
                          <Icon icon="lucide:zoom-in" className="text-white text-3xl relative z-30" />
                        </div>
                      </GlightBox>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <button type="button" className="text-default-600 flex items-center">
                    <Icon icon="lucide:thumbs-up" className="text-base me-1" />
                    13
                  </button>
                  <div className="w-px h-5 bg-default-300 dark:bg-white/20 my-2 mx-4" />
                  <button type="button" className="text-default-600 flex items-center">
                    <Icon icon="lucide:thumbs-down" className="text-base me-1" />2
                  </button>
                </div>
              </div>
              <div className="border-b border-border py-6">
                <div className="flex items-center justify-between mb-4 mt-2">
                  <div className="flex items-center pe-4">
                    <div className="rounded-full overflow-hidden size-12">
                      <Image src={ava03} alt="Avatar" className="w-full h-full object-cover" />
                    </div>
                    <div className="ps-4">
                      <h6 className="mb-1 font-semibold text-default-900">Darrell Steward</h6>
                      <div className="text-xs">Aug 9, 2024</div>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <Star className="fill-warning text-warning size-3.5" />
                    <Star className="fill-warning text-warning size-3.5" />
                    <Star className="fill-warning text-warning size-3.5" />
                    <Star className="fill-warning text-warning size-3.5" />
                    <Star className="fill-warning text-warning size-3.5" />
                  </div>
                </div>
                <p className="text-sm mb-2">
                  Review on:
                  <Link className="hover-underline font-semibold text-default-900 ms-2" href="">
                    929 Hart St, Brooklyn, NY 11237
                  </Link>
                </p>
                <p className="text-sm mb-4">
                  I had a great experience with Michael Williams when selling my home. The team was professional, reliable, and extremely knowledgeable about the market. They provided excellent marketing for my property, which attracted a lot of interest and ultimately led to a
                  quick sale above the asking price. I highly recommend their services to anyone looking to sell their home.
                </p>
                <div className="flex items-center">
                  <button type="button" className="text-default-600 flex items-center">
                    <Icon icon="lucide:thumbs-up" className="text-base me-1" />4
                  </button>
                  <div className="w-px h-5 bg-default-300 dark:bg-white/20 my-2 mx-4" />
                  <button type="button" className="text-default-600 flex items-center">
                    <Icon icon="lucide:thumbs-down" className="text-base me-1" />1
                  </button>
                </div>
              </div>
              <div className="border-b border-border py-6">
                <div className="flex items-center justify-between mb-4 mt-2">
                  <div className="flex items-center pe-4">
                    <div className="rounded-full overflow-hidden size-12">
                      <Image src={ava04} alt="Avatar" className="w-full h-full object-cover" />
                    </div>
                    <div className="ps-4">
                      <h6 className="mb-1 font-semibold text-default-900">Ralph Edwards</h6>
                      <div className="text-xs">Jul 4, 2024</div>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <Star className="fill-warning text-warning size-3.5" />
                    <Star className="fill-warning text-warning size-3.5" />
                    <Star className="fill-warning text-warning size-3.5" />
                    <Star className="fill-warning text-warning size-3.5" />
                    <Star className="text-warning size-3.5" />
                  </div>
                </div>
                <p className="text-sm mb-2">
                  Review on:
                  <Link className="hover-underline font-semibold text-default-900 ms-2" href="">
                    1234 Maple Street, Brooklyn, NY 11201
                  </Link>
                </p>
                <p className="text-sm mb-4">
                  I recently rented an apartment and had a positive experience overall. The location is convenient, and the building amenities are great. The apartment itself is spacious and well-maintained. However, there were a few minor issues with the plumbing that took a
                  little longer to fix than expected. Despite that, I'm happy with my decision and would recommend it to others.
                </p>
                <div className="flex items-center">
                  <button type="button" className="text-default-600 flex items-center">
                    <Icon icon="lucide:thumbs-up" className="text-base me-1" />
                    19
                  </button>
                  <div className="w-px h-5 bg-default-300 dark:bg-white/20 my-2 mx-4" />
                  <button type="button" className="text-default-600 flex items-center">
                    <Icon icon="lucide:thumbs-down" className="text-base me-1" />5
                  </button>
                </div>
              </div>
              <nav className="flex items-center gap-x-1 mt-8" aria-label="Pagination">
                <div className="flex items-center gap-x-1">
                  <button
                    type="button"
                    className="min-h-9.5 min-w-9.5 flex justify-center items-center bg-default-200 text-default-800 py-2 px-3 text-sm rounded-lg focus:outline-hidden focus:bg-default-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-600 dark:text-white dark:focus:bg-neutral-500"
                    aria-current="page"
                  >
                    1
                  </button>
                  <button
                    type="button"
                    className="min-h-9.5 min-w-9.5 flex justify-center items-center text-default-800 hover:bg-default-100 py-2 px-3 text-sm rounded-lg focus:outline-hidden focus:bg-default-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
                  >
                    2
                  </button>
                  <button
                    type="button"
                    className="min-h-9.5 min-w-9.5 flex justify-center items-center text-default-800 hover:bg-default-100 py-2 px-3 text-sm rounded-lg focus:outline-hidden focus:bg-default-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
                  >
                    3
                  </button>
                  <button
                    type="button"
                    className="min-h-9.5 min-w-9.5 flex justify-center items-center text-default-800 hover:bg-default-100 py-2 px-3 text-sm rounded-lg focus:outline-hidden focus:bg-default-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
                  >
                    4
                  </button>
                  <div className="hs-tooltip inline-block">
                    <button
                      type="button"
                      className="hs-tooltip-toggle group min-h-9.5 min-w-9.5 flex justify-center items-center text-default-400 hover:text-blue-600 p-2 text-sm rounded-lg focus:outline-hidden focus:bg-default-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:bg-white/10"
                    >
                      <Icon icon="lucide:ellipsis" className="text-lg" />
                    </button>
                  </div>
                  <button
                    type="button"
                    className="min-h-9.5 min-w-9.5 flex justify-center items-center text-default-800 hover:bg-default-100 py-2 px-3 text-sm rounded-lg focus:outline-hidden focus:bg-default-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
                  >
                    8
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Reviews
