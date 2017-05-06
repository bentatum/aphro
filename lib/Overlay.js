
import React from 'react'
import Panel from './Panel'
import withAphro from './withAphro'
import classnames from 'classnames'
import * as defaultConfig from './config'
import defaultClassNames from './classNames'
import { defaultProps, mapProps } from 'recompose'
import { StyleSheet, css } from 'aphrodite/no-important'
import { default as Curtain, darkOpacity, lightOpacity, zIndex as curtainZindex } from './Curtain'

const sx = StyleSheet.create({
  outer: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
    width: '100%'
  },
  inner: {
    maxWidth: '90%',
    maxHeight: '90%',
    overflow: 'hidden',
    position: 'relative'
  },
  close: {
    top: 0,
    right: 0,
    zIndex: 4,
    position: 'absolute'
  },
  absoluteBottom: {
    left: 0,
    bottom: 0,
    zIndex: 4,
    width: '100%',
    overflow: 'hidden',
    position: 'absolute'
  },
  children: {
    overflow: 'hidden',
    maxHeight: '100%'
  }
})

@defaultProps({
  curtain: true
})
@mapProps(({
  page,
  close = {},
  panel = {},
  ...props
}) => ({
  ...props,
  panel: {
    ...panel,
    className: classnames({
      [css(sx.page)]: !!page,
      [panel.className]: !!panel.className
    })
  },
  close: {
    ...close,
    className: classnames({
      [css(sx.close)]: true,
      [close.className]: !!close.className
    })
  },
  curtainClosed: props.curtain && !props.animate,
  zIndex: props.zIndex ? props.zIndex : curtainZindex + 2,
  finalCurtainOpacity: props.curtain ? darkOpacity : lightOpacity
}))
@withAphro
export default class Overlay extends React.PureComponent {
  static defaultProps = {
    aphro: {}
  };

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
      aphro,
      close,
      zIndex,
      animate,
      children,
      curtainClosed,
      absoluteBottom
    } = this.props

    const cx = { ...defaultConfig, ...aphro.config }
    const tx = { ...defaultClassNames, ...aphro.classNames }

    return (
      <div
        style={{ zIndex }}
        className={css(sx.outer, tx.flex, tx.alignCenter, tx.justifyCenter)}>
        <div
          ref={ref => { this.overlay = ref }}
          style={{
            zIndex: zIndex + 1,
            transform: animate && 'matrix(0, 0, 0, 0, 0, 0)'
          }}>
          <Panel
            backgroundColor='white'
            {...panel}>
            <div className={css(sx.children)}>
              {children}
            </div>
            {absoluteBottom &&
              <div className={css(sx.absoluteBottom, tx.borderTop)}>
                {absoluteBottom}
              </div>
            }
          </Panel>
        </div>
        <Curtain
          zIndex={zIndex - 1}
          closed={curtainClosed}
          onClick={this.props.onDismiss}
          getRef={ref => { this.curtain = ref }} />
      </div>
    )
  }
}


