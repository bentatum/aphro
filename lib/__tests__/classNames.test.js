
import { classNames } from '..'
import { breakpoints } from '../config'

describe('classNames', () => {
  test('outcome', () => {
    expect(classNames()).toHaveProperty('container._definition.width', '100%')
    expect(classNames()).toHaveProperty('container._definition.margin', '0 auto')
    expect(classNames()).toHaveProperty('container._definition.maxWidth', breakpoints.medium)

    expect(classNames()).toHaveProperty('flex._definition.display', 'flex')
    expect(classNames()).toHaveProperty('flexWrap._definition.flexWrap', 'wrap')
  })
})
