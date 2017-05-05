
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
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    position: 'fixed',
    opacity: darkOpacity,
    backgroundColor: defaultConfig.colors.black
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
