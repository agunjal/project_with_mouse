import React from 'react'
import PropTypes from 'prop-types'

const PositionIndicator = ({ x, y }) => (
  <div
    style={{
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      backgroundColor: 'red',
      position: 'absolute',
      top: `${y}px`,
      left: `${x}px`,
      transform: 'translate(-50%, -50%)'
    }}
  />
)

PositionIndicator.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
}

export default PositionIndicator
