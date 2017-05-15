
import React from 'react'
import { Curtain } from '../..'
import { withContext } from '../helpers'
import renderer from 'react-test-renderer'
import { StyleSheetTestUtils } from 'aphrodite'

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
