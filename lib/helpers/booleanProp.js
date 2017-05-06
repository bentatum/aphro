
/**
 * Props take precidence over config level props
 */

export default (prop, config) => {
  if (prop === false) {
    return false
  }

  return (!prop && config || prop === true)
}
