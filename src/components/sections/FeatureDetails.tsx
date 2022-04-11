import React from 'react'
import classNames from 'classnames'
import FadeInAnimation from '@/components/shared/revealAnimation'
import { IFeatureDetails } from '@/lib/types'
type Props = {
  data: IFeatureDetails
}
export function FeatureDetails({
  data: { title, details, variant = 'left', image },
}: Props) {
  return (
    <FadeInAnimation>
      <div
        className={classNames(
          'mx-auto max-w-7xl md:px-28 flex flex-wrap md:flex-nowrap py-16',
          {
            'md:flex-row-reverse': variant === 'right',
          }
        )}
      >
        <img className="w-10/12 mx-auto md:w-[55%]" alt={title} src={image} />
        <div className="px-10 md:px-16 pt-10 md:pt-0 text-center md:text-left">
          <h1 className="mb-10 font-bold text-2xl">{title}</h1>
          {details.map((item, index) => (
            <div className="mt-10 space-y-5 ">
              <h2 className="font-bold text-base text-accent">{item.title}</h2>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </FadeInAnimation>
  )
}
