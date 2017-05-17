
import stringProp from '../stringProp'

describe('helpers/stringProp', () => {
  test('a practical example', () => {
    const Panel = { backgroundColor: 'gray' }
    expect(stringProp('primary', Panel.backgroundColor)).toBe('primary')
    expect(stringProp(undefined, Panel.backgroundColor)).toBe('gray')
  })

  test('no configuration', () => {
    expect(stringProp('primary')).toBe('primary')
    expect(stringProp()).toBe(undefined)
  })

  test('overriding config with false at the prop level', () => {
    const Panel = { p: 2 }
    expect(stringProp(false, Panel.p)).toBe(false)
  })
})
