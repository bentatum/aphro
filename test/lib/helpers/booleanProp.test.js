
import booleanProp from '../../../lib/helpers/booleanProp'

describe('helpers/booleanProp', () => {
  test('a practical example', () => {
    const boxShadow = true
    const Panel = { boxShadow: false }
    expect(booleanProp(boxShadow, Panel.boxShadow)).toBe(true)
  })
})
