import worker from '@/assets/img/404/worker.jpg'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'

const NotFound = () => {
  return (
    <>
      <div className="container">
        <div className="grid md:grid-cols-2 grid-cols-1 h-screen">
          <div className="pt-4 md:pe-12 pb-6 flex flex-col justify-between">
            <header>
              <Link className="inline-flex items-center text-dark-emphasis" href="/">
                <span className="shrink-0 text-primary rtl-flip me-2">
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
                <span className="text-2xl font-semibold text-default-900">kclub</span>
              </Link>
            </header>
            <div>
              <h1 className="mb-6 lg:text-5.5xl md:text-4.8xl text-3.5xl text-default-900 font-bold">Page not found</h1>
              <p className="text-lg mb-6" style={{ maxWidth: 432 }}>
                The page you are looking for was moved, removed or might never existed.
              </p>
              <div className="group">
                <div className="border-b border-border md:py-6 py-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <Icon icon="lucide:layout-grid" className="text-lg me-2" />
                    <Link
                      href="/partners"
                      className="relative text-default-900 font-semibold after:absolute after:bottom-0 after:start-0 after:w-full after:opacity-0 group-hover:after:opacity-100 after:h-0.25 after:bg-current hover:after:w-full after:transition-all after:duration-100"
                    >
                      Catalog
                    </Link>
                  </div>
                  <Icon icon="lucide:chevron-right" className="text-xl text-secondary" />
                </div>
              </div>
              <div className="group">
                <div className="border-b border-border md:py-6 py-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <Icon icon="lucide:wrench" className="text-lg me-2" />
                    <Link
                      href="/partners"
                      className="relative text-default-900 font-semibold after:absolute after:bottom-0 after:start-0 after:w-full after:opacity-0 group-hover:after:opacity-100 after:h-0.25 after:bg-current hover:after:w-full after:transition-all after:duration-100"
                    >
                      Popular projects
                    </Link>
                  </div>
                  <Icon icon="lucide:chevron-right" className="text-xl text-secondary" />
                </div>
              </div>
              <div className="group">
                <div className="border-b border-border md:py-6 py-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <Icon icon="lucide:info" className="text-lg me-2" />
                    <Link href="/help" className="relative text-default-900 font-semibold after:absolute after:bottom-0 after:start-0 after:w-full after:opacity-0 group-hover:after:opacity-100 after:h-0.25 after:bg-current hover:after:w-full after:transition-all after:duration-100">
                      Help center
                    </Link>
                  </div>
                  <Icon icon="lucide:chevron-right" className="text-xl text-secondary" />
                </div>
              </div>
              <div className="mt-12">
                <Link className="py-3.5 px-6 text-white bg-primary font-semibold inline-flex hover:bg-primary-hover rounded-md" href="/">
                  Go to homepage
                </Link>
              </div>
            </div>
            <footer>
              <p className="text-sm">
                © All rights reserved. Made by
                <Link className="hover:underline text-default-900" href="" target="_blank" rel="noreferrer">
                  kclub
                </Link>
              </p>
            </footer>
          </div>
          <div className="absolute top-0 end-0 w-1/2 h-full bg-info hidden md:flex items-center justify-end overflow-hidden ps-6">
            <Image src={worker} alt="Image" width={777} className="rounded-full rounded-r-none -me-1" />
          </div>
        </div>
      </div>
    </>
  )
}

export default NotFound
