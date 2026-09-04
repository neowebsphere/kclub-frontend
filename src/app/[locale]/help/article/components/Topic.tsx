import { Icon } from "@iconify/react"
import { Link } from '@/i18n/navigation'

const Topic = () => {
  return (
    <>
      <section className="mb-12 lg:pb-12 md:pb-8">
        <div className="container">
          <ul className="flex md:gap-4 gap-2 lg:mb-12 mb-10">
            <li>
              <Link href="#!" className="py-2.5 px-5 inline-flex rounded-full text-default-900 border border-default-900 bg-default-100 dark:bg-white/3 text-sm font-semibold">
                For tenants
              </Link>
            </li>
            <li>
              <Link href="#!" className="py-2.5 px-5 inline-flex rounded-full text-default-900 border border-default-300 dark:border-white/20 hover:border-default-900 transition-all duration-300 text-sm font-semibold">
                For hosts
              </Link>
            </li>
          </ul>
          <div className="grid md:grid-cols-12 grid-cols-1 md:gap-0 gap-8">
            <div className="lg:col-span-3 md:col-span-4 col-span-1">
              <h2 className="md:pb-6 pb-4 text-xl text-default-900 font-semibold border-b border-border">Help topics</h2>
              <div>
                <div className="flex flex-col gap-1 pt-6 pe-6">
                  <Link href="/help" className="py-2.5 px-4 w-full rounded inline-flex items-center font-semibold text-default-900 bg-default-100 dark:bg-white/3">
                    Accomodation
                  </Link>
                  <Link href="/help" className="py-2.5 px-4 w-full rounded inline-flex items-center font-semibold text-default-900">
                    Booking
                  </Link>
                  <Link href="/help" className="py-2.5 px-4 w-full rounded inline-flex items-center font-semibold text-default-900">
                    Payment
                  </Link>
                  <Link href="/help" className="py-2.5 px-4 w-full rounded inline-flex items-center font-semibold text-default-900">
                    After a booking
                  </Link>
                  <Link href="/help" className="py-2.5 px-4 w-full rounded inline-flex items-center font-semibold text-default-900">
                    Cancellation, notice, exptension
                  </Link>
                  <Link href="/help" className="py-2.5 px-4 w-full rounded inline-flex items-center font-semibold text-default-900">
                    Regulations
                  </Link>
                  <Link href="/help" className="py-2.5 px-4 w-full rounded inline-flex items-center font-semibold text-default-900">
                    Insurances
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:col-span-9 md:col-span-8 col-span-1">
              <div className="md:pb-6 pb-4 md:ps-6 text-xl text-default-900 font-semibold border-b border-border flex ">
                <Icon icon="lucide:chevron-left"  className="me-2 text-2xl" />
                <h2>What is included in my rental accommodation?</h2>
              </div>
              <div className="md:border-s border-border md:ps-6 pt-6 lg:w-202.5 w-full">
                <p className="mb-4">When you rent a property, it's important to understand exactly what is included in your rental accommodation to ensure that it meets your needs and expectations. Here's a breakdown of the typical inclusions and what you should consider:</p>
                <h3 className="text-default-900 font-semibold lg:pt-4 pt-2 mb-4">1. Furnishings</h3>
                <p className="mb-4">The level of furnishing can vary significantly between rental properties. Typically, rental accommodations are categorized as:</p>
                <ul className="list-disc ps-5 space-y-2 text-body-color">
                  <li>
                    <span className="text-default-900 font-medium">Fully furnished:</span>
                    Includes essential furniture such as beds, sofas, dining tables, chairs, and sometimes even decor items like lamps, artwork, and rugs. Kitchens are usually equipped with basic appliances and utensils.
                  </li>
                  <li>
                    <span className="text-default-900 font-medium">Partially furnished:</span>
                    Includes some essential furniture but may not have everything you need. For example, the property might include a bed and sofa, but you'll need to provide your own kitchenware and additional furnishings.
                  </li>
                  <li>
                    <span className="text-default-900 font-medium">Unfurnished:</span>
                    Contains no furniture or only basic appliances like a stove and refrigerator. This option gives you the freedom to furnish the space according to your taste but requires an initial investment in furniture.
                  </li>
                </ul>
                <h3 className="text-default-900 font-semibold lg:pt-4 pt-2 mb-4">2. Appliances</h3>
                <p className="mb-4">Most rental accommodations include essential appliances, but the specific items can vary:</p>
                <ul className="list-disc ps-5 space-y-2 text-body-color">
                  <li>
                    <span className="text-default-900 font-medium">Kitchen appliances:</span>
                    Standard inclusions often cover a refrigerator, stove/oven, and microwave. Some rentals may also include a dishwasher, toaster, and coffee maker.
                  </li>
                  <li>
                    <span className="text-default-900 font-medium">Laundry: </span>
                    Depending on the property, you might have an in-unit washer and dryer, access to shared laundry facilities, or no laundry facilities at all.
                  </li>
                  <li>
                    <span className="text-default-900 font-medium">Heating and cooling: </span>
                    Central heating and air conditioning are common, but some properties may only have portable heaters or window A/C units. It's important to check what's available to ensure comfort throughout the year.
                  </li>
                </ul>
                <h3 className="text-default-900 font-semibold lg:pt-4 pt-2 mb-4">3. Utilities</h3>
                <p className="mb-4">Utilities are sometimes included in the rent, but this varies by property:</p>
                <ul className="list-disc ps-5 space-y-2 text-body-color">
                  <li>
                    <span className="text-default-900 font-medium">Included utilities:</span>
                    Some rentals include the cost of water, electricity, gas, heating, and even internet or cable in the rent. This can simplify budgeting, as you won't have separate utility bills to pay.
                  </li>
                  <li>
                    <span className="text-default-900 font-medium">Excluded utilities: </span>
                    If utilities are not included, you'll be responsible for setting up and paying for these services separately. Be sure to ask for an estimate of monthly utility costs so you can budget accordingly.
                  </li>
                </ul>
                <h3 className="text-default-900 font-semibold lg:pt-4 pt-2 mb-4">4. Internet and cable</h3>
                <p className="mb-4">Some rental accommodations come with pre-installed internet and cable services, either included in the rent or available as an add-on. If these services are not provided, you'll need to arrange for installation and pay for them separately.</p>
                <h3 className="text-default-900 font-semibold lg:pt-4 pt-2 mb-4">5. Maintenance and repairs</h3>
                <p className="mb-4">
                  Most rental agreements specify that the landlord is responsible for the maintenance and repair of essential services like plumbing, heating, and electrical systems. However, tenants are usually responsible for minor maintenance, such as changing light bulbs or
                  keeping the property clean.
                </p>
                <ul className="list-disc ps-5 space-y-2 text-body-color">
                  <li>
                    <span className="text-default-900 font-medium">Emergency repairs: </span>
                    It's important to know how to report urgent issues, such as leaks or heating failures, and what the expected response time is.
                  </li>
                </ul>
                <h3 className="text-default-900 font-semibold lg:pt-4 pt-2 mb-4">6. Parking</h3>
                <p className="mb-4">If you have a vehicle, parking is an essential consideration:</p>
                <ul className="list-disc ps-5 space-y-2 text-body-color">
                  <li>
                    <span className="text-default-900 font-medium">Included parking: </span>
                    Some properties offer dedicated parking spaces, either in a garage or an outdoor lot, as part of the rental agreement.
                  </li>
                  <li>
                    <span className="text-default-900 font-medium">Additional parking: </span>
                    In some cases, parking is available but at an additional cost, or you may need to apply for a permit for street parking.
                  </li>
                </ul>
                <h3 className="text-default-900 font-semibold lg:pt-4 pt-2 mb-4">7. Outdoor space</h3>
                <p className="mb-4">Depending on the property type, you may have access to outdoor areas:</p>
                <ul className="list-disc ps-5 space-y-2 text-body-color">
                  <li>
                    <span className="text-default-900 font-medium">Private outdoor space: </span>
                    Some rentals include a private balcony, patio, or yard, which is typically your responsibility to maintain.
                  </li>
                  <li>
                    <span className="text-default-900 font-medium">Shared outdoor areas: </span>
                    In multi-unit buildings, you might have access to shared spaces like gardens, courtyards, or rooftop terraces.
                  </li>
                </ul>
                <h3 className="text-default-900 font-semibold lg:pt-4 pt-2 mb-4">8. Lease terms</h3>
                <p className="mb-4">
                  The inclusions and responsibilities associated with your rental accommodation should be clearly outlined in your lease agreement. This document will specify what is covered by your rent and what additional costs or responsibilities you may incur.
                </p>
                <h3 className="text-default-900 font-semibold lg:pt-4 pt-2 mb-4">9. Tenant's responsibilities</h3>
                <p className="mb-4">While the landlord typically covers major maintenance and repairs, you may be responsible for maintaining cleanliness, minor repairs, and following specific rules regarding the use of shared facilities.</p>
                <h3 className="text-default-900 font-semibold lg:pt-4 pt-2 mb-4">Conclusion</h3>
                <p className="mb-4">
                  Understanding what is included in your rental accommodation is essential for avoiding surprises and ensuring that the property meets your needs. Always clarify with the landlord or property manager exactly what is provided and what you're responsible for before
                  signing the lease.
                </p>
                <div className="pt-6">
                  <h4 className="text-default-900 font-semibold pb-1 mb-4">Was this information helpful?</h4>
                  <div className="flex gap-4">
                    <button type="button" className="py-2.5 px-5 border border-default-200 rounded-md text-default-800 transition-all duration-300 inline-flex items-center hover:border-default-900 dark:border-white/3 text-sm font-semibold">
                      <Icon icon="lucide:thumbs-up" className="me-2" />
                      Yes
                    </button>
                    <button type="button" className="py-2.5 px-5 border border-default-200 rounded-md text-default-800 transition-all duration-300 inline-flex items-center hover:border-default-900 dark:border-white/3 text-sm font-semibold">
                      <Icon icon="lucide:thumbs-down" className="me-2" />
                      No
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-6 mt-4">
            <h3 className="text-base font-semibold text-default-900 pb-1 mb-4">Can't find an answer to your question?</h3>
            <Link className="bg-primary text-white py-3.5 px-6 rounded-md font-semibold inline-flex transition-all duration-300 ease-in-out hover:bg-primary-hover" href="/contact">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Topic
