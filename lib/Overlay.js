
import React from 'react'
import Panel from './Panel'
import Curtain from './Curtain'
import classnames from 'classnames'
import { withConfig } from './helpers'
import { defaultTo, get } from 'lodash'
import withClassNames from './withClassNames'
import { StyleSheet, css } from 'aphrodite/no-important'
import { setDisplayName, defaultProps, mapProps } from 'recompose'

const sx = StyleSheet.create({
  outer: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
    width: '100%'
  },
  panel: {
    position: 'relative'
  },
  children: {
    overflow: 'hidden',
    maxHeight: '100%'
  }
})

@setDisplayName('aphro/Overlay')
@defaultProps({ curtain: true })
@withConfig
@withClassNames
@mapProps(({
  panel = {},
  ...props
}) => ({
  ...props,
  panel: {
    ...panel,
    className: classnames({
      [css(sx.panel)]: true,
      [panel.className]: !!panel.className
    })
  },
  zIndex: defaultTo(props.zIndex, get(props.cx.Overlay, 'zIndex', 0))
}))
export default class Overlay extends React.PureComponent {
  constructor (props) {
    super(props)
    // disable scrolling
    document.body.style.overflow = 'hidden'
  }

  componentWillUnmount () {
    // enable scrolling
    document.body.style.overflow = ''
  }

  render () {
    const {
      panel,
      zIndex,
      curtain,
      children,
      classNames: tx
    } = this.props

    return (
      <div
        style={{ zIndex }}
        className={css(sx.outer, tx.flex, tx.alignCenter, tx.justifyCenter)}>
        <Panel
          backgroundColor='white'
          style={{ zIndex: zIndex + 1 }}
          {...panel}>
          <div className={css(sx.children)}>
            {children}
          </div>
        </Panel>
        <Curtain
          zIndex={zIndex - 1}
          closed={curtain}
          onClick={this.props.onDismiss} />
      </div>
    )
  }
}


