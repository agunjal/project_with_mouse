import React, { Fragment } from 'react'
import { render } from 'react-dom'
import { Quadrant1, Quadrant2, Quadrant3, Quadrant4 } from './withMouse'
import './style.css'

const App = () => {
  return (
    <Fragment>
      <Quadrant1 />
      <Quadrant2 />
      <Quadrant3 />
      <Quadrant4 />
    </Fragment>
  )
}

render(<App />, document.getElementById('root'))
