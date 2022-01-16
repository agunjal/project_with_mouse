import React, { Fragment } from 'react'
import { render } from 'react-dom'
import { Quadrant1, Quadrant2, Quadrant3, Quadrant4 } from './withMouse'
import './style.css'

const App = () => {
  return (
    <Fragment>
      <Quadrant1 bgcolor="pink" pi_bgcolor="red" />
      <Quadrant2 bgcolor="rgb(102, 102, 102)" pi_bgcolor="white" />
      <Quadrant3 bgcolor="powderblue" pi_bgcolor="blue" />
      <Quadrant4 bgcolor="yellow" pi_bgcolor="goldenrod" />
    </Fragment>
  )
}

render(<App />, document.getElementById('root'))
