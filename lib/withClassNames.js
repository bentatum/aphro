
import PropTypes from 'prop-types'
import { setDisplayName, compose, getContext, mapProps } from 'recompose'

export default Component => {
  const withClassNames = compose(
    setDisplayName('withClassNames'),
    getContext({
      aphro: PropTypes.shape({
        config: PropTypes.object,
        classNames: PropTypes.object
      })
    }),
    mapProps(({ aphro, ...props }) => ({
      ...props,
      classNames: aphro.classNames
    }))
  )

  return withClassNames(Component)
}
