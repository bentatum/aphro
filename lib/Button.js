
export const displayName = 'aphro/Button'

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { get, defaultTo } from 'lodash'
import * as defaultConfig from './config'
import defaultClassNames from './classNames'
import { css, StyleSheet } from 'aphrodite/no-important'
import { hasBorder, getBackgroundColor } from './helpers'
import { getContext, defaultProps, setDisplayName, compose, pure, mapProps } from 'recompose'
import withAphro from './withAphro'

const sx = StyleSheet.create({
  button: {
    ':active': {
      boxShadow: 'none'
    }
  }
})

const enhance = compose(
  setDisplayName(displayName),
  withAphro,
  defaultProps({
    aphro: {},
    size: 'medium'
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
    const cx = { ...defaultConfig, ...aphro.config }
    const tx = { ...defaultClassNames, ...aphro.classNames }
    const { colors, buttonHeight, buttonHeightSmall } = cx
    const Button = get(cx.Button, size)

    const defaultClassName = css(
      sx.button,
      fullWidth && tx.col12,
      get(tx, `color_${color}`),
      boxShadow && tx.boxShadow,
      borderRadius && tx.borderRadius,
      get(tx, `fontSize${Button.fontSize}`),
      hasBorder(border, borderColor) && tx.border
    )

    return {
      ...props,
      disabled,
      className: classnames({
        [className]: !!className,
        [defaultClassName]: true
      }),
      style: {
        height: Button.height,
        borderColor: get(colors, borderColor),
        cursor: disabled ? 'not-allowed' : 'pointer',
        backgroundColor: getBackgroundColor(backgroundColor, colors, disabled),
        ...style
      }
    }
  }),
  pure
)

export default enhance(props => <button {...props} />)
