import Link from "next/link"

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container" />
        <div className="text-sm text-center lg:py-12 md:py-10 py-6">
          © All rights reserved. Made by
          <Link className="hover:underline text-default-900" href="#!" target="_blank" rel="noreferrer">
            Coderthemes
          </Link>
        </div>
      </footer>
    </>
  )
}

export default Footer
