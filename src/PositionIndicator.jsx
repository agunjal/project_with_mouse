import React from 'react'
import PropTypes from 'prop-types'

const PositionIndicator = ({ x, y, pi_bgcolor }) => (
  <div
    style={{
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      backgroundColor: `${pi_bgcolor}`,
      position: 'absolute',
      left: `${x}px`,
      top: `${y}px`,
      transform: 'translate(-50%, -50%)'
    }}
  />
)

PositionIndicator.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  pi_bgcolor: PropTypes.string.isRequired
}

export default PositionIndicator
