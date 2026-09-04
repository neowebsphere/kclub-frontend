'use client'
import dynamic from 'next/dynamic'
const Map = dynamic(() => import('./Map'), { ssr: false })

const PropertyLocation = () => {
  return (
    <>
      <div className="lg:col-span-2">
        <h1 className="lg:text-3.5xl md:text-2.5xl text-2xl text-default-900 font-semibold lg:pb-2 pb-1 mb-4">Location</h1>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mb-6">
          <div className="lg:pb-4">
            <label className="block text-sm text-default-900 font-semibold mb-2">Country *</label>
            <select required className="w-full rounded-lg border border-default-300 dark:border-white/20 bg-transparent px-4.5 py-2.75">
              <option value="">Select country</option>
              <optgroup label="Africa">
                <option value="Nigeria">Nigeria</option>
                <option value="South Africa">South Africa</option>
                <option value="Kenya">Kenya</option>
                <option value="Egypt">Egypt</option>
                <option value="Ethiopia">Ethiopia</option>
              </optgroup>
              <optgroup label="Asia">
                <option value="China">China</option>
                <option value="India">India</option>
                <option value="Japan">Japan</option>
                <option value="South Korea">South Korea</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
              </optgroup>
              <optgroup label="Europe">
                <option value="Germany">Germany</option>
                <option value="France">France</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Italy">Italy</option>
                <option value="Spain">Spain</option>
              </optgroup>
              <optgroup label="North America">
                <option value="United States" defaultChecked>
                  United States
                </option>
                <option value="Canada">Canada</option>
                <option value="Mexico">Mexico</option>
                <option value="Jamaica">Jamaica</option>
                <option value="Costa Rica">Costa Rica</option>
              </optgroup>
              <optgroup label="South America">
                <option value="Brazil">Brazil</option>
                <option value="Argentina">Argentina</option>
                <option value="Colombia">Colombia</option>
                <option value="Chile">Chile</option>
                <option value="Peru">Peru</option>
              </optgroup>
              <optgroup label="Oceania">
                <option value="Australia">Australia</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Papua New Guinea">Papua New Guinea</option>
                <option value="Fiji">Fiji</option>
                <option value="Solomon Islands">Solomon Islands</option>
              </optgroup>
            </select>
          </div>
          <div className="lg:pb-4">
            <label className="block text-sm text-default-900 font-semibold mb-2">City *</label>
            <select required className="w-full rounded-lg border border-default-300 dark:border-white/20 bg-transparent px-4.5 py-2.75">
              <option value="">Select city</option>
              <option value="New York" defaultChecked>
                New York
              </option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="Chicago">Chicago</option>
              <option value="Houston">Houston</option>
              <option value="Phoenix">Phoenix</option>
              <option value="Philadelphia">Philadelphia</option>
              <option value="San Antonio">San Antonio</option>
              <option value="San Diego">San Diego</option>
              <option value="Dallas">Dallas</option>
              <option value="San Jose">San Jose</option>
              <option value="Austin">Austin</option>
              <option value="Jacksonville">Jacksonville</option>
            </select>
          </div>
          <div className="lg:pb-4">
            <label className="block text-sm text-default-900 font-semibold mb-2">District *</label>
            <select required className="w-full rounded-lg border border-default-300 dark:border-white/20 bg-transparent px-4.5 py-2.75">
              <option value="">Select district</option>
              <option value="Manhattan">Manhattan</option>
              <option value="Brooklyn" defaultChecked>
                Brooklyn
              </option>
              <option value="The Bronx">The Bronx</option>
              <option value="Staten Island">Staten Island</option>
            </select>
          </div>
          <div className="lg:pb-4">
            <label className="block text-sm text-default-900 font-semibold mb-2">Zip code *</label>
            <input type="text" id="zip" defaultValue={11237} required className="w-full rounded-lg border border-default-300 dark:border-white/20 bg-transparent px-4.5 py-2.75" />
          </div>
        </div>
        <div className="pb-6 md:mb-2">
          <label className="block text-sm text-default-900 font-semibold mb-2">Street address *</label>
          <input type="text" id="address" defaultValue="929 Hart Street" required className="w-full rounded-lg border border-default-300 dark:border-white/20 bg-transparent px-4.5 py-2.75" />
        </div>
        <h2 className="text-default-900 font-semibold mb-2">Display on the map</h2>
        <p className="text-sm mb-4">You can change the position of the mark on the map.</p>
        <Map />
      </div>
    </>
  )
}

export default PropertyLocation
