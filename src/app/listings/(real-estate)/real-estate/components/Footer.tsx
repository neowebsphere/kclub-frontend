import { Icon } from '@iconify/react'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
      <div className="md:pt-12 pt-6 text-center">
        <hr className="text-default-200 dark:text-white/20 my-6 pb-6" />
        <Link className="inline-flex items-center text-dark-emphasis mb-6" href="/">
          <span className="shrink-0 text-primary me-2">
            <svg xmlns="http://www.w3.org/2000/svg" width={35} height={34}>
              <path d="M34.5 16.894v10.731c0 3.506-2.869 6.375-6.375 6.375H17.5h-.85C7.725 33.575.5 26.138.5 17c0-9.35 7.65-17 17-17s17 7.544 17 16.894z" fill="currentColor" />
              <g fillRule="evenodd">
                <path
                  d="M17.5 13.258c-3.101 0-5.655 2.554-5.655 5.655s2.554 5.655 5.655 5.655 5.655-2.554 5.655-5.655-2.554-5.655-5.655-5.655zm-9.433 5.655c0-5.187 4.246-9.433 9.433-9.433s9.433 4.246 9.433 9.433a9.36 9.36 0 0 1-1.569 5.192l2.397 2.397a1.89 1.89 0 0 1 0 2.671 1.89 1.89 0 0 1-2.671 0l-2.397-2.397a9.36 9.36 0 0 1-5.192 1.569c-5.187 0-9.433-4.246-9.433-9.433z"
                  fill="#000"
                  fillOpacity=".05"
                />
                <g fill="#fff">
                  <path d="M17.394 10.153c-3.723 0-6.741 3.018-6.741 6.741s3.018 6.741 6.741 6.741 6.741-3.018 6.741-6.741-3.018-6.741-6.741-6.741zM7.347 16.894A10.05 10.05 0 0 1 17.394 6.847 10.05 10.05 0 0 1 27.44 16.894 10.05 10.05 0 0 1 17.394 26.94 10.05 10.05 0 0 1 7.347 16.894z" />
                  <path d="M23.025 22.525c.645-.645 1.692-.645 2.337 0l3.188 3.188c.645.645.645 1.692 0 2.337s-1.692.645-2.337 0l-3.187-3.187c-.645-.646-.645-1.692 0-2.337z" />
                </g>
              </g>
              <path d="M23.662 14.663c2.112 0 3.825-1.713 3.825-3.825s-1.713-3.825-3.825-3.825-3.825 1.713-3.825 3.825 1.713 3.825 3.825 3.825z" fill="#fff" />
              <path
                fillRule="evenodd"
                d="M23.663 8.429a2.41 2.41 0 0 0-2.408 2.408 2.41 2.41 0 0 0 2.408 2.408 2.41 2.41 0 0 0 2.408-2.408 2.41 2.41 0 0 0-2.408-2.408zm-5.242 2.408c0-2.895 2.347-5.242 5.242-5.242s5.242 2.347 5.242 5.242-2.347 5.242-5.242 5.242-5.242-2.347-5.242-5.242z"
                fill="currentColor"
              />
            </svg>
          </span>
          <span className="text-2xl text-default-900 font-semibold">Finder</span>
        </Link>
        <div className="flex gap-2 justify-center mb-3 flex-wrap">
          <Link href="" className=" flex items-center gap-2">
            <Icon icon="lucide:mail" className="size-4.5 " />
            contact@example.com
          </Link>
          <Link href="" className="hover:underline  flex items-center gap-2">
            <Icon icon="lucide:phone-call" className="size-4.5 " />
            +1 50 537 53 082
          </Link>
        </div>
        <div className="flex justify-center mt-6">
          <div className="group flex justify-center items-center flex-col hs-tooltip [--placement:auto]">
            <button type="button" className="hs-tooltip-toggle size-10 inline-flex justify-center items-center gap-2 ">
              <Icon icon="tabler:brand-instagram" className="text-default-700" />
              <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible   inline-block absolute invisible text-xs -mt-4 -ms-5 z-10 py-1 px-2 " role="tooltip">
                instagram
              </span>
            </button>
          </div>
          <div className="group flex justify-center items-center flex-col hs-tooltip [--placement:auto]">
            <button type="button" className="hs-tooltip-toggle size-10 inline-flex justify-center items-center gap-2 ">
              <Icon icon="tabler:brand-facebook-filled" className="text-default-700" />
              <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible   inline-block absolute invisible text-xs -mt-4 -ms-5 z-10 py-1 px-2 " role="tooltip">
                Facebook
              </span>
            </button>
          </div>
          <div className="group flex justify-center items-center flex-col hs-tooltip [--placement:auto]">
            <button type="button" className="hs-tooltip-toggle size-10 inline-flex justify-center items-center gap-2 ">
              <Icon icon="tabler:brand-x" className="text-default-700" />
              <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible   inline-block absolute invisible text-xs -mt-4 -ms-5 z-10 py-1 px-2 " role="tooltip">
                X (Twitter)
              </span>
            </button>
          </div>
        </div>
        <div className="py-6 flex justify-center">
          <p className="text-sm text-center ">
            © All rights reserved. Made by
            <Link href="#!" className=" hover:underline font-semibold">
              Coderthemes
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default Footer
