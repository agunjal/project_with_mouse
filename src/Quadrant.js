import React from 'react'
import PositionIndicator from './PositionIndicator'

export function Quadrant(props) {
  const style = {
    width: '50vw',
    height: '50vh',
    float: 'left',
    display: 'inline-block',
    justifyContent: 'center',
    alignItems: 'center'
  }
  return (
    <div style={style} onMouseMove={props.onMouseMove}>
      <PositionIndicator x={props.x} y={props.y} />
      <span>Coordinates: </span>
      <br />
      x: {props.x} y: {props.y}
    </div>
  )
}
