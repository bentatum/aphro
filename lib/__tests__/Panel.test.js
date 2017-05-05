
import React from 'react'
import Panel from '../Panel'
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
      <Panel />
    )
    expect(component).toBeTruthy()
  })
})
