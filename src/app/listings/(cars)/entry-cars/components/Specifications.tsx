import { Icon } from '@iconify/react'

const Specifications = () => {
  return (
    <>
      <div>
        <h2 className="md:my-6 pt-12 mb-4 md:text-2.5xl text-xl font-semibold text-default-900">Specifications</h2>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
          <ul className="list-none text-default-500 -mt-1 flex flex-col gap-2">
            <li className="mt-1">
              <span className="font-medium text-default-900 me-1">Manufacturing year:</span>
              2021
            </li>
            <li className="mt-1">
              <span className="font-medium text-default-900 me-1">Mileage:</span>
              60K miles
            </li>
            <li className="mt-1">
              <span className="font-medium text-default-900 me-1">Body type:</span>
              Convertible
            </li>
            <li className="mt-1">
              <span className="font-medium text-default-900 me-1">Drive type:</span>2 wheel drive - rear
            </li>
            <li className="mt-1">
              <span className="font-medium text-default-900 me-1">Engine:</span>
              6-Cylinder Turbo
            </li>
            <li className="mt-1">
              <span className="font-medium text-default-900 me-1">Transmission:</span>
              7-Speed Shiftable Automatic
            </li>
          </ul>
          <ul className="list-none text-default-500 -mt-1 flex flex-col gap-2 ">
            <li className="mt-1">
              <span className="font-medium text-default-900 me-1">Fuel type:</span>
              2021
            </li>
            <li className="mt-1 flex items-center">
              <span className="font-medium text-default-900 me-1">City MPG:</span>
              60K miles
              <Icon icon="lucide:alert-circle" className="text-lg text-primary ms-2 align-middle" />
            </li>
            <li className="mt-1 flex items-center">
              <span className="font-medium text-default-900 me-1">Highway MPG:</span>
              Convertible
              <Icon icon="lucide:alert-circle" className="text-lg text-primary ms-2 align-middle" />
            </li>
            <li className="mt-1">
              <span className="font-medium text-default-900 me-1">Exterior color:</span>2 wheel drive - rear
            </li>
            <li className="mt-1">
              <span className="font-medium text-default-900 me-1">Interior color:</span>
              Charcoal
            </li>
            <li className="mt-1">
              <span className="font-medium text-default-900 me-1">VIN:</span>
              2VW821AU9JM754284
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Specifications
