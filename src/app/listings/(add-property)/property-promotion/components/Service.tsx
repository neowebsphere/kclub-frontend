const Service = () => {
  return (
    <>
      <div className="border-b border-border py-8 grid grid-cols-12 md:gap-6 gap-2">
        <div className="md:col-span-5 col-span-12">
          <div className="flex items-center gap-3 mb-2">
            <div>
              <label htmlFor="certify" className="relative inline-block w-11 h-6 cursor-pointer">
                <input type="checkbox" id="certify" className="peer sr-only" />
                <span className="absolute inset-0 bg-default-200 rounded-full transition-colors duration-200 ease-in-out peer-checked:bg-success dark:bg-neutral-700 dark:peer-checked:bg-success peer-disabled:opacity-50 peer-disabled:pointer-events-none" />
                <span className="absolute top-1/2 start-0.5 -translate-y-1/2 size-5 bg-white rounded-full shadow-xs transition-transform duration-200 ease-in-out peer-checked:translate-x-full dark:bg-neutral-400 dark:peer-checked:bg-white" />
              </label>
            </div>
            <label htmlFor="certify" className="text-default-900 font-semibold">
              Check and certify my ad by Finder experts
            </label>
          </div>
        </div>
        <div className="md:col-span-5 col-span-8">
          <p className="text-sm">Ads with Certified badge get 10x more views.</p>
        </div>
        <div className="md:col-span-2 col-span-4">
          <div className="text-end text-default-900 font-semibold text-xl">$35</div>
        </div>
      </div>

      <div className="border-b border-border py-8 grid grid-cols-12 md:gap-6 gap-2">
        <div className="md:col-span-5 col-span-12">
          <div className="flex items-center gap-3 mb-2">
            <div>
              <label htmlFor="lifts" className="relative inline-block w-11 h-6 cursor-pointer">
                <input type="checkbox" id="lifts" className="peer sr-only" defaultChecked />
                <span className="absolute inset-0 bg-default-200 rounded-full transition-colors duration-200 ease-in-out peer-checked:bg-success dark:bg-neutral-700 dark:peer-checked:bg-success peer-disabled:opacity-50 peer-disabled:pointer-events-none" />
                <span className="absolute top-1/2 start-0.5 -translate-y-1/2 size-5 bg-white rounded-full shadow-xs transition-transform duration-200 ease-in-out peer-checked:translate-x-full dark:bg-neutral-400 dark:peer-checked:bg-white" />
              </label>
            </div>
            <label htmlFor="lifts" className="text-default-900 font-semibold">
              10 lifts to the top of the list (daily, 7 days)
            </label>
          </div>
        </div>
        <div className="md:col-span-5 col-span-8">
          <p className="text-sm">Your ad will be seen by as many people as possible.</p>
        </div>
        <div className="md:col-span-2 col-span-4">
          <div className="text-end text-default-900 font-semibold text-xl">
            $29<span className="text-sm font-normal">/month</span>
          </div>
        </div>
      </div>

      <div className="border-b border-border py-8 grid grid-cols-12 md:gap-6 gap-2">
        <div className="md:col-span-5 col-span-12">
          <div className="flex items-center gap-3 mb-2">
            <div>
              <label htmlFor="analytics" className="relative inline-block w-11 h-6 cursor-pointer">
                <input type="checkbox" id="analytics" className="peer sr-only" />
                <span className="absolute inset-0 bg-default-200 rounded-full transition-colors duration-200 ease-in-out peer-checked:bg-success dark:bg-neutral-700 dark:peer-checked:bg-success peer-disabled:opacity-50 peer-disabled:pointer-events-none" />
                <span className="absolute top-1/2 start-0.5 -translate-y-1/2 size-5 bg-white rounded-full shadow-xs transition-transform duration-200 ease-in-out peer-checked:translate-x-full dark:bg-neutral-400 dark:peer-checked:bg-white" />
              </label>
            </div>
            <label htmlFor="analytics" className="text-default-900 font-semibold">
              Detailed user engagement analytics
            </label>
          </div>
        </div>
        <div className="md:col-span-5 col-span-8">
          <p className="text-sm">Benefit from comprehensive data analysis, including demographic insights and engagement trends.</p>
        </div>
        <div className="md:col-span-2 col-span-4">
          <div className="text-end text-default-900 font-semibold text-xl">
            $15<span className="text-sm font-normal">/month</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Service
