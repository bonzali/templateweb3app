export type IFeatureDetails = {
  title: string
  image: string
  details: { title: string; description: string }[]
  variant?: 'left' | 'right'
}

export type INFTCollection = {
  image: string
  title: string
  description: string
}
