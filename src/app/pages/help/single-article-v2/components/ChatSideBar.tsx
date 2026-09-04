import { Icon } from '@iconify/react'
import Link from 'next/link'

const ChatSideBar = () => {
  return (
    <>
      <div className="lg:col-span-4 ">
        <div className="lg:sticky lg:top-25">
          <div
            id="accountSidebar"
            className="hs-overlay lg:static [--auto-close:lg] lg:block lg:translate-x-0 lg:end-auto lg:bottom-auto hs-overlay-open:translate-x-0 translate-x-full transition-all duration-300 transform  hidden fixed top-0 end-0 bottom-0 z-60 bg-body-bg lg:w-auto w-87"
            role="dialog"
            tabIndex={-1}
            aria-label="Sidebar"
          >
            <div className="flex flex-col sticky top-0">
              <header className="py-4 px-6 lg:px-0 lg:py-0 flex justify-between items-center gap-x-2 lg:border-none border-b border-default-200">
                <Link className="focus:outline-hidden focus:opacity-80 " href="" aria-label="Brand">
                  <h3 className="text-xl font-semibold text-default-900 lg:hidden block">Chat</h3>
                </Link>
                <div className="lg:hidden -me-2">
                  <button type="button" data-hs-overlay="#accountSidebar">
                    <Icon icon="lucide:x" className="size-5" />
                    <span className="sr-only">Close</span>
                  </button>
                </div>
              </header>
              <nav className="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full">
                <div className="w-full flex flex-col flex-wrap  px-6 lg:px-0 pb-4 lg:pb-0 pt-6">
                  <div className="lg:ms-6 lg:bg-default-100 flex flex-col justify-between dark:bg-white/3 h-145 rounded-xl">
                    <div className="lg:p-6">
                      <div className="flex items-start gap-2 z-10">
                        <div className="flex shrink-0 bg-primary rounded-full p-2 me-1">
                          <Icon icon="lucide:zap" className="text-base text-white" />
                        </div>
                        <div className="w-full border border-border lg:bg-body-bg bg-default-100 rounded-md overflow-hidden py-2 px-4">
                          <div className="z-10 text-sm py-1">
                            Hello!
                            <br />
                            I'm your virtual assistant from the Help Center, ready to assist you in finding the information and resources you're looking for.
                            <br />
                            How can I help?
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="lg:p-6 mt-auto">
                      <div className="relative">
                        <textarea className="w-full rounded-lg border border-default-300 bg-default-100 lg:bg-white px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500" rows={1} placeholder="Ask assistant anything..." required />
                        <button
                          type="submit"
                          aria-label="Submit your message"
                          className="absolute top-0 end-0 mt-1 me-1 flex items-center size-10 justify-center rounded-md border-0 bg-transparent text-xl text-default-600 hover:text-default-800 hover:bg-default-100 dark:hover:bg-white/3 focus:outline-none transition-all duration-300"
                        >
                          <Icon icon="lucide:circle-arrow-right" />
                        </button>
                      </div>
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

export default ChatSideBar
