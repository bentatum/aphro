
import { StyleSheet } from 'aphrodite/no-important'

export default StyleSheet.create({
  outer: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
    width: '100%'
  },
  panel: {
    position: 'relative',
    maxHeight: '98%',
    overflowY: 'auto'
  },
  children: {
    overflow: 'hidden',
    maxHeight: '100%'
  }
})
