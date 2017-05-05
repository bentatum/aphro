
import Color from 'color'
import shortid from 'shortid'
import tx from 'theme/utilities'
import { colors } from 'theme/constants'
import React, { PropTypes } from 'react'
import { pure, compose, setPropTypes } from 'recompose'
import { css, StyleSheet } from 'aphrodite/no-important'

const arrowSize = 6
const className = shortid.generate()
const backgroundColor = Color(colors.black).fade(0.1).rgb().string()

const sx = StyleSheet.create({
  children: {
    [`:hover + .${className} > div`]: {
      display: 'block'
    }
  },
  tip: {
    backgroundColor,
    color: colors.white,
    display: 'none'
  },
  arrow: {
    width: 0,
    height: 0,
    left: '50%',
    bottom: -arrowSize,
    position: 'absolute',
    marginLeft: -arrowSize,
    borderLeft: `${arrowSize}px solid transparent`,
    borderRight: `${arrowSize}px solid transparent`,
    borderTop: `${arrowSize}px solid ${backgroundColor}`
  }
})

const enhance = compose(
  setPropTypes({
    children: PropTypes.node.isRequired,
    text: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element
    ]).isRequired,
    style: PropTypes.object
  }),
  pure
)

export default enhance(props =>
  <div className={css(tx.relative)}>
    <div className={css(sx.children)}>
      {props.children}
    </div>
    <div
      className={className}
      style={{
        ...props.style,
        position: 'absolute'
      }}>
      <div className={css(sx.tip, tx.py0, tx.px1, tx.borderRadius, tx.fontSize6, tx.textAlignCenter)}>
        {props.text}
        <div className={css(sx.arrow)} />
      </div>
    </div>
  </div>
)

