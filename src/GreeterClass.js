// class component
// ideal for state management
/* eslint-disable react/prop-types */

// eslint-disable-next-line no-use-before-define
import React from 'react'

export class GreeterClass extends React.Component {
  // must overwrite the render function

  render () {
    // since its a class, props accessed using this keyword
    return (<h1>
            {this.props.name}
        </h1>)
  }
}
