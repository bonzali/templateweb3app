import React from 'react'
import FadeInAnimation from '../shared/revealAnimation'
import { Images } from '@/lib'
export function Newsletter() {
  return (
    <div className="my-20 py-10 md:py-0 mx-auto max-w-5xl bg-white bg-opacity-10 md:rounded-2xl  ">
      <div className="flex flex-col md:flex-row items-center py-5">
        <div className="flex justify-center items-center w-[55%]">
          <img alt="Join our newsletter" src={Images.Newsletter} />
        </div>
        <div className="pl-10 md:px-0">
          <h2 className="text-2xl md:text-4xl font-semibold">
            Join our newsletter
          </h2>
          <p className="py-5">
            No spam. Only latest Oneof news worth your attention.
          </p>
          <div className="rounded-2xl overflow-hidden w-5/6">
            <input
              className="bg-accent2 py-3 w-8/12 px-3 outline-none"
              type="email"
              placeholder="Your email"
              name="email"
            />
            <button className="px-3 bg-accent inline-block w-4/12 text-white py-3">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
