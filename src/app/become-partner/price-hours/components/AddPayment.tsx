import { Icon } from '@iconify/react'

const AddPayment = () => {
  return (
    <>
      <div id="addPayment" className="hs-overlay hidden size-full fixed top-0 start-0 z-80 overflow-x-hidden overflow-y-auto pointer-events-none" role="dialog" tabIndex={-1} aria-labelledby="addPaymentlabel">
        <div className="hs-overlay-animation-target hs-overlay-open:scale-100 hs-overlay-open:opacity-100 scale-95 opacity-0 ease-in-out transition-all duration-200 md:max-w-lg md:w-full m-3 md:mx-auto min-h-[calc(100%-56px)] flex items-center">
          <div className="w-full flex flex-col bg-body-bg border border-gray-200 shadow-2xs rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
            <div className="flex justify-between items-center border-b border-default-200 px-6 py-5">
              <h3 id="addPaymentlabel" className="font-bold text-default-800 md:text-2xl text-xl">
                <nav className="flex gap-2" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
                  <button
                    type="button"
                    className="hs-tab-active:border-default-900 hs-tab-active:bg-default-100 hs-tab-active:dark-bg-white/3 rounded-full border border-border py-2 px-5 text-sm font-semibold text-body-color hover:border-default-900 active"
                    id="add-card-tab"
                    aria-selected="true"
                    data-hs-tab="#add-card"
                    aria-controls="add-card"
                    role="tab"
                  >
                    Add card
                  </button>
                  <button
                    type="button"
                    className="hs-tab-active:border-default-900 hs-tab-active:bg-default-100 hs-tab-active:dark-bg-white/3 rounded-full border border-border py-2 px-5 text-sm font-semibold text-body-color hover:border-default-900"
                    id="add-paypal-tab"
                    aria-selected="false"
                    data-hs-tab="#add-paypal"
                    aria-controls="add-paypal"
                    role="tab"
                  >
                    Add paypal
                  </button>
                </nav>
              </h3>
              <button type="button" className="size-8 " aria-label="Close" data-hs-overlay="#addPayment">
                <Icon icon="lucide:x" className="size-6" />
              </button>
            </div>
            <div id="add-card" role="tabpanel" aria-labelledby="add-card-tab">
              <div className="p-6">
                <div className="grid grid-cols-2 gap-6 overflow-y-auto mt-3">
                  <div className="col-span-2">
                    <label className="block text-sm text-default-950 font-medium mb-2">Card number</label>
                    <input type="number" placeholder="XXXX XXXX XXXX XXXX" className="rounded-lg bg-transparent border-default-200 dark:border-neutral-700 py-3 text-sm w-full" />
                  </div>
                  <div className="col-span-2 relative">
                    <label className="block text-sm text-default-950 font-medium mb-2">Name on card</label>
                    <input type="text" className="rounded-lg bg-transparent border-default-200 dark:border-neutral-700 py-5 text-sm w-full" />
                    <Icon icon="lucide:credit-card" className="absolute size-6 end-4 top-1/2 flex items-center" />
                  </div>
                  <div className="col-span-1">
                    <label htmlFor="fn" className="block text-sm text-default-950 font-medium mb-2">
                      Expiration date
                    </label>
                    <input id="fn" type="text" placeholder="MM/YY" className="rounded-lg bg-transparent border-default-200 dark:border-neutral-700 py-3 text-sm w-full" />
                  </div>
                  <div className="col-span-1">
                    <label htmlFor="ln" className="block text-sm text-default-950 font-medium mb-2">
                      CVC
                    </label>
                    <input id="ln" type="text" placeholder="XXXX" className="rounded-xl bg-transparent border-default-200 dark:border-neutral-700 py-3 text-sm w-full" />
                  </div>
                </div>
                <div className="md:flex justify-start gap-4 mt-6">
                  <button type="reset" aria-label="Close" data-hs-overlay="#addPayment" className="bg-default-200 dark:bg-neutral-700 dark:hover:bg-neutral-600 text-default-700 hover:bg-default-300 dark:text-white px-7 py-3 transition-all text-sm rounded-xl font-semibold w-full">
                    Cancel
                  </button>
                  <button type="submit" className="bg-primary/90 text-white hover:bg-primary px-7 py-3 transition-all text-sm rounded-xl font-semibold w-full md:mt-0 mt-3">
                    Add card
                  </button>
                </div>
              </div>
            </div>
            <div id="add-paypal" role="tabpanel" aria-labelledby="add-paypal-tab" className="hidden">
              <div className="p-6">
                <div className="col-span-2 relative">
                  <label className="block text-sm text-default-950 font-medium mb-2">Email associated with PayPal</label>
                  <input type="text" className="rounded-lg bg-transparent border-default-200 dark:border-neutral-700 py-3 text-sm w-full" />
                </div>
                <div className="md:flex justify-start gap-4 mt-6">
                  <button type="reset" aria-label="Close" data-hs-overlay="#addPayment" className="bg-default-200 dark:bg-neutral-700 dark:hover:bg-neutral-600 text-default-700 hover:bg-default-300 dark:text-white px-7 py-3 transition-all text-sm rounded-xl font-semibold w-full">
                    Cancel
                  </button>
                  <button type="submit" className="bg-primary/90 text-white hover:bg-primary px-7 py-3 transition-all text-sm rounded-xl font-semibold w-full md:mt-0 mt-3">
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddPayment
