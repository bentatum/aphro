
import React from 'react'
import Select from '../../lib/Select'
// import { TestProvider } from 'helpers'
import renderer from 'react-test-renderer'
import { StyleSheetTestUtils } from 'aphrodite'

beforeAll(StyleSheetTestUtils.suppressStyleInjection)
afterAll(StyleSheetTestUtils.clearBufferAndResumeStyleInjection)

describe('Select', () => {
  test('render', () => {
    const component = renderer.create(
      <Select />
    )
    expect(component).toBeTruthy()
  })
})
