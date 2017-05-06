
import * as defaultConfig from '../config'
import defaultClassNames from '../classNames'

export default ({ aphro = {}, ...props } = {}) => ({
  ...props,
  cx: { ...defaultConfig, ...aphro.config },
  tx: { ...defaultClassNames, ...aphro.classNames }
})
