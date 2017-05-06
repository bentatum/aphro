
/**
 * Props take precidence over config level props
 */

import { defaultTo } from 'lodash' 

export default (prop, config) => defaultTo(prop, config)
