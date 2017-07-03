
import sx from '../style'
import classnames from 'classnames'
import { defaultTo, get } from 'lodash'
import * as defaultConfig from '../../config'
import defaultClassNames from '../../classNames'
import { css, StyleSheet } from 'aphrodite/no-important'
import { hasBorder, getBackgroundColor } from '../../helpers'

export default (props = {}) => {
  const {
    p,
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
    ...remainingProps
  } = props

  // console.log(defaultConfig)
  // console.log(get(aphro, 'config'))

  const cx = { ...defaultConfig, ...get(aphro, 'config') }
  const tx = { ...defaultClassNames, ...get(aphro, 'classNames') }

  const Button = get(cx.Button, size, {})

  const defaultClassName = css(
    sx.button,
    tx[`p${defaultTo(p, Button.p)}`],
    fullWidth && tx.col12,
    get(tx, `color_${defaultTo(color, Button.color)}`),
    boxShadow && tx.boxShadow,
    borderRadius && tx.borderRadius,
    get(tx, `fontSize${Button.fontSize}`),
    hasBorder(border, borderColor) && tx.border
  )

  return {
    ...remainingProps,
    disabled,
    className: classnames({
      [className]: !!className,
      [defaultClassName]: true
    }),
    style: {
      height: Button.height,
      borderColor: get(cx.colors, borderColor),
      cursor: disabled ? 'not-allowed' : 'pointer',
      backgroundColor: getBackgroundColor(backgroundColor, cx.colors, disabled),
      ...Button.style,
      ...style
    }
  }
}
