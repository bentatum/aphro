
import React from 'react'
import { Overlay } from '../..'
import renderer from 'react-test-renderer'
import { ContextProvider } from '../helpers'
import { StyleSheetTestUtils } from 'aphrodite'

beforeAll(StyleSheetTestUtils.suppressStyleInjection)
afterAll(StyleSheetTestUtils.clearBufferAndResumeStyleInjection)

describe('Overlay', () => {
  test('render', () => {
    const component = renderer.create(
      <ContextProvider>
        <Overlay />
      </ContextProvider>
    )
    expect(component).toBeTruthy()
  })
})
