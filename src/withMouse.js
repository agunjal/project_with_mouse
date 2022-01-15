import React from 'react'
import { Quadrant } from './Quadrant'
import getDisplayName from './getDisplayName'

function withMouse(WrappedComponent, options) {
  class WithMouse extends React.Component {
    state = {
      x: 0,
      y: 0
    }

    handleMouseMove = (e) => {
      this.setState({
        x: e.clientX,
        y: e.clientY
      })
    }

    render() {
      return (
        <WrappedComponent
          x={this.state.x}
          y={this.state.y}
          onMouseMove={this.handleMouseMove}
        />
      )
    }
  }
  WithMouse.displayName = `WithMouse(${getDisplayName(WrappedComponent)})`
  return WithMouse
}

export const Quadrant1 = withMouse(Quadrant)
export const Quadrant2 = withMouse(Quadrant)
export const Quadrant3 = withMouse(Quadrant)
export const Quadrant4 = withMouse(Quadrant)
