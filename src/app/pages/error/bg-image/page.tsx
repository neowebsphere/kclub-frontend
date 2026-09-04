import bgImg from '@/assets/img/404/bg-image.jpg'
import Topbar from '@/components/topbar'
import { Plus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const Page = () => {
  return (
    <>
      <Topbar
        className="bg-white shadow-sm dark:bg-[#121519]"
        showSignIn
        ButtonClassName="rounded-md"
        ButtonText={
          <>
            Add
            <span className="lg:block hidden ms-1">property</span>
          </>
        }
        ButtonIcon={<Plus className="size-4 me-2" />}
      />
      <section className="h-screen relative">
        <Image src={bgImg} className="w-full h-full object-cover" alt="Background image" />
        <div className="absolute top-0 start-0 w-full h-full bg-black/30" />
        <div className="container absolute top-0 -translate-x-1/2 start-1/2">
          <div className="relative z-20 text-center">
            <div className="lg:pt-78 md:pt-65 pt-50">
              <svg className="text-white mt-2 mx-auto md:w-96 w-85.75" xmlns="http://www.w3.org/2000/svg" width={384} viewBox="0 0 384 144" fill="none">
                <path d="M269.006 118.216V94.482L328.516.727h20.463V33.58h-12.111L299.352 92.95v1.114h84.567v24.152H269.006zm68.419 25.057v-32.296l.557-10.51V.727h28.258v142.546h-28.815z" fill="currentColor" />
                <g clipPath="url(#A)">
                  <path
                    d="M193.5 7a64.5 64.5 0 0 0-59.59 39.817c-4.882 11.786-6.159 24.755-3.671 37.266s8.632 24.005 17.653 33.025 20.513 15.164 33.025 17.653 25.48 1.211 37.266-3.671 21.859-13.149 28.947-23.756A64.5 64.5 0 0 0 258 71.5 64.57 64.57 0 0 0 193.5 7zm0 118.25c-10.631 0-21.023-3.152-29.862-9.059s-15.728-14.3-19.796-24.122-5.133-20.629-3.059-31.055a53.75 53.75 0 0 1 14.71-27.521c7.517-7.517 17.094-12.636 27.521-14.71a53.75 53.75 0 0 1 31.055 3.059c9.822 4.068 18.216 10.958 24.123 19.797A53.75 53.75 0 0 1 247.25 71.5c-.016 14.251-5.684 27.913-15.76 37.99s-23.739 15.744-37.99 15.76zm0-80.625a16.09 16.09 0 0 0-15.885 13.361c-.644 3.744.058 7.596 1.982 10.872a16.09 16.09 0 0 0 8.528 7.028v22.489h10.75V75.886c3.583-1.262 6.605-3.752 8.528-7.028s2.626-7.127 1.982-10.872A16.09 16.09 0 0 0 193.5 44.625zm0 21.5c-1.063 0-2.102-.315-2.986-.906s-1.573-1.43-1.98-2.412-.513-2.063-.306-3.105.72-2 1.471-2.752a5.38 5.38 0 0 1 2.752-1.471c1.043-.207 2.124-.101 3.106.306a5.37 5.37 0 0 1 3.318 4.966c0 1.425-.566 2.793-1.574 3.801s-2.375 1.574-3.801 1.574z"
                    fill="currentColor"
                  />
                </g>
                <path d="M.08 118.216V94.482L59.59.727h20.463V33.58H67.942L30.427 92.95v1.114h84.566v24.152H.08zm68.419 25.057v-32.296l.557-10.51V.727h28.259v142.546H68.499z" fill="currentColor" />
                <defs>
                  <clipPath id="A">
                    <path fill="currentColor" transform="translate(129 7)" d="M0 0h129v129H0z" />
                  </clipPath>
                </defs>
              </svg>
              <h1 className="md:pt-12 pt-8 mb-4 pb-4 text-white md:text-2xl text-xl font-semibold">Sorry, this door is locked</h1>
              <Link className="py-3.5 px-6 text-white bg-primary font-semibold inline-flex hover:bg-primary-hover rounded-md" href="/home/real-estate">
                Go to homepage
              </Link>
            </div>
            <div className="py-8">
              <div className="md:pb-4">
                <p className="text-sm text-white/80">
                  © All rights reserved. Made by
                  <Link className=" text-white font-medium hover:underline" href="" target="_blank" rel="noreferrer">
                    Coderthemes
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Page
