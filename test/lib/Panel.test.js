
import React from 'react'
import Panel from '../../lib/Panel'
// import { TestProvider } from 'helpers'
import renderer from 'react-test-renderer'
import { StyleSheetTestUtils } from 'aphrodite'
// import withContext from 'test/withContext'

beforeAll(StyleSheetTestUtils.suppressStyleInjection)
afterAll(StyleSheetTestUtils.clearBufferAndResumeStyleInjection)

describe('Panel', () => {
  test('render', () => {
    const component = renderer.create(
      <Panel />
    )
    expect(component).toBeTruthy()
  })

  test('props override context', () => {
    const component = renderer.create(
      <Panel p={2} />
    )
    expect(component).toBeTruthy()
  })
})
