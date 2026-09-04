import building from '@/assets/img/home/real-estate/building.png'
import Image from 'next/image'
import Link from 'next/link'

const Calculator = () => {
  return (
    <>
      <section className="lg:py-8">
        <div className="container">
          <div className="bg-info lg:py-10 lg:px-0 md:p-12 py-12 px-6 rounded-xl grid lg:grid-cols-2 grid-cols-1 gap-6 items-center">
            <div className="mx-auto lg:w-120 md:w-85">
              <Image src={building} alt="Image" />
            </div>
            <div className="lg:py-6 py-0 px-3 lg:w-120 lg:text-start text-center">
              <h2 className="mb-4 text-white lg:text-3.5xl md:text-2.5xl text-2xl font-semibold">Calculate your property's cost</h2>
              <p className="text-lg text-white/60 mb-8">Real estate appraisal is a procedure that allows you to determine the average market value of real estate (apartment, house, land, etc.).</p>
              <Link href="" className="bg-primary inline-flex font-medium rounded-md py-3.5 px-6 text-white transition-all duation-300 hover:bg-primary/95">
                Start now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Calculator
