
import mapConfig from '../../../lib/helpers/mapConfig'

describe('helpers/mapConfig', () => {
  test('default outcome', () => {
    const outcome = mapConfig()
    expect(outcome).toHaveProperty('cx')
    expect(outcome).toHaveProperty('tx')
  })

  test('outcome with props', () => {
    const outcome = mapConfig({
      foo: 'bar'
    })
    expect(outcome).toHaveProperty('cx')
    expect(outcome).toHaveProperty('tx')
    expect(outcome).toHaveProperty('foo', 'bar')
  })
})
