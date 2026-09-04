import { Icon } from '@iconify/react'
import { CreditCard, Star } from 'lucide-react'

const ListingMeta = () => {
  return (
    <>
      <div className="flex flex-wrap items-center gap-2 pb-1 lg:mb-6 mb-4">
        <div className="flex items-center gap-1 text-sm ms-2">
          <Star className="fill-warning text-warning size-4" />
          <span className="text-default-700">4.8</span>
          <span className="text-xs text-default-500 self-end">(127)</span>
        </div>
        <div className="flex items-center gap-1 text-sm ms-2">
          <CreditCard className="size-3.5" />
          $$
        </div>
        <div className="bg-success ms-2 text-white text-xs inline-flex item-center font-medium px-2 py-0.5 rounded items-center">
          Vegan Options
          <Icon icon="lucide:leaf" className="ms-1" />
        </div>
        <div className="bg-info ms-2 text-white text-xs inline-flex item-center font-medium px-2 py-0.5 rounded items-center">
          Verified Hires
          <Icon icon="lucide:shield" className="ms-1" />
        </div>
      </div>
    </>
  )
}

export default ListingMeta
