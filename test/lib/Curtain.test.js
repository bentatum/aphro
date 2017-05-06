
import React from 'react'
import Curtain from '../../lib/Curtain'
import renderer from 'react-test-renderer'
import { StyleSheetTestUtils } from 'aphrodite'

beforeAll(StyleSheetTestUtils.suppressStyleInjection)
afterAll(StyleSheetTestUtils.clearBufferAndResumeStyleInjection)

describe('Curtain', () => {
  test('render', () => {
    const component = renderer.create(
      <Curtain />
    )
    expect(component).toBeTruthy()
  })
})
