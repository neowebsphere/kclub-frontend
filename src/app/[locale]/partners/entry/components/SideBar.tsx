import { Icon } from '@iconify/react'
import { Link } from '@/i18n/navigation'

const SideBar = () => {
  return (
    <>
      <div className="col-span-1">
        <div className="lg:sticky lg:top-25">
          <div
            id="contactForm"
            className="hs-overlay lg:static [--auto-close:lg] lg:block lg:translate-x-0 lg:end-auto lg:bottom-auto hs-overlay-open:translate-x-0 translate-x-full transition-all duration-300 transform  hidden fixed top-0 end-0 bottom-0 z-60 bg-body-bg lg:w-auto w-87"
            role="dialog"
            tabIndex={-1}
            aria-label="Sidebar"
          >
            <div className="flex flex-col sticky top-0">
              <header className="py-4 px-6 lg:px-0 lg:py-0 flex justify-between items-center gap-x-2 lg:border-none border-b border-default-200">
                <Link className="focus:outline-hidden focus:opacity-80 " href="" aria-label="Brand">
                  <h4 className="text-xl font-semibold text-default-900 lg:hidden block">Contact Mike Gardner</h4>
                </Link>
                <div className="lg:hidden -me-2">
                  <button type="button" data-hs-overlay="#contactForm">
                    <Icon icon="lucide:x" className="size-5" />
                    <span className="sr-only">Close</span>
                  </button>
                </div>
              </header>
              <nav className="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full">
                <div className="w-full flex flex-col flex-wrap px-6 lg:px-0 pb-4 lg:pb-0 pt-6">
                  <div className="lg:p-2 lg:bg-default-100 lg:dark:bg-white/3 rounded-md">
                    <div className="lg:p-6">
                      <h4 className="text-xl font-semibold text-default-900 text-center pb-1 mb-2 lg:block hidden">Contact Mike Gardner</h4>
                      <p className="text-sm text-center mb-6">Please fill out the form to contact a specialist</p>
                      <form className="space-y-4" noValidate>
                        <div>
                          <input type="text" placeholder="Name *" required className="w-full rounded-md border border-default-300 dark:border:white/20 bg-body-bg px-3 py-2 text-sm" />
                          <p className="hidden mt-1 text-sm text-primary">Please enter your name!</p>
                        </div>

                        <div>
                          <input type="tel" placeholder="Phone number *" required className="w-full rounded-md border border-default-300 dark:border:white/20 bg-body-bg px-3 py-2 text-sm" />
                          <p className="hidden mt-1 text-sm text-primary">Please enter your phone number!</p>
                        </div>

                        <div>
                          <input type="text" placeholder="Zip code" className="w-full rounded-md border border-default-300 dark:border:white/20 bg-body-bg px-3 py-2 text-sm" />
                        </div>

                        <div>
                          <textarea rows={5} placeholder="Message *" required className="w-full rounded-md border border-default-300 dark:border:white/20 bg-body-bg px-3 py-2 text-sm" defaultValue={''} />
                          <p className="hidden mt-1 text-sm text-primary">Please write your message!</p>
                        </div>

                        <button type="submit" className="w-full rounded-md bg-primary px-6 py-3.5 text-white text-base font-medium hover:bg-primary-hover">
                          Send message
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SideBar
