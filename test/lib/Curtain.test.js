
import React from 'react'
import Curtain from '../../lib/Curtain'
import renderer from 'react-test-renderer'
import { StyleSheetTestUtils } from 'aphrodite'
import { withContext } from '../helpers'

beforeAll(StyleSheetTestUtils.suppressStyleInjection)
afterAll(StyleSheetTestUtils.clearBufferAndResumeStyleInjection)

describe('Curtain', () => {
  test('render', () => {
    const enhanced = withContext({
      foo: 'bar'
    })

    const Test = enhanced(Curtain)

    const component = renderer.create(
      <Test />
    )

    expect(component).toBeTruthy()
  })
})
