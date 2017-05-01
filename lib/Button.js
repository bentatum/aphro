
export const displayName = 'aphro/Button'

import React from 'react'
import * as config from './config'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { get, defaultTo } from 'lodash'
import { getBackgroundColor } from './helpers'
import { css, StyleSheet } from 'aphrodite/no-important'
import { getContext, defaultProps, setDisplayName, compose, pure, mapProps } from 'recompose'

const sx = StyleSheet.create({
  button: {
    ':active': {
      boxShadow: 'none'
    }
  }
})

const enhance = compose(
  setDisplayName(displayName),
  defaultProps({
    boxShadow: true,
    borderRadius: true
  }),
  getContext({
    aphro: PropTypes.object
  }),
  mapProps(({
    size,
    aphro,
    color,
    style,
    border,
    disabled,
    boxShadow,
    className,
    fullWidth,
    borderColor,
    borderRadius,
    backgroundColor,
    ...props
  }) => {
    const { utilities: tx, Button, colors, buttonHeight, buttonHeightSmall } = { ...config, ...aphro }
    console.log(tx, get(Button, ['breakpoints', size, 'fontSize']))
    const hasBorder = border || !!borderColor
    const cx = css(
      sx.button,
      fullWidth && tx.col12,
      hasBorder && tx.border,
      boxShadow && tx.boxShadow,
      borderRadius && tx.borderRadius,
      get(tx, `color_${color}`, tx.color_white),
      get(tx, `fontSize${get(Button, ['breakpoints', size, 'fontSize'])}`)
    )
    return {
      ...props,
      disabled,
      className: classnames({
        [cx]: true,
        [className]: !!className
      }),
      style: {
        borderColor: get(colors, borderColor),
        cursor: disabled ? 'not-allowed' : 'pointer',
        height: get(Button, ['breakpoints', size, 'height']),
        backgroundColor: defaultTo(getBackgroundColor(backgroundColor, colors, disabled), get(colors, 'secondary')),
        ...style
      }
    }
  }),
  pure
)

export default enhance(props => <button {...props} />)
