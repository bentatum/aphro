
export const GLOBAL_CSS = 'aphro/globalCSS'
import { StyleSheet } from 'aphrodite/no-important'

const globalExtension = {
  selectorHandler: (selector, baseSelector, generateSubtreeStyles) =>
    baseSelector.includes(GLOBAL_CSS) ? generateSubtreeStyles(selector) : null
}

export default StyleSheet.extend([globalExtension])

