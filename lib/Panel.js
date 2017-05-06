
const displayName = 'aphro/Panel'

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { defaultTo, get } from 'lodash'
import { css } from 'aphrodite/no-important'
import { defaultProps, mapProps, compose, setDisplayName, pure } from 'recompose'
import { withConfig, booleanProp as bp, stringProp as sp, getBackgroundColor } from './helpers'

const enhance = compose(
  setDisplayName(displayName),
  withConfig,
  mapProps(({
    p,
    cx,
    tx,
    color,
    border,
    className,
    boxShadow,
    borderColor,
    borderRadius,
    backgroundColor,
    ...props
  }) => {
    const panel = css(
      tx[`p${sp(p, cx.Panel.p)}`],
      tx[`color_${sp(color, cx.Panel.color)}`],
      bp(border, cx.Panel.border) && tx.border,
      bp(boxShadow, cx.Panel.boxShadow) && tx.boxShadow,
      bp(borderRadius, cx.Panel.borderRadius) && tx.borderRadius,
      tx[`backgroundColor_${sp(borderColor, cx.Panel.borderColor)}`],
      tx[`backgroundColor_${sp(backgroundColor, cx.Panel.backgroundColor)}`]
    )

    return {
      ...props,
      className: classnames({
        [panel]: true,
        [className]: !!className
      })
    }
  }),
  pure
)

export default enhance(props => <div {...props} />)

