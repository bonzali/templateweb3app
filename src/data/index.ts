import { IFeatureDetails, INFTCollection } from '@/lib/types'
import { Images } from '@/lib'

export const NavbarLinks = [
  { href: '/', title: 'Home' },
  { href: '/features', title: 'Features' },
  { href: '/aboutus', title: 'About Us' },
]

export const FEATURES = [
  {
    title: 'Branded Storefront',
    description: 'Sell NFT’s with your own custom URL and branded Storefront',
  },
  {
    title: 'No Code Via Partners',
    description:
      "Don't have developers? No problem! Launch your own NFT collection with our partners without writing a single line of code",
  },
  {
    title: 'Multi-file Format',
    description:
      'nameless™ supports video, images, audio and even 3D file types',
  },
]

export const HomeFeatureDetails: IFeatureDetails[] = [
  {
    title: 'Track all your reports, review sales and keep growing',
    variant: 'left',
    image: Images.HomeChartPreview,
    details: [
      {
        title: 'Updated Reports',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas vitae aliquam cursus sit amet, cum molestie viverra',
      },
      {
        title: 'Revenue Updates',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas vitae aliquam cursus sit amet, cum molestie viverra',
      },
    ],
  },
  {
    title: 'Create and add NFt’s Collections, Artists...',
    variant: 'right',
    image: Images.NftPreview1,
    details: [
      {
        title: 'Easy Updates and Creation',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas vitae aliquam cursus sit amet, cum molestie viverra',
      },
      {
        title: 'Edit, Delete or Duplicate ',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas vitae aliquam cursus sit amet, cum molestie viverra',
      },
    ],
  },
  {
    title: 'Browse through our massive NFT marketplace',
    variant: 'left',
    image: Images.MarketPreview,
    details: [
      {
        title: 'Mint Full Collections ',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas vitae aliquam cursus sit amet, cum molestie viverra',
      },
      {
        title: 'Checkout Single NFT’s',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas vitae aliquam cursus sit amet, cum molestie viverra',
      },
    ],
  },
]

export const NFTCollections: INFTCollection[] = [
  {
    image: '/assets/images/c1.png',
    title: 'Rihanna’s Collection',
    description:
      'Artist creating #JOYWORLD to make you feel JOYful and creative!',
  },

  {
    title: 'Big Dawg Collection',
    image: '/assets/images/c2.png',
    description:
      'Official 4/20 drop between Nyan Cat and the one and only Snoop Dogg!',
  },
  {
    title: 'Artist Bang Collection',
    image: '/assets/images/c3.png',
    description: 'A Non-Fungible access token project by Gary Vee.',
  },
  {
    title: 'Trap Boys Collection',
    image: '/assets/images/c4.png',
    description: 'Generative Art Stored on the Blockchain',
  },
  {
    image: '/assets/images/c1.png',
    title: 'Rihanna’s Collection',
    description:
      'Artist creating #JOYWORLD to make you feel JOYful and creative!',
  },
]
