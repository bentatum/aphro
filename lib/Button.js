
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
    size: 'medium'
  }),
  getContext({
    aphroConfig: PropTypes.object,
    aphroClassNames: PropTypes.object
  }),
  mapProps(({
    size,
    color,
    style,
    border,
    disabled,
    boxShadow,
    className,
    fullWidth,
    borderColor,
    aphroConfig,
    borderRadius,
    backgroundColor,
    aphroClassNames,
    ...props
  }) => {
    const config = { ...defaultConfig, ...aphroConfig }
    const tx = { ...defaultClassNames, ...aphroClassNames }
    const { Button, colors, buttonHeight, buttonHeightSmall } = config
    const fontSize = get(Button, ['breakpoints', size, 'fontSize'])
    const cx = css(
      sx.button,
      fullWidth && tx.col12,
      boxShadow && tx.boxShadow,
      get(tx, `fontSize${fontSize}`),
      borderRadius && tx.borderRadius,
      get(tx, `color_${color}`, tx.color_white),
      hasBorder(border, borderColor) && tx.border
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
