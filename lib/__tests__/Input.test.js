
import React from 'react'
import { Input } from '..'
import renderer from 'react-test-renderer'
import { StyleSheetTestUtils } from 'aphrodite'

beforeAll(StyleSheetTestUtils.suppressStyleInjection)
afterAll(StyleSheetTestUtils.clearBufferAndResumeStyleInjection)

describe('Select', () => {
  test('render', () => {
    const component = renderer.create(
      <Input />
    )
    expect(component).toBeTruthy()
  })
})
