import React, { useState } from 'react'
import VSensor from 'react-visibility-sensor'

const FadeInAnimation = ({ children }) => {
  return (
    <VisibilitySensor partialVisibility offset={{ bottom: 150 }}>
      {({ isVisible }) => (
        <div
          className={isVisible ? 'reveal_animation enter' : 'reveal_animation'}
        >
          {children}
        </div>
      )}
    </VisibilitySensor>
  )
}

export default FadeInAnimation

const VisibilitySensor = (props) => {
  const [active, setActive] = useState(true)
  const { children, ...theRest } = props

  return (
    <VSensor
      active={active}
      onChange={(isVisible) => isVisible && setActive(false)}
      {...theRest}
    >
      {({ isVisible }) => children({ isVisible })}
    </VSensor>
  )
}
