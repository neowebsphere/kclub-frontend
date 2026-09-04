import { MapPin, Navigation, Search } from 'lucide-react'

const DoctorFilter = () => {
  return (
    <>
      <h1 className="lg:text-3.5xl md:text-2.5xl text-2xl text-default-900 font-semibold pb-2 mb-6">Physicians in Chicago</h1>

      <div className="flex flex-wrap items-center lg:gap-6 gap-4 md:mb-6 mb-5">
        <div className="w-full md:w-37/100 lg:w-1/5">
          <div className="relative">
            <Search className="absolute top-1/2 start-3.5 -translate-y-1/2 text-default-500 size-3.5" />
            <input type="search" defaultValue="Physician" placeholder="Search doctor" className="w-full border border-default-300 dark:border-white/30 rounded-md ps-10 pe-3 py-2 bg-transparent focus:ring-2 text-sm" />
          </div>
        </div>
        <div className="w-full md:w-4/12 lg:w-3/20">
          <div className="relative">
            <MapPin className="absolute top-1/2 start-3.5 -translate-y-1/2 text-default-500 size-3.5" />
            <select className="w-full border border-default-300 dark:border-white/30 rounded-md ps-10 pe-8 py-2 bg-transparent focus:ring-2 text-sm appearance-none">
              <option>Any location</option>
              <option>New York</option>
              <option>Los Angeles</option>
              <option defaultChecked>Chicago</option>
              <option>Houston</option>
              <option>Phoenix</option>
              <option>Philadelphia</option>
              <option>San Antonio</option>
              <option>San Diego</option>
              <option>Dallas</option>
              <option>San Jose</option>
            </select>
          </div>
        </div>
        <div className="w-full sm:w-5/12 md:w-3/12 lg:w-2/12">
          <div className="relative">
            <Navigation className="absolute top-1/2 start-3.5 -translate-y-1/2 text-default-500 size-3.5" />
            <select className="w-full border border-default-300 dark:border-white/30 rounded-md ps-10 pe-8 py-2 bg-transparent focus:ring-2 text-sm appearance-none">
              <option>Any radius</option>
              <option defaultChecked>5 mi</option>
              <option>10 mi</option>
              <option>20 mi</option>
              <option>30 mi</option>
              <option>40 mi</option>
              <option>50 mi</option>
            </select>
          </div>
        </div>
        <div className="flex gap-6 lg:w-4/12">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="peer hidden" />
            <span className="w-11 h-6 rounded-full bg-default-300 peer-checked:bg-success relative after:content-[''] after:absolute after:top-0.75 after:start-0.75 after:w-4.5 after:h-4.5 after:bg-white after:rounded-full after:transition-all peer-checked:after:translate-x-5" />
            <span className="text-sm">Online</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="peer hidden" />
            <span className="w-11 h-6 rounded-full bg-default-300 peer-checked:bg-success relative after:content-[''] after:absolute after:top-0.75 after:start-0.75 after:w-4.5 after:h-4.5 after:bg-white after:rounded-full after:transition-all peer-checked:after:translate-x-5" />
            <span className="text-sm">Visit clinic</span>
          </label>
        </div>
      </div>
    </>
  )
}

export default DoctorFilter
