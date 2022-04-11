import React from 'react'
import Head from 'next/head'
import Header from '@/components/shared/Header'
import { HomeFeatureDetails } from '@/data'
import { Images } from '@/lib'
import Footer from '@/components/shared/Footer'
import {
  CallToAction,
  FeatureDetails,
  HomeFeatures,
  HomeHero,
  Newsletter,
  NFTCollections,
  NFTPlatform,
} from '@/components/sections'

function Home() {
  return (
    <div>
      <Head>
        <title>ONE-OF-BUSINESS</title>
      </Head>
      <Header />
      <HomeHero />
      <div className="relative">
        <div className="feature-bg" />
        <HomeFeatures />
        <CallToAction
          image={Images.HomeCTA}
          actionName="Learn More"
          title="Discover and buy extraordinary NFTs from Marketplace built on BSC, FTM and Polygon"
        />
      </div>
      <section>
        {HomeFeatureDetails.map((item, index) => (
          <FeatureDetails key={`details${index}`} data={item} />
        ))}
      </section>
      <NFTPlatform />
      <NFTCollections />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home
