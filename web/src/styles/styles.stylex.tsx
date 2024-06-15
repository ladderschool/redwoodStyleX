import * as stylex from '@stylexjs/stylex'

const DARK = '@media (prefers-color-scheme: dark)'

export const tokens = stylex.defineVars({
  primaryTextColor: { default: '#000000', [DARK]: '#FFFFFF' },
  primaryBGColor: { default: '#FFFFFF', [DARK]: '#000000' },
})

export const mainStyle = stylex.create({
  base: {
    color: tokens.primaryTextColor,
    backgroundColor: tokens.primaryBGColor,
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '16px',
    width: '50%',
    height: '200px',
    textAlign: 'center',
  },
})
