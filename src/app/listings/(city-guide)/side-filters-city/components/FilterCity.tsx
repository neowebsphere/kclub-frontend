'use client'
import Flatpickr from '@/components/wrappers/Flatpickr'
import { Icon } from '@iconify/react'
import { Calendar, Star, X } from 'lucide-react'
import dynamic from 'next/dynamic'
import Link from 'next/link'

const Nouislider = dynamic(() => import('nouislider-react'), { ssr: false })

type FilterCityProps = {
  priceRange: number[]
  setPriceRange: (value: number[]) => void
}

const FilterCity = ({ priceRange, setPriceRange }: FilterCityProps) => {
  return (
    <>
      <div>
        <div
          id="accountSidebar"
          className="hs-overlay lg:static [--auto-close:lg] lg:block lg:translate-x-0 lg:end-auto lg:bottom-auto hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform  hidden fixed top-0 start-0 bottom-0 z-60 bg-body-bg lg:w-auto w-87"
          role="dialog"
          tabIndex={-1}
          aria-label="Sidebar"
        >
          <div className="flex flex-col lg:sticky lg:h-full h-screen top-0">
            <header className="py-4 px-6 lg:px-0 lg:py-0 flex justify-between items-center gap-x-2 lg:border-none border-b border-default-200 shrink-0">
              <Link className="focus:outline-hidden focus:opacity-80 " href="" aria-label="Brand">
                <h3 className="text-xl font-semibold text-default-900 lg:hidden block">Filters</h3>
              </Link>
              <div className="lg:hidden -me-2">
                <button type="button" data-hs-overlay="#accountSidebar">
                  <X className="size-5" />
                  <span className="sr-only">Close</span>
                </button>
              </div>
            </header>
            <nav className="h-full overflow-y-auto flex-1" data-simplebar>
              <div className="w-full flex flex-col flex-wrap px-6 lg:px-0 pb-4 lg:pb-0 pt-6">
                <div className="mb-4 pb-6">
                  <div className="flex justify-between items-center gap-4 mb-4">
                    <h4 className="text-default-900 font-semibold">Filter</h4>
                    <div>
                      <Link className="underline hover:no-underline text-default-800 text-xs" href="">
                        Clear all
                      </Link>
                    </div>
                  </div>
                  <div className="flex gap-2 pb-4 flex-wrap mb-6">
                    <button className="text-xs py-2 px-4 bg-default-100 font-semibold dark:bg-default-200 rounded-full inline-flex justify-center items-center transition-all duration-500 ease-in-out hover:bg-default-200 dark:hover:bg-default-300">
                      <X className="size-3.5 me-1" />
                      Barcelona
                    </button>
                    <button className="text-xs py-2 px-4 bg-default-100 font-semibold dark:bg-default-200 rounded-full inline-flex justify-center items-center transition-all duration-500 ease-in-out hover:bg-default-200 dark:hover:bg-default-300">
                      <X className="size-3.5 me-1" />
                      Entertainment
                    </button>
                    <button className="text-xs py-2 px-4 bg-default-100 font-semibold dark:bg-default-200 rounded-full inline-flex justify-center items-center transition-all duration-500 ease-in-out hover:bg-default-200 dark:hover:bg-default-300">
                      <X className="size-3.5 me-1" />
                      $5 - $150
                    </button>
                    <button className="text-xs py-2 px-4 bg-default-100 font-semibold dark:bg-default-200 rounded-full inline-flex justify-center items-center transition-all duration-500 ease-in-out hover:bg-default-200 dark:hover:bg-default-300">
                      <X className="size-3.5 me-1" />
                      5<Star className="fill-warning text-warning ms-2 size-3" />
                    </button>
                    <button className="text-xs py-2 px-4 bg-default-100 font-semibold dark:bg-default-200 rounded-full inline-flex justify-center items-center transition-all duration-500 ease-in-out hover:bg-default-200 dark:hover:bg-default-300">
                      <X className="size-3.5 me-1" />
                      4 <Star className="fill-warning text-warning ms-2 size-3" />
                    </button>
                  </div>
                  <div className="relative">
                    <Icon icon="lucide:search" className="absolute start-4 top-1/2 -translate-y-1/2 text-default-500" />
                    <input type="search" placeholder="Search by keywords" className="w-full rounded-full border border-default-300 dark:border-white/20 bg-transparent text-sm ps-10 pe-4 py-2.25" />
                  </div>
                </div>
                <div className="mb-4 pb-6">
                  <h4 className="font-semibold mb-4 text-default-900">Location and date</h4>
                  <div className="flex flex-col gap-4">
                    <div className="relative">
                      <Icon icon="lucide:map-pin" className="absolute start-4 top-1/2 -translate-y-1/2 text-default-500 z-10" />
                      <select className="w-full rounded-full border border-default-300 dark:border-white/20 ps-10 pe-4 text-sm py-2.25 bg-transparent text-default-700" aria-label="Location select">
                        <option>Any location</option>
                        <option value="Paris">Paris</option>
                        <option value="Rome">Rome</option>
                        <option value="Barcelona" defaultChecked>
                          Barcelona
                        </option>
                        <option value="London">London</option>
                        <option value="Amsterdam">Amsterdam</option>
                        <option value="Berlin">Berlin</option>
                        <option value="Prague">Prague</option>
                        <option value="Venice">Venice</option>
                        <option value="Vienna">Vienna</option>
                        <option value="Florence">Florence</option>
                      </select>
                    </div>
                    <div className="relative">
                      <Calendar className="absolute start-4 top-1/2 -translate-y-1/2 text-default-500 size-3.5" />
                      <Flatpickr
                        type="text"
                        placeholder="Choose date"
                        options={{ dateFormat: 'd M, Y', defaultDate: 'today' }}
                        className="form-input w-full text-sm rounded-full border border-default-300  dark:border-white/20 ps-10 pe-4 py-2.25 text-default-700 bg-transparent"
                        readOnly
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-4 pb-6">
                  <h4 className="font-semibold mb-4 text-default-900">Category</h4>
                  <ul className="flex flex-col gap-2">
                    <li>
                      <Link href="" className="flex items-center py-1 px-0 text-default-700 hover:text-default-900">
                        <svg className="shrink-0 text-light-emphasis me-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.863 9.137l-.613-.613V3.582C23.25 1.607 21.643 0 19.669 0a3.56 3.56 0 0 0-2.164.73C14.853-.572 11.552-.122 9.35 2.08c-2.359 2.359-2.707 5.977-1.047 8.709l-2.686 2.686H4.483a.47.47 0 0 0-.469.469v.86h-.86a.47.47 0 0 0-.469.469v.86h-.86a.47.47 0 0 0-.469.469v.86h-.86a.47.47 0 0 0-.331.137l-.028.028a.47.47 0 0 0-.137.331V21a.47.47 0 0 0 .469.469h3.098a.47.47 0 0 0 .331-.137l5.171-5.171a.47.47 0 0 0 0-.663.47.47 0 0 0-.663 0l-5.033 5.033H.937v-2.132h.888a.47.47 0 0 0 .469-.469v-.86h.86a.47.47 0 0 0 .469-.469v-.86h.86a.47.47 0 0 0 .469-.469v-.86h.86a.47.47 0 0 0 .331-.137l2.708-2.708a7.19 7.19 0 0 0 .499.554 7.05 7.05 0 0 0 4.713 2.073v7.837A1.97 1.97 0 0 0 16.032 24h6A1.97 1.97 0 0 0 24 22.031V9.469a.47.47 0 0 0-.137-.331zm-4.194-8.2a2.65 2.65 0 0 1 2.644 2.644v4.005l-.843-.843c-.1-1.705-.789-3.373-2.079-4.663-.308-.308-.638-.582-.985-.821a2.63 2.63 0 0 1 1.263-.321zm-2.644 3.975V3.878a1.13 1.13 0 0 1 .67 1.035 1.13 1.13 0 0 1-.333.804 1.14 1.14 0 0 1-1.607 0 1.14 1.14 0 0 1 0-1.607 1.13 1.13 0 0 1 .332-.229v1.033a.47.47 0 0 0 .469.469.47.47 0 0 0 .469-.469zm-2.655 8.347c-1.578 0-3.156-.601-4.357-1.802a6.17 6.17 0 0 1 0-8.715A6.12 6.12 0 0 1 14.37.939a6.15 6.15 0 0 1 2.433.497 3.56 3.56 0 0 0-.646 1.443 2.06 2.06 0 0 0-1.065.567c-.809.809-.809 2.124 0 2.933.404.404.935.606 1.466.606s1.062-.202 1.466-.606a2.06 2.06 0 0 0 .607-1.466 2.06 2.06 0 0 0-.607-1.466 2.06 2.06 0 0 0-.915-.532 2.65 2.65 0 0 1 .537-1.035 6.21 6.21 0 0 1 1.08.864 6.12 6.12 0 0 1 1.805 4.357 6.12 6.12 0 0 1-1.805 4.357 6.14 6.14 0 0 1-4.357 1.802zm8.693 8.77c0 .569-.463 1.031-1.031 1.031h-6c-.569 0-1.031-.463-1.031-1.031v-7.858a7.04 7.04 0 0 0 4.39-2.052c1.153-1.153 1.826-2.608 2.018-4.113l1.654 1.654v12.368zM11.983 4.715a.47.47 0 0 0 0-.663.47.47 0 0 0-.663 0 4.32 4.32 0 0 0 0 6.099.47.47 0 0 0 .332.137c.12 0 .24-.046.331-.137a.47.47 0 0 0 0-.663 3.38 3.38 0 0 1 0-4.773zm1.491 5.645a.47.47 0 0 0-.583.325.47.47 0 0 0 .327.577c.043.012.086.018.128.018a.47.47 0 0 0 .45-.34.47.47 0 0 0-.322-.58zm7.549 10.171h-3.984a.47.47 0 0 0-.469.469.47.47 0 0 0 .469.469h3.984a.47.47 0 0 0 .469-.469.47.47 0 0 0-.469-.469zm-10.752-6.236a.47.47 0 0 0-.663 0 .47.47 0 0 0 .331.8.47.47 0 0 0 .332-.8z" />
                        </svg>
                        <span className="text-sm font-normal">Accommodation</span>
                        <span className="ms-auto text-default-400 text-sm">532</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="" className="flex items-center py-1 px-0 text-default-700 hover:text-default-900">
                        <svg className="shrink-0 text-light-emphasis me-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.907 22.579l-.469-15c-.024-.78-.642-1.392-1.406-1.392h-2.109 0V4.922A4.93 4.93 0 0 0 12.001 0a4.93 4.93 0 0 0-4.922 4.922v1.266h-2.11c-.764 0-1.382.611-1.406 1.392l-.469 15a1.35 1.35 0 0 0 .387.988c.266.275.638.432 1.019.432h15c.381 0 .753-.158 1.019-.433a1.35 1.35 0 0 0 .387-.988zM8.016 4.922A3.99 3.99 0 0 1 12.001.937a3.99 3.99 0 0 1 3.984 3.984V8.53a.47.47 0 0 1-.469.469.47.47 0 0 1-.469-.469V4.922A3.05 3.05 0 0 0 12 1.875a3.05 3.05 0 0 0-3.047 3.047v3.609A.47.47 0 0 1 8.485 9a.47.47 0 0 1-.469-.469V4.922zm6.094 1.266H9.891h0V4.922A2.11 2.11 0 0 1 12 2.813a2.11 2.11 0 0 1 2.109 2.109v1.266zm5.736 16.727c-.091.094-.217.148-.346.148h-15a.49.49 0 0 1-.346-.147.42.42 0 0 1-.123-.307l.015-.483h2.469a.47.47 0 0 0 .469-.469.47.47 0 0 0-.469-.469h-2.44L4.5 7.608c.008-.271.214-.483.469-.483h2.109v1.406a1.41 1.41 0 0 0 1.406 1.406A1.41 1.41 0 0 0 9.89 8.531V7.125h4.219v1.406a1.41 1.41 0 0 0 1.406 1.406 1.41 1.41 0 0 0 1.406-1.406V7.125h0 2.109c.255 0 .46.212.469.483l.469 15a.42.42 0 0 1-.123.307zm-7.551-10.076c-.193.192-.442.146-.588 0-1.113-1.109-2.924-1.109-4.037 0-.779.776-1.029 1.791-.723 2.934.647 2.418 3.628 4.854 4.933 5.203a.47.47 0 0 0 .242 0c1.305-.349 4.286-2.785 4.933-5.203.306-1.143.056-2.157-.723-2.934-1.113-1.109-2.924-1.11-4.037 0zm3.854 2.691c-.544 2.034-3.081 4.111-4.148 4.501-1.067-.39-3.604-2.467-4.148-4.501-.22-.823-.064-1.486.479-2.027.374-.373.865-.559 1.357-.559s.983.186 1.357.559a1.34 1.34 0 0 0 1.912 0c.748-.746 1.965-.746 2.713 0 .543.541.699 1.204.479 2.027zm-7.524 5.658a.47.47 0 0 0-.469.469.47.47 0 0 0 .469.469h0a.47.47 0 0 0 .469-.469.47.47 0 0 0-.469-.469z" />
                        </svg>
                        <span className="text-sm font-normal">Shopping</span>
                        <span className="ms-auto text-default-400 text-sm">108</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="" className="flex items-center py-1 px-0 text-default-700 hover:text-default-900">
                        <svg className="shrink-0 text-light-emphasis me-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M16.609 13.116a.47.47 0 0 0 .469-.469.47.47 0 0 0-.469-.469.47.47 0 0 0-.469.469.47.47 0 0 0 .469.469zm4.663-.469a.47.47 0 0 0-.47-.47h-2.076a.47.47 0 1 0 0 .94h1.593c-.244 4.377-3.882 7.863-8.319 7.863s-8.075-3.486-8.319-7.863h10.812a.47.47 0 1 0 0-.94h-1.671c.039-.273.141-.438.272-.649.192-.309.43-.694.43-1.408s-.239-1.099-.43-1.408c-.168-.271-.289-.466-.289-.913s.121-.642.289-.913c.192-.309.43-.694.43-1.408s-.239-1.099-.43-1.408a2.44 2.44 0 0 1-.189-.343l7.464 1.178a.47.47 0 0 0 .073-.934L12.866 2.77l.116-.784L20.476.935a.47.47 0 0 0 .4-.53.47.47 0 0 0-.53-.4L7.038 1.871c-.235.033-.413.246-.404.483.003.733.213 1.132.399 1.484.163.309.291.552.291 1.064 0 .503-.131.733-.298 1.023a2.67 2.67 0 0 0-.422 1.49 2.67 2.67 0 0 0 .422 1.49c.166.29.298.52.298 1.023s-.131.733-.298 1.023-.365.637-.412 1.226H3.198a.47.47 0 0 0-.47.47c0 3.526 1.979 6.599 4.884 8.166v2.717a.47.47 0 0 0 .47.47h7.836a.47.47 0 0 0 .47-.47v-2.717c2.905-1.567 4.884-4.64 4.884-8.166zm-9.407-9.49c0 .714.239 1.099.43 1.408.168.271.289.467.289.913s-.121.642-.289.913c-.192.309-.43.694-.43 1.408s.239 1.099.43 1.408c.168.271.289.466.289.913s-.121.642-.289.913-.368.595-.419 1.144h-1.745c.039-.297.147-.476.276-.691.19-.317.427-.71.427-1.439s-.237-1.123-.427-1.439c-.164-.272-.293-.487-.293-.955s.129-.683.293-.956c.19-.317.427-.71.427-1.44s-.237-1.123-.427-1.44c-.164-.272-.293-.487-.293-.956v-.473l1.897-.266-.147 1.036zM7.842 8.439c-.166-.29-.298-.52-.298-1.023s.131-.733.298-1.023a2.67 2.67 0 0 0 .422-1.49c0-.745-.212-1.147-.4-1.502-.113-.214-.209-.397-.258-.661l1.569-.22v.342c0 .729.237 1.123.427 1.44.164.272.293.487.293.956s-.129.683-.293.956c-.19.317-.427.71-.427 1.44s.237 1.123.427 1.439c.164.272.293.487.293.955s-.129.683-.293.956-.367.611-.416 1.175H7.559c.038-.33.149-.525.284-.759a2.67 2.67 0 0 0 .422-1.49 2.67 2.67 0 0 0-.422-1.49zm7.606 14.622H8.552v-1.807c1.066.429 2.23.665 3.448.665s2.382-.237 3.448-.665v1.807zm-7.49-8.684a.47.47 0 1 0 0 .94h8.084a.47.47 0 1 0 0-.94H7.958z" />
                        </svg>
                        <span className="text-sm font-normal">Food &amp; Drink</span>
                        <span className="ms-auto text-default-400 text-sm">260</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="" className="flex items-center py-1 px-0 text-default-900 font-semibold">
                        <svg className="shrink-0 text-light-emphasis me-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.618 5.247a4.84 4.84 0 0 0-1.553-.164C16.923 2.255 14.693 0 11.974 0 9.634 0 7.657 1.668 7.06 3.935a4.84 4.84 0 0 0-1.582.162c-.157.043-.314.094-.469.154a.47.47 0 0 0 .168.907.47.47 0 0 0 .168-.031l.379-.124c.386-.105.779-.15 1.173-.136l-.023.505c0 2.468 1.557 5.36 3.694 6.285l-.217 1.136c-.511 1.032-1.244 1.724-2.069 1.949a2.5 2.5 0 0 1-.731.085c-.672-.021-1.279-.281-1.718-.535-1.393-.804-2.6-2.374-3.003-3.907a4.6 4.6 0 0 1 .152-2.854.47.47 0 0 0-.267-.607.47.47 0 0 0-.607.267 5.53 5.53 0 0 0-.185 3.433c.463 1.759 1.846 3.56 3.441 4.48.578.334 1.16.542 1.727.623l.133 1.942a.47.47 0 0 0 .591.42l.901-.245c.384.816.476 1.617.564 2.394.095.836.185 1.626.612 2.377a.47.47 0 0 0 .639.177.47.47 0 0 0 .176-.639c-.332-.584-.407-1.249-.495-2.02s-.187-1.637-.579-2.538l.715-.195a.47.47 0 0 0 .299-.655l-.843-1.756c.299-.237.577-.526.827-.86l.031.002h.935c.165.891.049 1.69-.063 2.466-.121.833-.235 1.619-.014 2.456a.47.47 0 0 0 .453.349.45.45 0 0 0 .12-.016.47.47 0 0 0 .334-.573c-.172-.652-.076-1.315.036-2.082s.236-1.629.087-2.601h.372c.247.813.733 1.519 1.367 2.017l-.838 1.747a.47.47 0 0 0 .299.655l.715.195c-.393.901-.491 1.763-.579 2.538-.088.77-.164 1.435-.495 2.02a.47.47 0 0 0 .407.7.47.47 0 0 0 .408-.237c.426-.751.516-1.54.612-2.376.089-.777.18-1.578.564-2.394l.901.245a.47.47 0 0 0 .591-.42l.133-1.942c.305-.044.615-.125.929-.243 1.904-.718 3.687-2.763 4.24-4.861.753-2.858-.842-5.786-3.555-6.525zm-9.06 11.394l-1.438.392-.089-1.293c.168-.02.334-.051.497-.096A3.32 3.32 0 0 0 9 15.476l.559 1.165zm1.671-3.45l.244-1.273c.165.025.332.038.5.038s.334-.013.5-.038l.243 1.273H11.23zm3.308 4.6l.558-1.163a3.52 3.52 0 0 0 .472.166 3.49 3.49 0 0 0 .497.096l-.089 1.292-1.438-.392zm6.729-6.258c-.474 1.798-2.049 3.613-3.664 4.223-.356.135-.703.208-1.036.219h-.026c-.25.006-.493-.022-.727-.086-1.025-.279-1.838-1.191-2.07-2.324l-.365-1.909.359-.176a.47.47 0 0 0 .185-.636.47.47 0 0 0-.637-.185 3.03 3.03 0 0 1-.575.246c-.248.076-.494.113-.738.113-1.012 0-2.066-.672-2.891-1.844C8.285 8.043 7.81 6.621 7.81 5.37c0-2.444 1.867-4.433 4.161-4.433s4.161 1.989 4.161 4.433c0 .833-.219 1.776-.616 2.653a.47.47 0 0 0 .233.62.47.47 0 0 0 .62-.233 7.9 7.9 0 0 0 .663-2.386c.449-.035.897.007 1.336.127 2.219.605 3.517 3.019 2.895 5.382zM3.58 6.211c.113 0 .225-.04.315-.122h0a.47.47 0 0 0 .031-.662.47.47 0 0 0-.662-.031.47.47 0 0 0-.032.662c.092.102.22.153.347.153zM15.254 9.47a.47.47 0 0 0-.66.06h0a.47.47 0 0 0 .36.769.47.47 0 0 0 .301-.829z" />
                        </svg>
                        <span className="text-sm font-semibold">Entertainment</span>
                        <span className="ms-auto text-default-400 text-sm">347</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="" className="flex items-center py-1 px-0 text-default-700 hover:text-default-900">
                        <svg className="shrink-0 text-light-emphasis me-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M13.109 7.163h-2.662a.47.47 0 0 0-.469.469v1.612H8.363a.47.47 0 0 0-.469.469v2.659a.47.47 0 0 0 .469.469h1.614v1.612a.47.47 0 0 0 .469.469h2.662a.47.47 0 0 0 .469-.469V12.84h1.613a.47.47 0 0 0 .469-.469V9.712a.47.47 0 0 0-.469-.469h-1.613V7.631a.47.47 0 0 0-.469-.469zm1.613 3.018v1.722h-1.613a.47.47 0 0 0-.469.469v1.612h-1.725v-1.612a.47.47 0 0 0-.469-.469H8.832v-1.722h1.614a.47.47 0 0 0 .469-.469V8.1h1.725v1.612a.47.47 0 0 0 .469.469h1.613zm6.427 3.605l.324-.312c2.768-2.864 2.768-7.505.012-10.358-1.159-1.199-2.751-1.821-4.481-1.75-1.655.068-3.255.748-4.504 1.915l-.089.083c-.259.242-.527.492-.635.539-.109-.047-.376-.297-.635-.539l-.088-.083c-1.25-1.167-2.849-1.847-4.504-1.915-1.731-.071-3.322.551-4.48 1.75-2.758 2.852-2.758 7.494 0 10.346l2.313 2.23c.091.088.208.131.325.131a.47.47 0 0 0 .325-.806l-2.295-2.213C.332 10.311.334 6.259 2.742 3.768c1.95-2.019 5.391-1.93 7.67.199l.088.082c.549.513.851.796 1.275.796s.726-.283 1.275-.796l.088-.082c2.279-2.129 5.72-2.218 7.672-.199 2.407 2.491 2.409 6.544.006 9.037l-.715.688a4.63 4.63 0 0 0-.708-.054 4.61 4.61 0 0 0-4.604 4.599 4.63 4.63 0 0 0 .032.544l-3.046 2.937-3.717-3.582a.47.47 0 0 0-.663.012.47.47 0 0 0 .012.663l4.043 3.896c.091.088.208.131.325.131a.47.47 0 0 0 .325-.131l2.975-2.869c.652 1.75 2.341 3.001 4.317 3.001A4.61 4.61 0 0 0 24 18.038c0-1.916-1.179-3.562-2.851-4.252zm-1.755 7.916a3.67 3.67 0 0 1-3.667-3.663 3.67 3.67 0 0 1 3.667-3.662 3.67 3.67 0 0 1 3.668 3.662 3.67 3.67 0 0 1-3.668 3.663zm.001-6.101a.47.47 0 0 0-.469.469v1.971a.47.47 0 0 0 .469.469.47.47 0 0 0 .469-.469V16.07a.47.47 0 0 0-.469-.469zm0 3.935a.47.47 0 0 0-.469.469v.003c0 .259.21.467.469.467a.47.47 0 0 0 .469-.47.47.47 0 0 0-.469-.469zM5.889 16.484a.47.47 0 0 0 0 .663l.001.001c.091.091.211.137.33.137a.47.47 0 1 0-.332-.801z" />
                        </svg>
                        <span className="text-sm font-normal">Health</span>
                        <span className="ms-auto text-default-400 text-sm">54</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="mb-4 pb-6">
                  <h4 className="font-semibold mb-4 pb-2">Price</h4>
                  <Nouislider range={{ min: 0, max: 200 }} start={priceRange} connect tooltips onSlide={(values) => setPriceRange(values.map(Number))} className="slider mt-10" />
                </div>
                <div>
                  <h4 className="font-semibold mb-4 pb-2">Average rating</h4>
                  <div className="flex flex-col gap-3">
                    <label htmlFor="star-5" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                      <input type="checkbox" id="star-5" defaultChecked className="w-4 h-4 bg-transparent border-default-300 rounded text-black focus:ring-black" />
                      5
                      <Star className="fill-warning text-warning size-3.5 ms-1" />
                    </label>
                    <label htmlFor="star-4" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                      <input type="checkbox" id="star-4" defaultChecked className="w-4 h-4 bg-transparent border-default-300 rounded text-black focus:ring-black" />
                      4 <Star className="fill-warning text-warning size-3.5 ms-1" />
                    </label>
                    <label htmlFor="star-3" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                      <input type="checkbox" id="star-3" className="w-4 h-4 bg-transparent border-default-300 rounded text-black focus:ring-black" />
                      3 <Star className="fill-warning text-warning size-3.5 ms-1" />
                    </label>
                    <label htmlFor="star-2" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                      <input type="checkbox" id="star-2" className="w-4 h-4 bg-transparent border-default-300 rounded text-black focus:ring-black" />
                      2-1 <Star className="fill-warning text-warning size-3.5 ms-1" />
                    </label>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default FilterCity
