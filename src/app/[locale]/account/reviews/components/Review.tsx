import avatarSm from '@/assets/img/account/avatar-sm.jpg'
import review01 from '@/assets/img/account/reviews/01.jpg'
import review02 from '@/assets/img/account/reviews/02.jpg'
import review03 from '@/assets/img/account/reviews/03.jpg'
import review04 from '@/assets/img/account/reviews/04.jpg'
import review05 from '@/assets/img/account/reviews/05.jpg'
import ava01 from '@/assets/img/account/reviews/ava01.jpg'
import ava02 from '@/assets/img/account/reviews/ava02.jpg'
import ava03 from '@/assets/img/account/reviews/ava03.jpg'
import ava04 from '@/assets/img/account/reviews/ava04.jpg'
import GlightBox from '@/components/GlightBox'
import { Icon } from '@iconify/react'
import { Archive, SquarePen, Star, Trash2 } from 'lucide-react'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'

const Review = () => {
  return (
    <>
      <div className="lg:col-span-9 col-span-1">
        <h1 className="mb-4 pb-4 lg:text-3.5xl md:text-2.5xl text-2xl font-semibold text-default-900">Reviews</h1>
        <div className="overflow-auto whitespace-nowrap mb-6">
          <nav className="flex gap-2 pb-2 mb-1" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
            <button
              type="button"
              className="hs-tab-active:border-default-900 hs-tab-active:bg-default-100 hs-tab-active:dark-bg-white/3 rounded-full border border-border py-2 px-5 text-sm font-semibold text-body-color hover:border-default-900 active"
              id="reviews-about-you-tab"
              aria-selected="true"
              data-hs-tab="#reviews-about-you"
              aria-controls="reviews-about-you"
              role="tab"
            >
              Reviews about you (8)
            </button>
            <button
              type="button"
              className="hs-tab-active:border-default-900 hs-tab-active:bg-default-100 hs-tab-active:dark-bg-white/3 rounded-full border border-border py-2 px-5 text-sm font-semibold text-body-color hover:border-default-900"
              id="reviews-by-you-tab"
              aria-selected="false"
              data-hs-tab="#reviews-by-you"
              aria-controls="reviews-by-you"
              role="tab"
            >
              Reviews by you (12)
            </button>
          </nav>
        </div>
        <div className="mt-3">
          <div id="reviews-about-you" role="tabpanel" aria-labelledby="reviews-about-you-tab">
            <div className="border-b border-border pb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center pe-4">
                  <div className="rounded-full overflow-hidden size-12">
                    <Image src={ava01} alt="Avatar" className="w-full h-full object-cover" />
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
              <div className="mb-2 p-6 bg-default-100 dark:bg-white/3 rounded-md">
                <div className="flex gap-4 items-center mb-4">
                  <div>
                    <Image src={avatarSm} alt="Avatar" className="rounded-full size-9.5" />
                  </div>
                  <div>
                    <h6 className="mb-1 text-default-900 font-semibold">Michael Williams</h6>
                    <p className="mb-1 text-xs">Michael Williams</p>
                  </div>
                </div>
                <p className="text-sm">Thank you for your feedback. I'm glad you were satisfied :)</p>
              </div>
            </div>
            <div className="border-b border-border py-6">
              <div className="flex items-center justify-between mb-4 mt-2">
                <div className="flex items-center pe-4">
                  <div className="rounded-full overflow-hidden size-12">
                    <Image src={ava02} alt="Avatar" className="w-full h-full object-cover" />
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
                  <Star className="fill-warning text-warning size-3.5" />
                </div>
              </div>
              <p className="text-sm mb-2">
                Review on:
                <Link className="hover-underline font-semibold text-default-900 ms-2" href="">
                  517 82nd St, Brooklyn, NY 11209
                </Link>
              </p>
              <p className="text-sm mb-4">
                I recently rented an apartment, and it has been a fantastic experience. The apartment itself is beautiful, with modern finishes and plenty of natural light. The property management team is very attentive and responds quickly to any maintenance requests. The common
                areas, including the pool and gym, are always clean and well-maintained.
              </p>
              <div className="grid grid-cols-3 gap-2 md:w-88.5 w-full mb-4">
                <div className="group relative overflow-hidden rounded-xl">
                  <Image alt="" src={review01} className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-xl">
                    <GlightBox href={review01.src} className="image-popup after:absolute after:inset-0 after:z-1 rounded-xl">
                      <div className="absolute inset-0 flex justify-center items-center z-20 opacity-0 group-hover:opacity-100 transition duration-300">
                        <Icon icon="lucide:zoom-in" className="text-white text-3xl relative z-30" />
                      </div>
                    </GlightBox>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-xl">
                  <Image alt="" src={review02} className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105" />
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
              <div className="flex items-center justify-between">
                <button type="button" className="py-1.5 px-4 text-xs border border-default-200 rounded-md hover:border-default-900 text-default-800 inline-flex items-center transition-all duration-300 hover:text-default-900">
                  <Icon icon="lucide:corner-up-left" className="text-sm me-2" />
                  Reply
                </button>
                <Link className="text-xs py-1 text-default-800 inline-flex items-center" href="">
                  <Icon icon="lucide:info" className="text-sm me-1" />
                  <span className="hover:underline">Report</span>
                </Link>
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
              <div className="flex items-center justify-between">
                <button type="button" className="py-1.5 px-4 text-xs border border-default-200 rounded-md hover:border-default-900 text-default-800 inline-flex items-center transition-all duration-300 hover:text-default-900">
                  <Icon icon="lucide:corner-up-left" className="text-sm me-2" />
                  Reply
                </button>
                <Link className="text-xs py-1 text-default-800 inline-flex items-center" href="">
                  <Icon icon="lucide:info" className="text-sm me-1" />
                  <span className="hover:underline">Report</span>
                </Link>
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
              <div className="flex items-center justify-between">
                <button type="button" className="py-1.5 px-4 text-xs border border-default-200 rounded-md hover:border-default-900 text-default-800 inline-flex items-center transition-all duration-300 hover:text-default-900">
                  <Icon icon="lucide:corner-up-left" className="text-sm me-2" />
                  Reply
                </button>
                <Link className="text-xs py-1 text-default-800 inline-flex items-center" href="">
                  <Icon icon="lucide:info" className="text-sm me-1" />
                  <span className="hover:underline">Report</span>
                </Link>
              </div>
            </div>
            <nav className="flex items-center gap-x-1 pt-8 mt-2" aria-label="Pagination">
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
              </div>
            </nav>
          </div>
          <div id="reviews-by-you" className="hidden" role="tabpanel" aria-labelledby="reviews-by-you-tab">
            <div className="border-b border-border py-6">
              <div className="flex items-center justify-between mb-4 mt-2">
                <div className="flex items-center pe-4">
                  <div className="rounded-md overflow-hidden size-28">
                    <Image src={review01} className="bg-body-tertiary rounded" alt="Image" />
                  </div>
                  <div className="px-4">
                    <div className="bg-info/10 text-info mb-2 text-xs inline-flex item-center font-medium px-2 py-0.5 rounded items-center">Published</div>
                    <div className="flex gap-1 pb-1 mb-2">
                      <Star className="fill-warning text-warning size-3.5" />
                      <Star className="fill-warning text-warning size-3.5" />
                      <Star className="fill-warning text-warning size-3.5" />
                      <Star className="fill-warning text-warning size-3.5" />
                      <Star className="fill-warning text-warning size-3.5" />
                    </div>
                    <p className="text-sm mb-2">
                      Review on:
                      <Link className="hover:underline font-medium text-default-900 ms-2" href="">
                        67-04 Myrtle Ave Glendale, NY 11385
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="text-end">
                  <div className="hs-dropdown relative inline-flex mb-6">
                    <button
                      type="button"
                      className="hs-dropdown-toggle inline-flex items-center justify-center rounded-md border border-default-300 size-10 text-default-600  focus:outline-hidden hover:border-default-900 
                                              dark:text-white"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      aria-label="Share"
                    >
                      <Icon icon="lucide:more-vertical" />
                    </button>
                    <div
                      className="hs-dropdown-menu hidden transition-[opacity,margin] duration opacity-0 hs-dropdown-open:opacity-100 absolute z-20 min-w-45 bg-body-bg border-border  shadow-custom rounded-lg mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700"
                      role="menu"
                      aria-orientation="vertical"
                    >
                      <div className="p-1 space-y-0.5">
                        <Link
                          href=""
                          className="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-default-800 hover:bg-default-100 focus:outline-hidden focus:bg-default-100 dark:text-neutral-400 dark:hover:bg-neutral-700  dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                        >
                          <SquarePen className="size-4" />
                          Edit
                        </Link>
                        <Link
                          href=""
                          className="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-default-800 hover:bg-default-100 focus:outline-hidden focus:bg-default-100 dark:text-neutral-400 dark:hover:bg-neutral-700  dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                        >
                          <Archive className="size-4" />
                          Move to archive
                        </Link>
                        <Link
                          href=""
                          className="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-primary hover:bg-default-100 focus:outline-hidden focus:bg-default-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                        >
                          <Trash2 className="size-4" />
                          Delete
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="text-xs">Jan 17, 2024</div>
                </div>
              </div>
              <p className="text-sm mb-4">Excellent apartment in the very center of the city, attractions and entertainment venues are located 50m from the flat. The flat was perfectly clean and had basic slippers, gel-shampoo, clean towels. </p>
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
                  <div className="rounded-md overflow-hidden size-28">
                    <Image src={review02} className="bg-body-tertiary rounded" alt="Image" />
                  </div>
                  <div className="px-4">
                    <div className="bg-info/10 text-info mb-2 text-xs inline-flex item-center font-medium px-2 py-0.5 rounded items-center">Published</div>
                    <div className="flex gap-1 pb-1 mb-2">
                      <Star className="fill-warning text-warning size-3.5" />
                      <Star className="fill-warning text-warning size-3.5" />
                      <Star className="fill-warning text-warning size-3.5" />
                      <Star className="fill-warning text-warning size-3.5" />
                      <Star className="fill-warning text-warning size-3.5" />
                    </div>
                    <p className="text-sm mb-2">
                      Review on:
                      <Link className="hover:underline font-medium text-default-900 ms-2" href="">
                        517 82nd St, Brooklyn, NY 11209
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="text-end">
                  <div className="hs-dropdown relative inline-flex mb-6">
                    <button
                      type="button"
                      className="hs-dropdown-toggle inline-flex items-center justify-center rounded-md border border-default-300 size-10 text-default-600  focus:outline-hidden hover:border-default-900 dark:text-white"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      aria-label="Share"
                    >
                      <Icon icon="lucide:more-vertical" />
                    </button>
                    <div
                      className="hs-dropdown-menu hidden transition-[opacity,margin] duration opacity-0 hs-dropdown-open:opacity-100 absolute z-20 min-w-45 bg-body-bg border-border  shadow-custom rounded-lg mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700"
                      role="menu"
                      aria-orientation="vertical"
                    >
                      <div className="p-1 space-y-0.5">
                        <Link
                          href=""
                          className="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-default-800 hover:bg-default-100  focus:outline-hidden focus:bg-default-100 dark:text-neutral-400 dark:hover:bg-neutral-700  dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                        >
                          <SquarePen className="size-4" />
                          Edit
                        </Link>
                        <Link
                          href=""
                          className="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-default-800 hover:bg-default-100  focus:outline-hidden focus:bg-default-100 dark:text-neutral-400 dark:hover:bg-neutral-700  dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                        >
                          <Archive className="size-4" />
                          Move to archive
                        </Link>
                        <Link
                          href=""
                          className="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-primary hover:bg-default-100 focus:outline-hidden focus:bg-default-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                        >
                          <Trash2 className="size-4" />
                          Delete
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="text-xs">Dec 5, 2024</div>
                </div>
              </div>
              <p className="text-sm mb-4">
                I recently rented an apartment, and it has been a fantastic experience. The apartment itself is beautiful, with modern finishes and plenty of natural light. The property management team is very attentive and responds quickly to any maintenance requests. The common
                areas, including the pool and gym, are always clean and well-maintained.
              </p>
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
                  <div className="rounded-md overflow-hidden size-28">
                    <Image src={review04} className="bg-body-tertiary rounded" alt="Image" />
                  </div>
                  <div className="px-4">
                    <div className="bg-info/10 text-info mb-2 text-xs inline-flex item-center font-medium px-2 py-0.5 rounded items-center">Archived</div>
                    <div className="flex gap-1 pb-1 mb-2">
                      <Star className="fill-warning text-warning size-3.5" />
                      <Star className="fill-warning text-warning size-3.5" />
                      <Star className="text-warning size-3.5" />
                      <Star className="text-warning size-3.5" />
                      <Star className="text-warning size-3.5" />
                    </div>
                    <p className="text-sm mb-2">
                      Review on:
                      <Link className="hover:underline font-medium text-default-900 ms-2" href="">
                        929 Hart St, Brooklyn, NY 11237
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="text-end">
                  <div className="hs-dropdown relative inline-flex mb-6">
                    <button
                      type="button"
                      className="hs-dropdown-toggle inline-flex items-center justify-center rounded-md border border-default-300 size-10 text-default-600  focus:outline-hidden hover:border-default-900  dark:text-white"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      aria-label="Share"
                    >
                      <Icon icon="lucide:more-vertical" />
                    </button>
                    <div
                      className="hs-dropdown-menu hidden transition-[opacity,margin] duration opacity-0 hs-dropdown-open:opacity-100 absolute z-20 min-w-45 bg-body-bg border-border  shadow-custom rounded-lg mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700"
                      role="menu"
                      aria-orientation="vertical"
                    >
                      <div className="p-1 space-y-0.5">
                        <Link
                          href=""
                          className="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-default-800 hover:bg-default-100 focus:outline-hidden focus:bg-default-100 dark:text-neutral-400 dark:hover:bg-neutral-700  dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                        >
                          <SquarePen className="size-4" />
                          Edit
                        </Link>
                        <Link
                          href=""
                          className="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-default-800 hover:bg-default-100 focus:outline-hidden focus:bg-default-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                        >
                          <Archive className="size-4" />
                          Move to archive
                        </Link>
                        <Link
                          href=""
                          className="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-primary hover:bg-default-100 focus:outline-hidden focus:bg-default-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                        >
                          <Trash2 className="size-4" />
                          Delete
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="text-xs">May 8, 2023</div>
                </div>
              </div>
              <p className="text-sm mb-4">
                The property was not as advertised; several features that were supposed to be included, such as a fitness center and updated appliances, were either non-existent or in poor condition. Maintenance requests are rarely addressed in a timely manner, with some issues
                lingering for months without resolution. The overall upkeep of the building is lacking, with common areas often dirty and neglected.
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
                  <div className="rounded-md overflow-hidden size-28">
                    <Image src={review05} className="bg-body-tertiary rounded" alt="Image" />
                  </div>
                  <div className="px-4">
                    <div className="bg-info/10 text-info mb-2 text-xs inline-flex item-center font-medium px-2 py-0.5 rounded items-center">Archived</div>
                    <div className="flex gap-1 pb-1 mb-2">
                      <Star className="fill-warning text-warning size-3.5" />
                      <Star className="fill-warning text-warning size-3.5" />
                      <Star className="fill-warning text-warning size-3.5" />
                      <Star className="fill-warning text-warning size-3.5" />
                      <Star className="text-warning size-3.5" />
                    </div>
                    <p className="text-sm mb-2">
                      Review on:
                      <Link className="hover:underline font-medium text-default-900 ms-2" href="">
                        1234 Maple Street, Brooklyn, NY 11201
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="text-end">
                  <div className="hs-dropdown relative inline-flex mb-6">
                    <button
                      type="button"
                      className="hs-dropdown-toggle inline-flex items-center justify-center rounded-md border border-default-300 size-10 text-default-600  focus:outline-hidden hover:border-default-900 dark:text-white"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      aria-label="Share"
                    >
                      <Icon icon="lucide:more-vertical" />
                    </button>
                    <div
                      className="hs-dropdown-menu hidden transition-[opacity,margin] duration opacity-0 hs-dropdown-open:opacity-100 absolute z-20 min-w-45 bg-body-bg border-border  shadow-custom rounded-lg mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700"
                      role="menu"
                      aria-orientation="vertical"
                    >
                      <div className="p-1 space-y-0.5">
                        <Link
                          href=""
                          className="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-default-800 hover:bg-default-100 focus:outline-hidden focus:bg-default-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                        >
                          <SquarePen className="size-4" />
                          Edit
                        </Link>
                        <Link
                          href=""
                          className="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-default-800 hover:bg-default-100 focus:outline-hidden focus:bg-default-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                        >
                          <Archive className="size-4" />
                          Move to archive
                        </Link>
                        <Link
                          href=""
                          className="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-primary hover:bg-default-100 focus:outline-hidden focus:bg-default-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                        >
                          <Trash2 className="size-4" />
                          Delete
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="text-xs">Oct 3, 2022</div>
                </div>
              </div>
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
            <nav className="flex items-center gap-x-1 pt-8 mt-2" aria-label="Pagination">
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
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default Review
