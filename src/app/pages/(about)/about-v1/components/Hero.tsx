const Hero = () => {
  return (
    <>
      <section className="pt-24 pb-12 lg:mb-4 lg:mt-10 md:mt-8 mt-4">
        <div className="container">
          <div className="text-default-900 uppercase mb-4 text-center">About us</div>
          <h1 className="lg:text-6xl md:text-5xl text-4xl text-center font-bold lg:mb-12 md:mb-10 mb-8 text-default-900 w-204 mx-auto">Easy way to find a perfect property with Finder</h1>
          <div>
            <video className="rounded-xl" muted loop playsInline autoPlay poster="/video-poster.jpg">
              <source src="/video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
