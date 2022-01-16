import React from 'react'
import PositionIndicator from './PositionIndicator'
import PropTypes from 'prop-types'

export function Quadrant(props) {
  const style = {
    width: '50vw',
    height: '50vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: `${props.bgcolor}`,
    float: 'left',
    position: 'relative',
    overflow: 'hidden'
  }
  return (
    <div style={style} onMouseMove={props.onMouseMove}>
      <PositionIndicator
        x={props.x}
        y={props.y}
        pi_bgcolor={props.pi_bgcolor}
      />
      <span>
        Coordinates:
        <br />
        x: {props.x} y: {props.y}
      </span>
    </div>
  )
}

Quadrant.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
}
