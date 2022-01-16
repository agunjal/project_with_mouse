import React from 'react'
import { Quadrant } from './Quadrant'
import getDisplayName from './getDisplayName'
import hoistNonReactStatic from 'hoist-non-react-statics'

function withMouse(WrappedComponent, options) {
  class WithMouse extends React.Component {
    state = {
      x: 0,
      y: 0
    }

    offset = {
      x: 0,
      y: 0
    }

    componentDidMount() {
      this.setOffset()
      window.addEventListener('resize', this.setOffset)
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.setOffset)
    }

    setOffset = () => {
      const rect = this.node.firstChild.getBoundingClientRect()
      this.offset = {
        x: Math.floor(rect.left),
        y: Math.floor(rect.top)
      }
    }

    handleMouseMove = (e) => {
      this.setState({
        x: e.clientX - this.offset.x,
        y: e.clientY - this.offset.y
      })
    }

    render() {
      return (
        <span
          onMouseMove={this.handleMouseMove}
          ref={(node) => (this.node = node)}
        >
          <WrappedComponent {...this.props} x={this.state.x} y={this.state.y} />
        </span>
      )
    }
  }
  WithMouse.displayName = `withMouse(${getDisplayName(WrappedComponent)})`
  hoistNonReactStatic(WithMouse, WrappedComponent)
  return WithMouse
}

export const Quadrant1 = withMouse(Quadrant)
export const Quadrant2 = withMouse(Quadrant)
export const Quadrant3 = withMouse(Quadrant)
export const Quadrant4 = withMouse(Quadrant)
