/* eslint-disable no-use-before-define */
// import logo from './logo.svg';
import './App.css'
import { Greeter } from './Greeter'
import { GreeterClass } from './GreeterClass'
// import {Clock} from './Clock';
import { ClockClass } from './ClockClass'
import React from 'react'

function App () {
  return (
    <div className="App">

      <Greeter name="This is func component" />
      <GreeterClass name="This is class component" />
      <ClockClass />
    </div>
  )
}

export default App
