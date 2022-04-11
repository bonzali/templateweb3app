import React from 'react'
import FadeInAnimation from '../shared/revealAnimation'
import { ArrowNarrowRight } from 'tabler-icons-react'
import { Image } from '@/components/elements'
type Props = {
  title: string
  actionName: string
  onActionClick?: Function
  image: string
}
export function CallToAction({
  title,
  actionName,
  image,
  onActionClick = () => {},
}: Props) {
  return (
    <FadeInAnimation>
      <div className="mx-auto max-w-7xl md:px-28 flex justify-center items-center flex-col-reverse md:flex-row">
        <div className="w-full md:w-1/2 flex px-6 md:px-0 space-y-5 flex-col justify-center md:items-start items-center">
          <h1 className="font-bold text-3xl leading-normal text-center md:text-left ">
            {title}
          </h1>
          <button
            className="h-12 px-5 border flex items-center gap-x-2 border-primary"
            onClick={() => onActionClick()}
          >
            <span> {actionName}</span>
            <ArrowNarrowRight />
          </button>
        </div>
        <img alt={title} className="w-9/12 md:w-1/2" src={image} />
      </div>
    </FadeInAnimation>
  )
}
