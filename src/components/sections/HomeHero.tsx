import React from 'react'
import FadeInAnimation from '../shared/revealAnimation'
import { Images } from '@/lib'
import { Image } from '@/components/elements'
export function HomeHero() {
  return (
    <FadeInAnimation>
      <div className="max-w-5xl px-6 md:px-0 mx-auto flex flex-col items-center gap-y-6">
        <h1 className="pt-16 font-semibold text-center leading-tight text-4xl md:text-7xl">
          Reciprocal Interchange, <br /> Mutual Trading
        </h1>
        <p className="text-center md:w-2/3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi mattis ut
          augue arcu, dui lacinia tempor, tristique morbi. Nunc velit{' '}
        </p>
        <button className="h-12 px-5 mb-5 bg-accent">Get a Quote</button>
      </div>
      <img alt={'hero'} src={Images.HomeHeroBg} />
    </FadeInAnimation>
  )
}
