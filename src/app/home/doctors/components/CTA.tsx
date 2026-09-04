import Link from "next/link"

const CTA = () => {
  return (
    <>
      <section className="md:pb-18 pb-12">
        <div className="container">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-6 bg-info rounded-md lg:py-20 md:py-14.5 md:px-0 px-6 py-12 mb-12 dark items-center">
            <div className="lg:col-span-10 md:col-span-9 col-span-1">
              <div className="lg:w-3xl md:w-100 w-full mx-auto">
                <h2 className="text-white md:text-start text-center lg:text-4.5xl md:text-3.5xl text-2.5xl font-semibold mb-6">Want to be listed in our directory?</h2>
                <div className="flex lg:gap-12 flex-wrap  md:justify-start justify-center md:gap-6 gap-4 items-center">
                  <div className="gap-3 flex items-center">
                    <div>
                      <div className="size-8 text-white text-sm font-semibold rounded-full border border-white flex justify-center items-center">1</div>
                    </div>
                    <div className="text-sm font-medium text-white">Register now</div>
                  </div>
                  <div className="gap-3 flex items-center">
                    <div>
                      <div className="size-8 text-white text-sm font-semibold rounded-full border border-white flex justify-center items-center">2</div>
                    </div>
                    <div className="text-sm font-medium text-white">Build your profile</div>
                  </div>
                  <div className="gap-3 flex items-center">
                    <div>
                      <div className="size-8 text-white text-sm font-semibold rounded-full border border-white flex justify-center items-center">3</div>
                    </div>
                    <div className="text-sm font-medium text-white">Get discovered</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 md:col-span-3 col-span-1">
              <div className="md:text-start text-center">
                <Link href="" className=" text-white inline-flex bg-primary hover:bg-primary-hover py-3.5 px-6 font-semibold transition-all duration-300 rounded-md">
                  Register now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CTA
