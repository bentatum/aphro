
import React from 'react'
import PropTypes from 'prop-types'
import { defaultProps, pure, compose, setPropTypes, setDisplayName } from 'recompose'

const enhance = compose(
  setDisplayName('elements/Select'),
  defaultProps({
    options: []
  }),
  setPropTypes({
    options: PropTypes.array.isRequired
  }),
  pure
)

export default enhance(({
  options,
  ...props
}) =>
  <select {...props}>
    {options.map((x, key) =>
      <option key={key} {...x} />
    )}
  </select>
)
