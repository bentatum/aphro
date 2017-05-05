
import * as defaultConfig from '../config'
import { StyleSheet } from 'aphrodite/no-important'
import { mediaQuerize, margins, padding } from '../helpers'

export default config => {
  let util = {}

  const theme = { ...defaultConfig, ...config }

  const {
    scale,
    colors,
    fontSizes,
    boxShadow,
    borderStyle,
    breakpoints,
    borderColor,
    borderWidth,
    mediaQueries,
    borderRadius
  } = theme

  util.container = {
    width: '100%',
    margin: '0 auto',
    maxWidth: breakpoints.medium
  }

  // flexbox
  util.flex = {
    display: 'flex'
  }
  util.flexWrap = {
    flexWrap: 'wrap'
  }
  util.flexColumn = {
    flexDirection: 'column'
  }
  util.alignCenter = {
    alignItems: 'center'
  }
  util.alignFlexEnd = {
    alignItems: 'flex-end'
  }
  util.alignFlexStart = {
    alignItems: 'flex-start'
  }
  util.justifyCenter = {
    justifyContent: 'center'
  }
  util.justifySpaceAround = {
    justifyContent: 'space-around'
  }
  util.justifySpaceBetween = {
    justifyContent: 'space-between'
  }
  util.justifyFlexEnd = {
    justifyContent: 'flex-end'
  }
  util.justifyFlexStart = {
    justifyContent: 'flex-start'
  }

  // flexbox combos
  util.centeredColumn = {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    flexDirection: 'column'
  }
  util.centeredRow = {
    display: 'flex',
    alignItems: 'center'
  }

  // lineHeight
  util.lineHeight1 = { lineHeight: '1em' }

  // text
  util.underline = { textDecoration: 'underline' }
  util.uppercase = { textTransform: 'uppercase' }
  util.textAlignCenter = { textAlign: 'center' }
  util.textAlignLeft = { textAlign: 'left' }
  util.textAlignRight = { textAlign: 'right' }
  util.noWrap = { whiteSpace: 'nowrap' }

  // position
  util.relative = { position: 'relative' }
  util.absolute = { position: 'absolute' }
  util.fixed = { position: 'fixed' }
  util.top = { top: 0 }
  util.right = { right: 0 }
  util.bottom = { bottom: 0 }
  util.left = { left: 0 }

  // display
  util.block = { display: 'block' }
  util.inline = { display: 'inline' }

  // visibility
  util.visibilityHidden = { visibility: 'hidden' }

  // overflow
  util.overflowHidden = { overflow: 'hidden' }

  // media query helpers
  util.hide_print = {
    [mediaQueries.print]: {
      display: 'none'
    }
  }

  util.hide_small = {
    [mediaQueries.max_small]: {
      display: 'none'
    }
  }
  util.show_small = {
    display: 'none',
    [mediaQueries.max_small]: {
      display: 'inherit'
    }
  }
  util.hide_medium = {
    [mediaQueries.max_medium]: {
      display: 'none'
    }
  }
  util.show_medium = {
    display: 'none',
    [mediaQueries.max_medium]: {
      display: 'inherit'
    }
  }
  util.hide_large = {
    [mediaQueries.min_large]: {
      display: 'none'
    }
  }
  util.show_large = {
    display: 'none',
    [mediaQueries.min_large]: {
      display: 'inherit'
    }
  }

  // border
  util.border = { borderWidth, borderStyle, borderColor }
  util.borderBottom = {
    borderBottomWidth: borderWidth,
    borderBottomStyle: borderStyle,
    borderBottomColor: borderColor
  }
  util.borderLeft = {
    borderLeftWidth: borderWidth,
    borderLeftStyle: borderStyle,
    borderLeftColor: borderColor
  }
  util.borderRight = {
    borderRightWidth: borderWidth,
    borderRightStyle: borderStyle,
    borderRightColor: borderColor
  }
  util.borderTop = {
    borderTopWidth: borderWidth,
    borderTopStyle: borderStyle,
    borderTopColor: borderColor
  }
  util.noBorder = { border: 0 }
  util.borderRadius = { borderRadius }
  util.noBorderRadius = { borderRadius: 0 }

  // shadow
  util.shadow = { boxShadow }
  util.boxShadow = { boxShadow }

  // cursor
  util.cursorPointer = { cursor: 'pointer' }

  // maxWidth
  util.maxWidth100 = { maxWidth: '100%' }

  // .fontWeight{100-900}
  const weights = [100, 200, 300, 400, 500, 600, 700, 800, 900]
  weights.forEach(fontWeight => {
    util[`fontWeight${fontWeight}`] = { fontWeight }
  })

  // .fontSize{0-6}
  fontSizes.forEach((fontSize, idx) => {
    util[`fontSize${idx}`] = { fontSize }
  })

  // .col{1-12}
  // .col{1-12}{xs|sm|md|lg|xl}
  const cols = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  cols.forEach(num => {
    const width = `${(num / cols.length) * 100}%`
    util[`col${num}`] = { width }
    util = mediaQuerize(breakpoints, util, { width }, mq => `col${num}${mq}`)
  })

  // .border{Top|Right|Bottom|Left}Width
  // .border{Top|Right|Bottom|Left}Style
  // .border{Top|Right|Bottom|Left}Color
  const directions = ['Top', 'Right', 'Bottom', 'Left']
  directions.forEach(dir => {
    util[`border${dir}`] = {
      [`border${dir}Width`]: borderWidth,
      [`border${dir}Style`]: borderStyle,
      [`border${dir}Color`]: borderColor
    }
  })

  // .{prop}_color
  const propColorList = ['borderColor', 'backgroundColor', 'color']
  Object.keys(colors).forEach(color => {
    propColorList.forEach(attr => {
      util[`${attr}_${color}`] = { [attr]: colors[color] }
    })
  })

  // margin and padding classNames using scale of 0-4
  // .{m|p}{t|r|b|l|x|y}{0-4}{xs|sm|md|lg|xl}
  // here are some examples:
  // .mt3 (margin-top: medium size)
  // .pb1 (padding-bottom: small size)
  // .mx4 (margin-horiztal: xlarge)
  // .pr0 (padding-right: xsmall)
  // .py2 (padding-vertical: medium)
  const m = ['m', 'mt', 'mr', 'mb', 'ml', 'mx', 'my']
  const p = ['p', 'pt', 'pr', 'pb', 'pl', 'px', 'py']
  scale.forEach((val, idx) => {
    m.forEach(x => {
      const marginx = margins({ [x]: idx }, scale)
      util[`${x}${idx}`] = marginx
      util = mediaQuerize(breakpoints, util, marginx, mq => `${x}${idx}${mq}`)
    })
    p.forEach(x => {
      const paddingx = padding({ [x]: idx }, scale)
      util[`${x}${idx}`] = padding({ [x]: idx }, scale)
      util = mediaQuerize(breakpoints, util, paddingx, mq => `${x}${idx}${mq}`)
    })
  })

  return StyleSheet.create(util)
}
