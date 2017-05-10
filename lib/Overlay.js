
import React from 'react'
import Panel from './Panel'
import classnames from 'classnames'
import { defaultProps, mapProps } from 'recompose'
import { StyleSheet, css } from 'aphrodite/no-important'
import withClassNames from './withClassNames'
import { default as Curtain, darkOpacity, lightOpacity, zIndex as curtainZindex } from './Curtain'

const sx = StyleSheet.create({
  outer: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
    width: '100%'
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
@withClassNames
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
      close,
      zIndex,
      animate,
      children,
      curtainClosed,
      classNames: cx
    } = this.props

    return (
      <div
        style={{ zIndex }}
        className={css(sx.outer, cx.flex, cx.alignCenter, cx.justifyCenter)}>
        <Panel
          backgroundColor='white'
          style={{
            zIndex: zIndex + 1,
            transform: animate && 'matrix(0, 0, 0, 0, 0, 0)'
          }}
          {...panel}>
          <div className={css(sx.children)}>
            {children}
          </div>
        </Panel>
        <Curtain
          zIndex={zIndex - 1}
          closed={curtainClosed}
          onClick={this.props.onDismiss}
          getRef={ref => { this.curtain = ref }} />
      </div>
    )
  }
}


