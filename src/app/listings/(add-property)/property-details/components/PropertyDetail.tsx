import { Icon } from "@iconify/react"

const PropertyDetail = () => {
  return (
    <>
      <div className="lg:col-span-2">
        <h1 className="lg:text-3.5xl md:text-2.5xl text-2xl text-default-900 font-semibold lg:pb-2 pb-1 mb-4">Property details</h1>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mb-6 lg:pb-2">
          <div className="col-span-1">
            <div className="relative">
              <input type="radio" name="type" id="secondary-estate" className="hidden peer" defaultChecked />
              <label
                htmlFor="secondary-estate"
                className="cursor-pointer rounded-md font-medium py-2 px-5 border border-default-300 w-full inline-flex flex-col peer-checked:bg-default-100 peer-checked:dark:bg-white/10 peer-checked:text-default-800 peer-checked:border-default-900 peer-checked:dark:border-white  hover:border-default-900 peer-focus:ring-2 peer-focus:ring-dark peer-focus:dark:ring-white transition"
              >
                <span className="text-default-900 font-semibold pt-1 mb-1">Secondary real estate</span>
                <span className="font-normal pb-1 text-sm">Ownership is already registered</span>
              </label>
            </div>
          </div>
          <div className="col-span-1">
            <div className="relative">
              <input type="radio" name="type" id="primary-estate" className="hidden peer" />
              <label
                htmlFor="primary-estate"
                className="cursor-pointer rounded-md font-medium py-2 px-5 border border-default-300 w-full inline-flex flex-col peer-checked:bg-default-100 peer-checked:dark:bg-white/10 peer-checked:text-default-800 peer-checked:border-default-900 peer-checked:dark:border-white hover:border-default-900 peer-focus:ring-2 peer-focus:ring-dark peer-focus:dark:ring-white transition"
              >
                <span className="text-default-900 font-semibold pt-1 mb-1">Primary real estate</span>
                <span className="font-normal pb-1 text-sm">Ownership has not yet been formalized</span>
              </label>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mb-6 lg:pb-2">
          <div>
            <label className="block text-sm text-default-900 font-semibold mb-2">Total floors *</label>
            <input type="number" id="floors-total" min={1} placeholder="Number" required className="w-full rounded-lg border border-default-300 dark:border-white/20 bg-transparent px-4.5 py-2.75" />
          </div>
          <div>
            <label className="block text-sm text-default-900 font-semibold mb-2">floors *</label>
            <input type="number" id="floors" min={1} placeholder="Number" required className="w-full rounded-lg border border-default-300 dark:border-white/20 bg-transparent px-4.5 py-2.75" />
          </div>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mb-6 lg:pb-2">
          <div>
            <label className="block text-sm text-default-900 font-semibold mb-2">Total area *</label>
            <input type="number" id="total-area" min={1} placeholder="sq.m." required className="w-full rounded-lg border border-default-300 dark:border-white/20 bg-transparent px-4.5 py-2.75" />
          </div>
          <div>
            <label className="block text-sm text-default-900 font-semibold mb-2">Living area *</label>
            <input type="number" id="living-area" min={1} placeholder="sq.m." required className="w-full rounded-lg border border-default-300 dark:border-white/20 bg-transparent px-4.5 py-2.75" />
          </div>
          <div>
            <label className="block text-sm text-default-900 font-semibold mb-2">Kitchen area *</label>
            <input type="number" id="kitchen-area" min={1} placeholder="sq.m." required className="w-full rounded-lg border border-default-300 dark:border-white/20 bg-transparent px-4.5 py-2.75" />
          </div>
        </div>
        <div className="flex justify-between md:pb-6 pb-4 mb-2">
          <label className="block text-sm text-default-900 font-semibold mt-2 me-4 text-nowrap">Bedrooms *</label>
          <div className="flex flex-wrap gap-2">
            <label>
              <input type="radio" name="bedrooms" id="bedrooms-any" className="hidden peer" defaultChecked />
              <span className="block text-center border rounded-full py-2 px-5 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900 peer-checked:bg-default-100  peer-checked:dark:bg-white/10 peer-hover:border-default-900 ">Any</span>
            </label>
            <label>
              <input type="radio" name="bedrooms" id="bedrooms-1" className="hidden peer" />
              <span className="inline-flex items-center text-center border rounded-full py-2 px-5 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900 peer-checked:bg-default-100  peer-checked:dark:bg-white/10 peer-hover:border-default-900 ">
                <Icon icon="lucide:bed-single" className="text-base me-1" /> 1
              </span>
            </label>
            <label>
              <input type="radio" name="bedrooms" id="bedrooms-2" className="hidden peer" />
              <span className="inline-flex items-center text-center border rounded-full py-2 px-5 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900 peer-checked:bg-default-100  peer-checked:dark:bg-white/10 peer-hover:border-default-900 ">
                <Icon icon="lucide:bed-single" className="text-base me-1" /> 2
              </span>
            </label>
            <label>
              <input type="radio" name="bedrooms" id="bedrooms-3" className="hidden peer" />
              <span className="inline-flex items-center text-center border rounded-full py-2 px-5 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900 peer-checked:bg-default-100  peer-checked:dark:bg-white/10 peer-hover:border-default-900 ">
                <Icon icon="lucide:bed-single" className="text-base me-1" />3
              </span>
            </label>
            <label>
              <input type="radio" name="bedrooms" id="bedrooms-4" className="hidden peer" />
              <span className="inline-flex items-center text-center border rounded-full py-2 px-5 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900 peer-checked:bg-default-100  peer-checked:dark:bg-white/10 peer-hover:border-default-900 ">
                <Icon icon="lucide:bed-single" className="text-base me-1" /> 4
              </span>
            </label>
            <label>
              <input type="radio" name="bedrooms" id="bedrooms-5" className="hidden peer" />
              <span className="inline-flex items-center text-center border rounded-full py-2 px-5 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900 peer-checked:bg-default-100  peer-checked:dark:bg-white/10 peer-hover:border-default-900 ">
                <Icon icon="lucide:bed-single" className="text-base me-1" /> 5
              </span>
            </label>
          </div>
        </div>
        <div className="flex justify-between text-nowrap  md:pb-6 pb-4 mb-2">
          <label className="block text-sm text-default-900 font-semibold mt-2 me-4">Bathrooms *</label>
          <div className="flex flex-wrap gap-2">
            <label>
              <input type="radio" name="bathrooms" id="bathrooms-any" className="hidden peer" defaultChecked />
              <span className="block text-center border rounded-full py-2 px-5 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900 peer-checked:bg-default-100  peer-checked:dark:bg-white/10 peer-hover:border-default-900 ">Any</span>
            </label>
            <label>
              <input type="radio" name="bathrooms" id="bathrooms-1" className="hidden peer" />
              <span className="inline-flex items-center text-center border rounded-full py-2 px-5 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900 peer-checked:bg-default-100  peer-checked:dark:bg-white/10 peer-hover:border-default-900 ">
                <Icon icon="lucide:shower-head" className="text-base me-1" /> 1
              </span>
            </label>
            <label>
              <input type="radio" name="bathrooms" id="bathrooms-2" className="hidden peer" />
              <span className="inline-flex items-center text-center border rounded-full py-2 px-5 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900 peer-checked:bg-default-100  peer-checked:dark:bg-white/10 peer-hover:border-default-900 ">
                <Icon icon="lucide:shower-head" className="text-base me-1" /> 2
              </span>
            </label>
            <label>
              <input type="radio" name="bathrooms" id="bathrooms-3" className="hidden peer" />
              <span className="inline-flex items-center text-center border rounded-full py-2 px-5 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900 peer-checked:bg-default-100  peer-checked:dark:bg-white/10 peer-hover:border-default-900 ">
                <Icon icon="lucide:shower-head" className="text-base me-1" />3
              </span>
            </label>
            <label>
              <input type="radio" name="bathrooms" id="bathrooms-4" className="hidden peer" />
              <span className="inline-flex items-center text-center border rounded-full py-2 px-5 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900 peer-checked:bg-default-100  peer-checked:dark:bg-white/10 peer-hover:border-default-900 ">
                <Icon icon="lucide:shower-head" className="text-base me-1" /> 4
              </span>
            </label>
            <label>
              <input type="radio" name="bathrooms" id="bathrooms-5" className="hidden peer" />
              <span className="inline-flex items-center text-center border rounded-full py-2 px-5 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900 peer-checked:bg-default-100  peer-checked:dark:bg-white/10 peer-hover:border-default-900 ">
                <Icon icon="lucide:shower-head" className="text-base me-1" /> 5
              </span>
            </label>
          </div>
        </div>
        <div className="flex justify-between text-nowrap  md:pb-6 pb-4 mb-2">
          <label className="block text-sm text-default-900 font-semibold mt-2 me-4">Parking spots *</label>
          <div className="flex flex-wrap gap-2">
            <label>
              <input type="radio" name="parking" id="parking-any" className="hidden peer" defaultChecked />
              <span className="block text-center border rounded-full py-2 px-5 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900 peer-checked:bg-default-100  peer-checked:dark:bg-white/10 peer-hover:border-default-900 ">Any</span>
            </label>
            <label>
              <input type="radio" name="parking" id="parking-1" className="hidden peer" />
              <span className="inline-flex items-center text-center border rounded-full py-2 px-5 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900 peer-checked:bg-default-100  peer-checked:dark:bg-white/10 peer-hover:border-default-900 ">
                <Icon icon="lucide:car" className="text-base me-1" /> 1
              </span>
            </label>
            <label>
              <input type="radio" name="parking" id="parking-2" className="hidden peer" />
              <span className="inline-flex items-center text-center border rounded-full py-2 px-5 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900 peer-checked:bg-default-100  peer-checked:dark:bg-white/10 peer-hover:border-default-900 ">
                <Icon icon="lucide:car" className="text-base me-1" /> 2
              </span>
            </label>
            <label>
              <input type="radio" name="parking" id="parking-3" className="hidden peer" />
              <span className="inline-flex items-center text-center border rounded-full py-2 px-5 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900 peer-checked:bg-default-100  peer-checked:dark:bg-white/10 peer-hover:border-default-900 ">
                <Icon icon="lucide:car" className="text-base me-1" />3
              </span>
            </label>
            <label>
              <input type="radio" name="parking" id="parking-4" className="hidden peer" />
              <span className="inline-flex items-center text-center border rounded-full py-2 px-5 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900 peer-checked:bg-default-100  peer-checked:dark:bg-white/10 peer-hover:border-default-900 ">
                <Icon icon="lucide:car" className="text-base me-1" /> 4
              </span>
            </label>
            <label>
              <input type="radio" name="parking" id="parking-5" className="hidden peer" />
              <span className="inline-flex items-center text-center border rounded-full py-2 px-5 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900 peer-checked:bg-default-100  peer-checked:dark:bg-white/10 peer-hover:border-default-900 ">
                <Icon icon="lucide:car" className="text-base me-1" /> 5
              </span>
            </label>
          </div>
        </div>
        <h2 className="text-default-900 mb-4 font-semibold">Amenities</h2>
        <div className="grid md:grid-cols-3 grid-cols-2 gap-6 mb-12">
          <label htmlFor="tv" className="flex items-center text-default-700 text-sm cursor-pointer checked:text-default-800">
            <input type="checkbox" id="tv" className="size-4 checked:text-dark border-default-300 dark:bg-body-bg! rounded me-2" />
            TV set
          </label>
          <label htmlFor="washing" className="flex items-center text-default-700 text-sm cursor-pointer checked:text-default-800">
            <input type="checkbox" id="washing" className="size-4 checked:text-dark border-default-300 dark:bg-body-bg! rounded me-2" />
            Washing machine
          </label>

          <label htmlFor="kitchen" className="flex items-center text-default-700 text-sm cursor-pointer checked:text-default-800">
            <input type="checkbox" id="kitchen" className="size-4 checked:text-dark border-default-300 dark:bg-body-bg! rounded me-2" />
            Kitchen
          </label>

          <label htmlFor="ac" className="flex items-center text-default-700 text-sm cursor-pointer checked:text-default-800">
            <input type="checkbox" id="ac" className="size-4 checked:text-dark border-default-300 dark:bg-body-bg! rounded me-2" />
            Air conditioning
          </label>

          <label htmlFor="workspace" className="flex items-center text-default-700 text-sm cursor-pointer checked:text-default-800">
            <input type="checkbox" id="workspace" className="size-4 checked:text-dark border-default-300 dark:bg-body-bg! rounded me-2" />
            Separate workplace
          </label>

          <label htmlFor="fridge" className="flex items-center text-default-700 text-sm cursor-pointer checked:text-default-800">
            <input type="checkbox" id="fridge" className="size-4 checked:text-dark border-default-300 dark:bg-body-bg! rounded me-2" />
            Refrigerator
          </label>

          <label htmlFor="drying" className="flex items-center text-default-700 text-sm cursor-pointer checked:text-default-800">
            <input type="checkbox" id="drying" className="size-4 checked:text-dark border-default-300 dark:bg-body-bg! rounded me-2" />
            Drying machine
          </label>

          <label htmlFor="closet" className="flex items-center text-default-700 text-sm cursor-pointer checked:text-default-800">
            <input type="checkbox" id="closet" className="size-4 checked:text-dark border-default-300 dark:bg-body-bg! rounded me-2" />
            Closet
          </label>

          <label htmlFor="patio" className="flex items-center text-default-700 text-sm cursor-pointer checked:text-default-800">
            <input type="checkbox" id="patio" className="size-4 checked:text-dark border-default-300 dark:bg-body-bg! rounded me-2" />
            Patio
          </label>

          <label htmlFor="fireplace" className="flex items-center text-default-700 text-sm cursor-pointer checked:text-default-800">
            <input type="checkbox" id="fireplace" className="size-4 checked:text-dark border-default-300 dark:bg-body-bg! rounded me-2" />
            Fireplace
          </label>

          <label htmlFor="shower" className="flex items-center text-default-700 text-sm cursor-pointer checked:text-default-800">
            <input type="checkbox" id="shower" className="size-4 checked:text-dark border-default-300 dark:bg-body-bg! rounded me-2" />
            Shower cabin
          </label>

          <label htmlFor="whirlpool" className="flex items-center text-default-700 text-sm cursor-pointer checked:text-default-800">
            <input type="checkbox" id="whirlpool" className="size-4 checked:text-dark border-default-300 dark:bg-body-bg! rounded me-2" />
            Whirlpool
          </label>

          <label htmlFor="cctv" className="flex items-center text-default-700 text-sm cursor-pointer checked:text-default-800">
            <input type="checkbox" id="cctv" className="size-4 checked:text-dark border-default-300 dark:bg-body-bg! rounded me-2" />
            Security cameras
          </label>

          <label htmlFor="balcony" className="flex items-center text-default-700 text-sm cursor-pointer checked:text-default-800">
            <input type="checkbox" id="balcony" className="size-4 checked:text-dark border-default-300 dark:bg-body-bg! rounded me-2" />
            Balcony
          </label>

          <label htmlFor="bar" className="flex items-center text-default-700 text-sm cursor-pointer checked:text-default-800">
            <input type="checkbox" id="bar" className="size-4 checked:text-dark border-default-300 dark:bg-body-bg! rounded me-2" />
            Bar
          </label>
        </div>
      </div>
    </>
  )
}

export default PropertyDetail
