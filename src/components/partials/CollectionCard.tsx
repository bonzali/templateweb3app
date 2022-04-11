import { INFTCollection } from '@/lib/types'
import { Image } from '@/components/elements'

type Props = {
  item: INFTCollection
}

export function CollectionCard({ item: { title, description, image } }: Props) {
  return (
    <div className="w-10/12 md:w-[390px] flex-none bg-white bg-opacity-10 rounded-xl mx-5 ">
      <div className="relative w-full flex flex-col items-center">
        <Image className="h-40 w-full" src={image} />
        <div className="absolute bottom-0  translate-y-1/2  border-8 border-gray-300 rounded-full">
          <Image rounded className="w-20 h-20  " src={image} />
        </div>
      </div>
      <div className="px-5 pb-5 pt-16 space-y-3 text-center">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}
