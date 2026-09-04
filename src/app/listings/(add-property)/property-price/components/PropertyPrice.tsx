import { Briefcase, DollarSign, User } from 'lucide-react'

const PropertyPrice = () => {
  return (
    <>
      <div className="lg:col-span-2">
        <h1 className="lg:text-3.5xl md:text-2.5xl text-2xl text-default-900 font-semibold lg:pb-2 pb-1 mb-4">Price</h1>
        <label className="block text-sm text-default-900 font-semibold mb-2">Price *</label>
        <div className="relative md:w-97.5 w-full mb-4">
          <DollarSign className="size-4.5 absolute top-1/2 -translate-y-1/2 start-0 ms-4" />
          <input type="number" id="price" min={20} placeholder="Set a fair price" required className="w-full rounded-lg border border-default-300 dark:border-white/20 bg-transparent ps-10 pe-4.5 py-2.75" />
        </div>
        <div className="flex items-center gap-2 mb-2">
          <label htmlFor="negotiated" className="relative inline-block w-11 h-6 cursor-pointer">
            <input type="checkbox" id="negotiated" className="peer sr-only" />
            <span className="absolute inset-0 bg-default-200 rounded-full transition-colors duration-200 ease-in-out peer-checked:bg-success dark:bg-neutral-700 dark:peer-checked:bg-success peer-disabled:opacity-50 peer-disabled:pointer-events-none" />
            <span className="absolute top-1/2 start-0.5 -translate-y-1/2 size-5 bg-white rounded-full shadow-xs transition-transform duration-200 ease-in-out peer-checked:translate-x-full dark:bg-neutral-400 dark:peer-checked:bg-white" />
          </label>
          <label htmlFor="negotiated" className="text-default-900 text-sm">
            Negotiated price
          </label>
        </div>
        <div className="pt-4 mt-4">
          <label className="block text-sm text-default-900 font-semibold mb-2 pb-1">Type of offer *</label>
          <div className="flex flex-wrap md:gap-6 gap-4">
            <div className="relative">
              <input type="radio" name="type" id="private" className="hidden peer" defaultChecked />
              <label
                htmlFor="private"
                className="cursor-pointer rounded-full font-medium py-2 px-5 border border-default-300 w-full inline-flex peer-checked:bg-default-100 peer-checked:dark:bg-white/10 peer-checked:text-default-800 peer-checked:border-default-900 peer-checked:dark:border-white hover:border-default-900 text-sm peer-focus:ring-2 peer-focus:ring-dark peer-focus:dark:ring-white transition"
              >
                <User className="size-4 me-2" />
                Private person
              </label>
            </div>
            <div className="relative">
              <input type="radio" name="type" id="agent" className="hidden peer" />
              <label
                htmlFor="agent"
                className="cursor-pointer rounded-full font-medium py-2 px-5 border border-default-300 w-full inline-flex peer-checked:bg-default-100 peer-checked:dark:bg-white/10 peer-checked:text-default-800 peer-checked:border-default-900 peer-checked:dark:border-white hover:border-default-900 text-sm peer-focus:ring-2 peer-focus:ring-dark peer-focus:dark:ring-white transition"
              >
                <Briefcase className="size-4 me-2" />
                Real estate agent
              </label>
            </div>
          </div>
        </div>
        <div className="mt-4 pt-4">
          <div className="flex flex-col gap-4">
            <label htmlFor="no-credit" className="flex items-center text-default-700 text-sm cursor-pointer checked:text-default-800">
              <input type="checkbox" id="no-credit" className="size-4 checked:text-dark border-default-300 dark:bg-body-bg! rounded me-2" />
              Not available for sale on credit
            </label>
            <label htmlFor="Ready" className="flex items-center text-default-700 text-sm cursor-pointer checked:text-default-800">
              <input type="checkbox" id="Ready" className="size-4 checked:text-dark border-default-300 dark:bg-body-bg! rounded me-2" />
              Ready to cooperate with real estate agents
            </label>
            <label htmlFor="exchange" className="flex items-center text-default-700 text-sm cursor-pointer checked:text-default-800">
              <input type="checkbox" id="exchange" className="size-4 checked:text-dark border-default-300 dark:bg-body-bg! rounded me-2" />
              The possibility of exchange
            </label>
          </div>
        </div>
      </div>
    </>
  )
}

export default PropertyPrice
