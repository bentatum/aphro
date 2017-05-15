
import React from 'react'
import { Button } from '../..'
import renderer from 'react-test-renderer'
import { StyleSheetTestUtils } from 'aphrodite'

beforeAll(StyleSheetTestUtils.suppressStyleInjection)
afterAll(StyleSheetTestUtils.clearBufferAndResumeStyleInjection)

describe('Button', () => {
  test('render', () => {
    renderer.create(
      <Button />
    )
  })
})
