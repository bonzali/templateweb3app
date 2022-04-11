import React from 'react'
import { default as NextImage, ImageProps } from 'next/image'
import classNames from 'classnames'
type Props = ImageProps & { className?: string; rounded?: boolean }

const Image = React.forwardRef<HTMLImageElement, Props>(
  ({ className = '', layout = 'fill', rounded, objectFit, ...rest }, ref) => {
    const style = classNames(className, 'relative overflow-hidden', {
      'rounded-full': rounded,
    })
    return (
      <div ref={ref} className={style}>
        <NextImage layout={layout} objectFit={objectFit || 'cover'} {...rest} />
      </div>
    )
  }
)

export { Image }
