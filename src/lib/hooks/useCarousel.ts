import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import * as React from 'react'
import { useWindowSize } from './useWindowSize'

export const useCarousel = ({
  align = 'start',
  containScroll = 'trimSnaps',
  skipSnaps = false,
  ...rest
}: EmblaOptionsType) => {
  const [emblaRef, embla] = useEmblaCarousel({
    skipSnaps,
    align,
    containScroll,
    ...rest,
  })
  const { width } = useWindowSize()

  const [prevBtnEnabled, setPrevBtnEnabled] = React.useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = React.useState(false)

  const onSelect = React.useCallback(() => {
    if (!embla) return
    // setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev())
    setNextBtnEnabled(embla.canScrollNext())
  }, [embla])

  const scrollNext = React.useCallback(
    () => embla && embla.scrollNext(),
    [embla]
  )

  const scrollPrev = React.useCallback(
    () => embla && embla.scrollPrev(),
    [embla]
  )
  React.useEffect(() => {
    if (!embla) return
    onSelect()
    embla.on('select', onSelect)
  }, [embla, width])

  const NextButton = {
    enabled: nextBtnEnabled,
    scrollNext: scrollNext,
  }

  const PreviousButton = {
    enabled: prevBtnEnabled,
    scrollPrev: scrollPrev,
  }

  return { emblaRef, embla, NextButton, PreviousButton }
}
