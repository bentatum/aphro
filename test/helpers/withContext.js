
import { withContext } from 'recompose'
import classNames from '../lib/classNames'

export default Component => props => {
  const enhanced = withContext(
    {
      aphro: PropTypes.shape({
        config: PropTypes.object,
        classNames: PropTypes.object
      })
    },
    () => ({
      aphro: {
        config: props,
        classNames: classNames(props)
      }
    })
  )

  return enhanced(Component)
}
