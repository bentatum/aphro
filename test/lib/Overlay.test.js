
import React from 'react'
import Overlay from '../../lib/Overlay'
import renderer from 'react-test-renderer'
import { StyleSheetTestUtils } from 'aphrodite'
import { TestProvider } from '../helpers'

beforeAll(StyleSheetTestUtils.suppressStyleInjection)
afterAll(StyleSheetTestUtils.clearBufferAndResumeStyleInjection)

describe('Overlay', () => {
  test('render', () => {
    const component = renderer.create(
      <TestProvider>
        <Overlay />
      </TestProvider>
    )
    expect(component).toBeTruthy()
  })
})
