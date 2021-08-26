/* eslint-disable react/prop-types */
// functional component
// ideal for presentation
// eslint-disable-next-line no-use-before-define
import React from 'react'

export function Greeter (props) {
  return (<h1>
        Hey {props.name}!
    </h1>
  )
}
