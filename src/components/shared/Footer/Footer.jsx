import React from 'react'

function Footer() {
  return (
    <div className=" bg-accent2 px-5 md:px-20 py-10 ">
      <div>
        <h1 className="font-bold text-lg text-center">ONE-OF-BUSINESS</h1>
        <p className="md:w-8/12 mx-auto text-xs mb-8 mt-3 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio odio
          aliquet vulputate ac ipsum, duis. Et cursus lorem dui sit velit. Non,
          fames mauris egestas adipiscing. Molestie nibh turpis porttitor
          iaculis.
        </p>
      </div>
      <hr className="bg-gray-100 opacity-10" />
      <div className="flex flex-col-reverse md:flex-row items-center text-center justify-between text-xs pt-3">
        <div className="">
          <p>© 2022 by Freedom. All rights reserved</p>
        </div>
        <div className="flex flex-col md:flex-row gap-x-5 gap-y-3 py-3">
          <a>Terms of Service</a>
          <a>Privacy policy</a>
          <a>Cookie Policy</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
