import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

const Communication = ({ color }) => {
  const {
    colors: { body },
  } = useContext(ThemeContext)
  const iconColor = color ? color : body
  return (
    <svg width="42" height="44" xmlns="http://www.w3.org/2000/svg">
      <g
        stroke={iconColor}
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 .917c2.26 0 4.09 1.846 4.09 4.125S23.26 9.167 21 9.167s-4.09-1.846-4.09-4.125c0-2.28 1.83-4.125 4.09-4.125zM29.182 17.417c-1.153-4.556-5.75-7.308-10.267-6.148a8.48 8.48 0 00-6.097 6.148h16.364zM21 24.75v-3.667M11 24.75l2.727-3.667M31 24.75l-2.727-3.667M21.156 29.333c2.36 0 4.273 1.929 4.273 4.309s-1.913 4.308-4.273 4.308c-2.36 0-4.272-1.929-4.272-4.308 0-2.38 1.912-4.309 4.272-4.309zM7.716 29.333c2.36 0 4.273 1.929 4.273 4.309s-1.913 4.308-4.273 4.308c-2.36 0-4.272-1.929-4.272-4.308 0-2.38 1.912-4.309 4.272-4.309zM34.298 29.333c2.36 0 4.273 1.929 4.273 4.309s-1.913 4.308-4.273 4.308c-2.36 0-4.273-1.929-4.273-4.308 0-2.38 1.913-4.309 4.273-4.309zM41 43.083a8.466 8.466 0 00-11.973-1.296c-.472.385-.903.82-1.285 1.296A8.81 8.81 0 0021 39.893M1 43.083a8.466 8.466 0 0111.973-1.296c.472.385.903.82 1.285 1.296A8.81 8.81 0 0121 39.893" />
      </g>
    </svg>
  )
}

export default Communication