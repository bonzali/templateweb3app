import React from 'react'
import FadeInAnimation from '@/components/shared/revealAnimation'
import { Images } from '@/lib'

export function NFTPlatform(props) {
  return (
    <FadeInAnimation>
      <section className="flex items-center flex-col-reverse md:flex-row mx-auto max-w-7xl md:px-28 ">
        <div className="px-5 md:px-10 text-center md:text-left">
          <p className="text-accent">Built On Tezos</p>
          <h1 className="font-bold text-2xl md:text-4xl leading-normal text-center md:text-left py-5">
            The Green NFT platform that connects artists and fans.
          </h1>
          <p>
            OneOf is built on the Tezos blockchain, an energy efficient
            proof-of-stake network. OneOf chose Tezos because of its energy
            efficient design as well as its unique ability to self-amend,
            allowing it to undergo regular upgrades that keep it at the cutting
            edge of innovation.
          </p>
        </div>
        <img
          className="w-5/6 mx-auto md:w-1/3 -rotate-90 md:rotate-0 "
          alt="The Green NFT platform that connects artists and fans."
          src={Images.HomePlatform}
        />
      </section>
    </FadeInAnimation>
  )
}
