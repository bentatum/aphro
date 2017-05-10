
const displayName = 'aphro/withClassNames'

import PropTypes from 'prop-types'
import { setDisplayName, compose, getContext, mapProps } from 'recompose'

export default Component => {
  const withClassNames = compose(
    setDisplayName(displayName),
    getContext({
      aphro: PropTypes.shape({
        config: PropTypes.object,
        classNames: PropTypes.object
      }).isRequired
    }),
    mapProps(({ aphro, ...props }) => ({
      ...props,
      classNames: aphro.classNames
    }))
  )

  return withClassNames(Component)
}
