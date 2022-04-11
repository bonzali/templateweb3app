import React from 'react'
import { useCarousel } from '@/lib/hooks'
import { EmblaOptionsType } from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'tabler-icons-react'
import s from './Slider.module.scss'

type SliderProps = {
  children: any
  className?: string
} & EmblaOptionsType

const Slider: React.FC<SliderProps> = ({ children, className, ...rest }) => {
  const { emblaRef, NextButton, PreviousButton } = useCarousel({ ...rest })
  return (
    <div className={s.Slider}>
      <div ref={emblaRef} className={s.Embla}>
        <div style={{ display: 'flex' }} className={className}>
          {children && children.map((child) => child)}
        </div>
      </div>
      <div style={{ left: '20px' }} className={s.SliderOverlay}>
        <button
          disabled={!PreviousButton.enabled}
          onClick={PreviousButton.scrollPrev}
          className={s.NextButton}
        >
          <ChevronLeft color="#000" size={20} />
        </button>
      </div>
      <div style={{ right: '20px' }} className={s.SliderOverlay}>
        <button
          disabled={!NextButton.enabled}
          onClick={NextButton.scrollNext}
          className={s.NextButton}
        >
          <ChevronRight color="#000" size={20} />
        </button>
      </div>
    </div>
  )
}

export default Slider
