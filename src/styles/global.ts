import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: '0',
    padding: '0',
    boxSizing: 'border-box',
    fontFamily: '"Nunito", sans-serif',
  },

  a: {
    textDecoration: 'none',
  },

  body: {
    backgroundColor: '$baseBackground',
    overflowX: 'hidden',

    height: '100vh',
    width: '100vw',
  },

  'body, input, textarea,button': {
    fontFamily: '"Nunito", sans-serif',
    fontWeight: 400,
  },
})
