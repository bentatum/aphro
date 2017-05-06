
import React from 'react'
import Overlay from '../../lib/Overlay'
import renderer from 'react-test-renderer'
import { StyleSheetTestUtils } from 'aphrodite'

beforeAll(StyleSheetTestUtils.suppressStyleInjection)
afterAll(StyleSheetTestUtils.clearBufferAndResumeStyleInjection)

describe('Overlay', () => {
  test('render', () => {
    const component = renderer.create(
      <Overlay />
    )
    expect(component).toBeTruthy()
  })
})
