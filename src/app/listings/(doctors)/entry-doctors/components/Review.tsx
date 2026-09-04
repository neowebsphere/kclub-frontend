import { Icon } from '@iconify/react'
import { Star, StarHalf, ThumbsDown, ThumbsUp } from 'lucide-react'

const Review = () => {
  return (
    <>
      <div className="lg:p-8 p-6 bg-body-bg rounded-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-default-900">Reviews</h2>
          <button className="border border-default-900 text-default-800 text-sm px-4 py-2 rounded-md inline-flex items-center justify-center hover:bg-default-900 font-medium hover:text-body-bg transition-all duration-300">
            <Icon icon="lucide:edit-3" className="text-base -ms-1 me-2" />
            Add review
          </button>
        </div>
        <div className="mb-4 pb-4 grid md:grid-cols-12 grid-cols-1 gap-6">
          <div className="md:col-span-4 col-span-1 bg-default-100 dark:bg-white/3 rounded-md p-6 flex flex-col justify-center items-center !h-full">
            <div className="text-4xl font-semibold text-default-900 pb-2 mb-1">4.5</div>
            <div className="flex justify-center gap-1 text-sm mb-2">
              <Star className="fill-warning text-warning size-4" />
              <Star className="fill-warning text-warning size-4" />
              <Star className="fill-warning text-warning size-4" />
              <Star className="fill-warning text-warning size-4" />
              <StarHalf className="text-warning size-4" />
            </div>
            <div className="text-sm">176 reviews</div>
          </div>
          <div className="md:col-span-8 col-span-1">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="flex items-center text-sm gap-1">
                  5<Star className="fill-warning text-warning size-4" />
                </div>
                <div className="flex-1 h-1 bg-default-200 rounded-full overflow-hidden" aria-label="Five stars">
                  <div className="bg-warning h-1 rounded-full" style={{ width: '65%' }} />
                </div>
                <div className="text-sm text-nowrap text-right w-10">128</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center text-sm gap-1">
                  4<Star className="fill-warning text-warning size-4" />
                </div>
                <div className="flex-1 h-1 bg-default-200 rounded-full overflow-hidden" aria-label="Four stars">
                  <div className="bg-warning h-1 rounded-full" style={{ width: '21%' }} />
                </div>
                <div className="text-sm text-nowrap text-right w-10">27</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center text-sm gap-1">
                  3<Star className="fill-warning text-warning size-4" />
                </div>
                <div className="flex-1 h-1 bg-default-200 rounded-full overflow-hidden" aria-label="Three stars">
                  <div className="bg-warning h-1 rounded-full" style={{ width: '10%' }} />
                </div>
                <div className="text-sm text-nowrap text-right w-10">13</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center text-sm gap-1">
                  2<Star className="fill-warning text-warning size-4" />
                </div>
                <div className="flex-1 h-1 bg-default-200 rounded-full overflow-hidden" aria-label="Two stars">
                  <div className="bg-warning h-1 rounded-full" style={{ width: '5%' }} />
                </div>
                <div className="text-sm text-nowrap text-right w-10">6</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center text-sm gap-1">
                  1<Star className="fill-warning text-warning size-4" />
                </div>
                <div className="flex-1 h-1 bg-default-200 rounded-full overflow-hidden" aria-label="One star">
                  <div className="bg-warning h-1 rounded-full" style={{ width: '2.6%' }} />
                </div>
                <div className="text-sm text-nowrap text-right w-10">2</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-6 flex-col">
          <div className="flex flex-col gap-2 mb-2 sm:mb-2">
            <div className="flex items-center gap-4 mb-1">
              <h6 className="text-default-900 font-semibold">Randy W.</h6>
              <span className="text-xs text-default-500">November 19, 2024</span>
            </div>
            <div className="flex gap-1 text-sm mb-1">
              <Star className="fill-warning text-warning size-4" />
              <Star className="fill-warning text-warning size-4" />
              <Star className="fill-warning text-warning size-4" />
              <Star className="fill-warning text-warning size-4" />
              <Star className="fill-warning text-warning size-4" />
            </div>
            <p className="text-sm mb-1">
              From start to finish, his cooperation was incredibly smooth. The pricing was quite reasonable, and the task was completed efficiently and with a high level of cleanliness. I'm delighted that we chose Mike over the other companies we considered based on quotes.
            </p>
            <div className="flex items-center">
              <button type="button" className="flex items-center py-2 text-sm text-default-500 transition -me-1">
                <ThumbsUp className="size-3.5 me-1" /> 6
              </button>
              <div className="h-5 w-px bg-default-300 dark:bg-white/20 mx-4 my-2" />
              <button type="button" className="flex items-center py-2 text-sm text-default-500 transition -ms-1">
                <ThumbsDown className="size-3.5 me-1" /> 0
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2 mb-2 sm:mb-2">
            <div className="flex items-center gap-4 mb-1">
              <h6 className="text-default-900 font-semibold">Lora Palmer</h6>
              <span className="text-xs text-default-500">November 10, 2024</span>
            </div>
            <div className="flex gap-1 text-sm mb-1">
              <Star className="fill-warning text-warning size-4" />
              <Star className="fill-warning text-warning size-4" />
              <Star className="fill-warning text-warning size-4" />
              <Star className="fill-warning text-warning size-4" />
              <Star className="fill-warning text-warning size-4" />
            </div>
            <p className="text-sm mb-1">He was absolutely amazing very professional. I highly recommend hirings Mike.</p>
            <div className="flex items-center">
              <button type="button" className="flex items-center py-2 text-sm text-default-500 transition -me-1">
                <ThumbsUp className="size-3.5 me-1" /> 13
              </button>
              <div className="h-5 w-px bg-default-300 dark:bg-white/20 mx-4 my-2" />
              <button type="button" className="flex items-center py-2 text-sm text-default-500 transition -ms-1">
                <ThumbsDown className="size-3.5 me-1" /> 2
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2 mb-2 sm:mb-2">
            <div className="flex items-center gap-4 mb-1">
              <h6 className="text-default-900 font-semibold">Melissa Smith</h6>
              <span className="text-xs text-default-500">November 5, 2024</span>
            </div>
            <div className="flex gap-1 text-sm mb-1">
              <Star className="fill-warning text-warning size-4" />
              <Star className="fill-warning text-warning size-4" />
              <Star className="fill-warning text-warning size-4" />
              <Star className="fill-warning text-warning size-4" />
              <Star className="fill-warning text-warning size-4" />
            </div>
            <p className="text-sm mb-1">Mike delivered exceptional work at an excellent price. I highly recommend him. They completed the job in just four days, and after a full year, there have been no issues.</p>
            <div className="flex items-center">
              <button type="button" className="flex items-center py-2 text-sm text-default-500 transition -me-1">
                <ThumbsUp className="size-3.5 me-1" /> 8
              </button>
              <div className="h-5 w-px bg-default-300 dark:bg-white/20 mx-4 my-2" />
              <button type="button" className="flex items-center py-2 text-sm text-default-500 transition -ms-1">
                <ThumbsDown className="size-3.5 me-1" /> 0
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2 mb-2 sm:mb-2">
            <div className="flex items-center gap-4 mb-1">
              <h6 className="text-default-900 font-semibold">Alice Cooper</h6>
              <span className="text-xs text-default-500">October 23, 2024</span>
            </div>
            <div className="flex gap-1 text-sm mb-1">
              <Star className="fill-warning text-warning size-4" />
              <Star className="fill-warning text-warning size-4" />
              <Star className="fill-warning text-warning size-4" />
              <Star className="fill-warning text-warning size-4" />
              <Star className="fill-warning text-warning size-4" />
            </div>
            <p className="text-sm mb-1">
              Mike's service was exceptional, he is true professional. Discovered him on the website, took a chance, and without a doubt, he not only met but exceeded our expectations. I'm more than pleased to write a glowing review for Mike. As a highly satisfied customer, I can
              confidently say that he has definitely earned it.
            </p>
            <div className="flex items-center">
              <button type="button" className="flex items-center py-2 text-sm text-default-500 transition -me-1">
                <ThumbsUp className="size-3.5 me-1" /> 27
              </button>
              <div className="h-5 w-px bg-default-300 dark:bg-white/20 mx-4 my-2" />
              <button type="button" className="flex items-center py-2 text-sm text-default-500 transition -ms-1">
                <ThumbsDown className="size-3.5 me-1" /> 3
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2 mb-2 sm:mb-2">
            <div className="flex items-center gap-4 mb-1">
              <h6 className="text-default-900 font-semibold">Natalia D.</h6>
              <span className="text-xs text-default-500">October 7, 2024</span>
            </div>
            <div className="flex gap-1 text-sm mb-1">
              <Star className="fill-warning text-warning size-4" />
              <Star className="fill-warning text-warning size-4" />
              <Star className="fill-warning text-warning size-4" />
              <Star className="fill-warning text-warning size-4" />
              <Star className="text-warning size-4" />
            </div>
            <p className="text-sm mb-1">
              Mike exhibited great professionalism and politeness. I hired him to replace the door springs, which he did efficiently in a short amount of time. I would wholeheartedly recommend his services to anyone. I'm delighted that everything is now functioning like new
              again.
            </p>
            <div className="flex items-center">
              <button type="button" className="flex items-center py-2 text-sm text-default-500 transition -me-1">
                <ThumbsUp className="size-3.5 me-1" /> 15
              </button>
              <div className="h-5 w-px bg-default-300 dark:bg-white/20 mx-4 my-2" />
              <button type="button" className="flex items-center py-2 text-sm text-default-500 transition -ms-1">
                <ThumbsDown className="size-3.5 me-1" /> 0
              </button>
            </div>
          </div>
          <nav className="flex items-center gap-x-1 py-1" aria-label="Pagination">
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
                36
              </button>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Review
