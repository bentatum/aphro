
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import withAphro from '../withAphro'
import { get, defaultTo } from 'lodash'
import * as defaultConfig from '../config'
import defaultClassNames from '../classNames'
import { mapProps as propsMapper } from './lib'
import { css, StyleSheet } from 'aphrodite/no-important'
import { hasBorder, getBackgroundColor } from '../helpers'
import { getContext, defaultProps, setDisplayName, compose, pure, mapProps } from 'recompose'

const displayName = 'aphro/Button'

const enhance = compose(
  setDisplayName(displayName),
  withAphro,
  defaultProps({
    aphro: {},
    size: 'medium'
  }),
  mapProps(propsMapper),
  pure
)

export default enhance(props => <button {...props} />)
