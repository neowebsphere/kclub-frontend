const Contact = () => {
  return (
    <>
      <div className="lg:col-span-2">
        <h1 className="lg:text-3.5xl md:text-2.5xl text-2xl text-default-900 font-semibold lg:pb-4 pb-1 mb-4">Contact info</h1>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 pb-6 mb-2">
          <div>
            <label className="block text-sm text-default-900 font-semibold mb-2">First name *</label>
            <input type="text" id="fn" required className="w-full rounded-lg border border-default-300 dark:border-white/20 bg-transparent px-4.5 py-2.75" />
          </div>
          <div>
            <label className="block text-sm text-default-900 font-semibold mb-2">Last name *</label>
            <input type="text" id="ln" required className="w-full rounded-lg border border-default-300 dark:border-white/20 bg-transparent px-4.5 py-2.75" />
          </div>
          <div>
            <label className="block text-sm text-default-900 font-semibold mb-2">Email *</label>
            <input type="email" id="email" required className="w-full rounded-lg border border-default-300 dark:border-white/20 bg-transparent px-4.5 py-2.75" />
          </div>
          <div>
            <label className="block text-sm text-default-900 font-semibold mb-2">Phone number *</label>
            <input
              type="tel"
              id="phone"
              data-input-format='{"numericOnly": true, "delimiters": ["(", ")", " ", "-", " "], "blocks": [0, 3, 0, 3, 4]}'
              placeholder="(___) ___-____"
              required
              className="w-full rounded-lg border border-default-300 dark:border-white/20 bg-transparent px-4.5 py-2.75"
            />
          </div>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <label htmlFor="tour" className="relative inline-block w-11 h-6 cursor-pointer">
            <input type="checkbox" id="tour" className="peer sr-only" />
            <span className="absolute inset-0 bg-default-200 rounded-full transition-colors duration-200 ease-in-out peer-checked:bg-success dark:bg-neutral-700 dark:peer-checked:bg-success peer-disabled:opacity-50 peer-disabled:pointer-events-none" />
            <span className="absolute top-1/2 start-0.5 -translate-y-1/2 size-5 bg-white rounded-full shadow-xs transition-transform duration-200 ease-in-out peer-checked:translate-x-full dark:bg-neutral-400 dark:peer-checked:bg-white" />
          </label>
          <label htmlFor="tour" className="text-default-900 text-sm">
            Open for schedule for a tour
          </label>
        </div>
      </div>
    </>
  )
}

export default Contact
