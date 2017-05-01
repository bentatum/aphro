
import { colors } from '../../config'
import getBackgroundColor from '../getBackgroundColor'

describe('helpers/getBackgroundColor', () => {
  test('available color', () => {
    expect(getBackgroundColor('white', colors)).toBe(colors.white)
  })
  test('a color that is not a part of the application colors', () => {
    expect(getBackgroundColor('blue', colors)).toBe('blue')
  })
  test('not disabled', () => {
    const color = getBackgroundColor('primary', colors, false)
    expect(color.indexOf('rgba')).toBe(-1)
  })
  test('disabled', () => {
    const color = getBackgroundColor('primary', colors, true)
    expect(color.indexOf('rgba')).toBeGreaterThan(-1)
  })
})
