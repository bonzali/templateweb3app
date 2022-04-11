import React from 'react'
import { Slider } from '@/components/elements'
import { NFTCollections as data } from '@/data'
import { CollectionCard } from '@/components/partials'

export function NFTCollections(props) {
  return (
    <section className="py-28 relative">
      <div className="collection-bg absolute" />
      <div className="py-10  md:py-16">
        <div className="text-center px-5">
          <h1 className="font-bold text-3xl md:text-4xl leading-normal">
            Checkout Our NFT Collections
          </h1>
          <p className="mt-5">
            Here are some of the top projects we’ve launched.
          </p>
        </div>
        <div className="mt-10">
          <Slider align={'center'}>
            {data.map((item, index) => (
              <CollectionCard key={`collection-${index}`} item={item} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}
