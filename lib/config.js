
import Color from 'color'
import { getMediaQueries } from './helpers'

export const Button = {
  breakpoints: {
    extraSmall: {
      height: 10
    },
    small: {
      height: 20
    },
    medium: {
      height: 30
    },
    large: {
      height: 40
    },
    extraLarge: {
      height: 50
    }
  }
}

export const breakpoints = {
  extraSmall: 500,
  small: 700,
  medium: 1024,
  large: 1280,
  extraLarge: 1400
}

const white = '#fff'
const baseColors = {
  white,
  black: '#373737',
  darkerGray: '#5d5d5d',
  darkGray: '#9e9e9e',
  gray: '#dedede',
  lightGray: '#f2f2f2',
  lighterGray: '#fafafa',
  orange: '#f36d36',
  darkNeutral: '#ebe6c9',
  neutral: '#f2efdc',
  darkTeal: '#1c5a68',
  teal: '#2c7b91',
  aqua: '#b0e0e6',
  lightAqua: '#d7eff2',
  yellow: '#fbb040'
}
export const colors = {
  ...baseColors,
  primary: baseColors.orange,
  secondary: baseColors.teal,
  warning: baseColors.orange,
  error: baseColors.orange,
  info: baseColors.teal,
  default: baseColors.black,
  success: baseColors.lightAqua
}

export const scale = [6, 13, 33, 58, 100]
export const fontSizes = [40, 36, 26, 22, 18, 14, 13]
export const fontSize = fontSizes[4]
export const fontFamily = `'AvenirLTStd-Light', sans-serif`
export const borderColor = colors.gray
export const borderWidth = 1
export const borderStyle = 'solid'
export const borderRadius = 5
export const boxShadow = `0px 1px 4px -1px ${Color(colors.black).fade(0.9).rgb().string()}`
export const transition = '.05s ease-in-out'
export const mediaQueries = getMediaQueries(breakpoints)
export const lineHeight = '1.5em'
export const fontColor = colors.black
export const inputHeight = 45
export const inputHeightSmall = inputHeight - 10
export const buttonHeight = inputHeight
export const buttonHeightSmall = inputHeightSmall
