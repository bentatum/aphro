
import React from 'react'
import { TestUtils } from '../..'
import PropTypes from 'prop-types'
import renderer from 'react-test-renderer'
import { StyleSheetTestUtils } from 'aphrodite'

beforeAll(StyleSheetTestUtils.suppressStyleInjection)
afterAll(StyleSheetTestUtils.clearBufferAndResumeStyleInjection)

describe('ContextProvider', () => {
  test('render', () => {
    const ComponentWithClassNames = () =>
      <div>
        Hey
      </div>

    ComponentWithClassNames.contextTypes = {
      aphro: PropTypes.shape({
        classNames: PropTypes.object
      })
    }

    const component = renderer.create(
      <TestUtils.ContextProvider>
        <ComponentWithClassNames />
      </TestUtils.ContextProvider>
    )
    expect(component).toBeTruthy()
  })
})
