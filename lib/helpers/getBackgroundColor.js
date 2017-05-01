
import Color from 'color'
import { get, defaultTo } from 'lodash'

export default (color, palette, disabled) => {
  let backgroundColor = get(palette, color, color)

  if (disabled) {
    backgroundColor = Color(backgroundColor).fade(0.3).rgb().string()
  }

  return backgroundColor
}
