
import React from 'react'
import Select from '../Select'
// import { TestProvider } from 'helpers'
import renderer from 'react-test-renderer'
import { StyleSheetTestUtils } from 'aphrodite'

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
})

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
})

describe('Button', () => {
  test('render', () => {
    const component = renderer.create(
      <Select />
    )
    expect(component).toBeTruthy()
  })
})
