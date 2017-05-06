
import hasBorder from '../../../lib/helpers/hasBorder'

describe('helpers/hasBorder', () => {
  test('all outcomes', () => {
    expect(hasBorder(true)).toBe(true)
    expect(hasBorder(false)).toBe(false)
    expect(hasBorder(false, 'primary')).toBe(true)
    expect(hasBorder(true, 'secondary')).toBe(true)
  })
})
