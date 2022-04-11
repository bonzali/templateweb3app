import React from 'react'
import FadeInAnimation from '../shared/revealAnimation'
import { FEATURES } from '@/data'
export function HomeFeatures() {
  return (
    <FadeInAnimation>
      <div className="max-w-5xl mx-auto flex flex-wrap py-28 gap-y-20 px-10 md:px-0  ">
        {FEATURES.map((item, index) => (
          <div className="w-full md:w-1/3 md:px-5 text-center space-y-5">
            <h1 className="text-accent text-xl font-semibold">{item.title}</h1>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </FadeInAnimation>
  )
}
