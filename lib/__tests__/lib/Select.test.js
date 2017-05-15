
import React from 'react'
import { Select } from '../..'
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
