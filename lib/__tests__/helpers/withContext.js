
import PropTypes from 'prop-types'
import { withContext } from 'recompose'
import classNames from '../../classNames'
import * as defaultConfig from '../../config'

export default props => Component => {
  const enhanced = withContext(
    {
      aphro: PropTypes.shape({
        config: PropTypes.object,
        classNames: PropTypes.object
      })
    },
    () => {
      const config = { ...defaultConfig, ...props }
      return {
        aphro: {
          config,
          classNames: classNames(config)
        }
      }
    }
  )

  return enhanced(Component)
}
