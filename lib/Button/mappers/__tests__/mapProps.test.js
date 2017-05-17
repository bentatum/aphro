
import mapProps from '../mapProps'
import { StyleSheetTestUtils } from 'aphrodite'

beforeAll(StyleSheetTestUtils.suppressStyleInjection)
afterAll(StyleSheetTestUtils.clearBufferAndResumeStyleInjection)

describe('Button/mappers/mapProps', () => {
  test('defaults', () => {
    const result = mapProps()
    expect(result).toHaveProperty('className')
  })
})
