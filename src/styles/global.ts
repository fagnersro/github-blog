import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: '0',
    padding: '0',
    boxSizing: 'border-box',
    fontFamily: '"Nunito", sans-serif',
  },

  body: {
    backgroundColor: '$baseBackground',
    overflowX: 'hidden',
  },

  'body, input, textarea,button': {
    fontFamily: '"Nunito", sans-serif',
    fontWeight: 400,
  },
})
