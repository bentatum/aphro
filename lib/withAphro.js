
import PropTypes from 'prop-types'
import { getContext } from 'recompose'

export default getContext({
  aphro: PropTypes.shape({
    config: PropTypes.object,
    classNames: PropTypes.object
  })
})
