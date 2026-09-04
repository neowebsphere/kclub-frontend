import { Icon } from '@iconify/react'
import { ChevronRight, Clock } from 'lucide-react'
import Link from 'next/link'

const Appointment = () => {
  return (
    <>
      <div className="lg:col-span-1">
        <div className="lg:sticky lg:top-25">
          <div
            id="bookAppointment"
            className="hs-overlay lg:static [--auto-close:lg] lg:block lg:translate-x-0 lg:end-auto lg:bottom-auto hs-overlay-open:translate-x-0 translate-x-full transition-all duration-300 transform  hidden fixed top-0 end-0 bottom-0 z-60 bg-body-bg lg:w-auto w-87"
            role="dialog"
            tabIndex={-1}
            aria-label="Sidebar"
          >
            <div className="flex flex-col sticky top-0">
              <header className="py-4 px-6 lg:px-0 lg:py-0 flex justify-between items-center gap-x-2">
                <Link className="focus:outline-hidden focus:opacity-80 " href="" aria-label="Brand">
                  <h2 className="text-xl text-default-900 font-semibold lg:hidden block">Book an appointment</h2>
                </Link>
                <div className="lg:hidden -me-2">
                  <button type="button" data-hs-overlay="#bookAppointment">
                    <Icon icon="lucide:x" className="size-5" />
                    <span className="sr-only">Close</span>
                  </button>
                </div>
              </header>
              <nav className="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full">
                <div className="w-full flex flex-col flex-wrap px-6 lg:px-0 pb-4 lg:pb-0 lg:pt-0 pt-2">
                  <div className="lg:bg-body-bg rounded-md lg:p-6">
                    <div className="lg:p-2">
                      <h2 className="mb-6 text-xl font-semibold text-default-900 lg:block hidden">Book an appointment</h2>
                      <ul className="text-sm mb-6 space-y-1">
                        <li>
                          <span className="text-primary text-base font-semibold me-1">$75.00</span> Online consultation
                        </li>
                        <li>
                          <span className="text-default-900 text-base font-semibold me-1">$90.00</span> Visiting the clinic
                        </li>
                      </ul>
                      <div className="flex gap-6 mb-1 pb-2">
                        <label className="flex items-center gap-2 cursor-pointer mb-4">
                          <input type="radio" name="visit-method-1" className="hidden peer" defaultChecked />
                          <span className="w-11 h-6 rounded-full bg-default-300 peer-checked:bg-success relative after:content-[''] after:absolute after:top-0.75 after:start-0.75 after:w-4.5 after:h-4.5 after:bg-white after:rounded-full after:transition-all peer-checked:after:translate-x-5" />
                          <span className="text-sm">Online</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer mb-4">
                          <input type="radio" name="visit-method-1" className="hidden peer" />
                          <span className="w-11 h-6 rounded-full bg-default-300 peer-checked:bg-success relative after:content-[''] after:absolute after:top-0.75 after:start-0.75 after:w-4.5 after:h-4.5 after:bg-white after:rounded-full after:transition-all peer-checked:after:translate-x-5" />
                          <span className="text-sm">Visit clinic</span>
                        </label>
                      </div>
                      <div className="flex mb-4 border rounded-md border-info">
                        <label className="flex-1">
                          <input type="radio" name="visit-day-1" className="hidden peer" />
                          <span className="block text-center border-e border-info text-info py-2.5 px-2 text-sm peer-checked:bg-info peer-checked:text-white peer-checked:border-info">Mon, 11</span>
                        </label>
                        <label className="flex-1">
                          <input type="radio" name="visit-day-1" className="hidden peer" defaultChecked />
                          <span className="block text-center border-e border-info text-info py-2.5 px-2 text-sm peer-checked:bg-info peer-checked:text-white peer-checked:border-info">Tue, 12</span>
                        </label>
                        <label className="flex-1">
                          <input type="radio" name="visit-day-1" className="hidden peer" />
                          <span className="block text-center border-e border-info text-info py-2.5 px-2 text-sm peer-checked:bg-info peer-checked:text-white peer-checked:border-info">Wed, 13</span>
                        </label>
                        <button className="block text-center text-info px-2 text-sm hover:bg-info hover:text-white rounded-br-md transition-all duration-300">
                          <ChevronRight className="size-4.5" />
                        </button>
                      </div>
                      <div className="grid grid-cols-4 gap-2 pt-4">
                        <label>
                          <input type="radio" name="visit-time-1" className="hidden peer" />
                          <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">10:00</span>
                        </label>
                        <label>
                          <input type="radio" name="visit-time-1" className="hidden peer" />
                          <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">10:30</span>
                        </label>
                        <label>
                          <input type="radio" name="visit-time-1" className="hidden peer" />
                          <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">11:00</span>
                        </label>
                        <label>
                          <input type="radio" name="visit-time-1" className="hidden peer" />
                          <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">11:30</span>
                        </label>
                        <label>
                          <input type="radio" name="visit-time-1" className="hidden peer" />
                          <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">12:00</span>
                        </label>
                        <label>
                          <input type="radio" name="visit-time-1" className="hidden peer" defaultChecked />
                          <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">12:30</span>
                        </label>
                        <label>
                          <input type="radio" name="visit-time-1" className="hidden peer" />
                          <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">13:00</span>
                        </label>
                        <label>
                          <input type="radio" name="visit-time-1" className="hidden peer" />
                          <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">13:30</span>
                        </label>
                        <label>
                          <input type="radio" name="visit-time-1" className="hidden peer" />
                          <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">14:00</span>
                        </label>
                        <label>
                          <input type="radio" name="visit-time-1" className="hidden peer" />
                          <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">14:30</span>
                        </label>
                        <label>
                          <input type="radio" name="visit-time-1" className="hidden peer" />
                          <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">15:00</span>
                        </label>
                        <label>
                          <input type="radio" name="visit-time-1" className="hidden peer" />
                          <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">15:30</span>
                        </label>
                      </div>
                      <div className="mt-6 w-full">
                        <button type="button" className="bg-primary rounded-md py-2.5 px-6 w-full flex justify-center items-center font-semibold transition text-white">
                          <Clock className="size-3.5 me-2" />
                          Next appointment 12:30, Tue, 12
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

export default Appointment
