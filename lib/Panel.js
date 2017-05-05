
import React from 'react'
import { get } from 'lodash'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import withAphro from './withAphro'
import * as defaultConfig from './config'
import defaultClassNames from './classNames'
import { css } from 'aphrodite/no-important'
import { getBackgroundColor } from './helpers'
import { defaultProps, mapProps, compose, setDisplayName, pure } from 'recompose'

const enhance = compose(
  setDisplayName('elements/Panel'),
  withAphro,
  defaultProps({
    aphro: {}
  }),
  mapProps(({
    p,
    aphro,
    color,
    border,
    disabled,
    className,
    boxShadow,
    borderColor,
    borderRadius,
    backgroundColor,
    ...props
  }) => {
    const cx = { ...defaultConfig, ...aphro.config }
    const tx = { ...defaultClassNames, ...aphro.classNames }
    const defaultClassName = css(
      border && tx.border,
      boxShadow && tx.boxShadow,
      get(tx, `color_${color}`),
      borderRadius && tx.borderRadius,
      get(tx, `p${p}`, p !== false && tx.p1),
      borderColor && tx[`borderColor_${borderColor}`]
    )
    return {
      ...props,
      className: classnames({
        [defaultClassName]: true,
        [className]: !!className
      }),
      style: {
        backgroundColor: getBackgroundColor(backgroundColor, cx.colors, disabled),
        ...props.style
      }
    }
  }),
  pure
)

export default enhance(props => <div {...props} />)

