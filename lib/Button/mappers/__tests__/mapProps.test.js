
import mapProps from '../mapProps'

describe('Button/mappers/mapProps', () => {
  test('defaults', () => {
    const result = mapProps()
    expect(result).toHaveProperty('className')
  })
})
