
import React from 'react'
import shortid from 'shortid'
import PropTypes from 'prop-types'
import * as defaultConfig from './config'
import defaultClassNames from './classNames'
import { css, StyleSheet } from 'aphrodite/no-important'
import { mapProps, setDisplayName, pure, defaultProps, setPropTypes } from 'recompose'

export const zIndex = 10
export const lightOpacity = 0
export const darkOpacity = 0.6
export const id = shortid.generate()

const sx = StyleSheet.create({
  curtain: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
    width: '100%',
    backgroundColor: defaultConfig.black,
    opacity: lightOpacity
  }
})

@setDisplayName('elements/Curtain')
@defaultProps({
  zIndex: -999,
  getRef: x => x
})
@mapProps(props => ({
  ...props,
  zIndex: props.closed ? zIndex : props.zIndex
}))
@setPropTypes({
  closed: PropTypes.bool,
  getRef: PropTypes.func.isRequired
})
@pure
export default class Curtain extends React.PureComponent {
  render () {
    const {
      zIndex,
      getRef,
      onClick
    } = this.props

    return (
      <div
        id={id}
        onClick={onClick}
        style={{ zIndex }}
        ref={x => getRef(x)}
        className={css(sx.curtain)} />
    )
  }
}
