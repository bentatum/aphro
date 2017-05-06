
const displayName = 'withConfig'

import withAphro from '../withAphro'
import PropTypes from 'prop-types'
import mapConfig from './mapConfig'
import { setDisplayName, compose, getContext, mapProps } from 'recompose'

export default Component => {
  const withConfig = compose(
    setDisplayName(displayName),
    withAphro,
    mapProps(mapConfig),
  )

  return withConfig(Component)
}
