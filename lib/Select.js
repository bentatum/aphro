
import React from 'react'
import PropTypes from 'prop-types'
import { pure, compose, setPropTypes, setDisplayName } from 'recompose'

const enhance = compose(
  setDisplayName('elements/Select'),
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
