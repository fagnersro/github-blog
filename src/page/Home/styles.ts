import { styled } from '../../styles'

export const ContainerHomer = styled('div', {
  // border: '1px solid red',
  display: 'flex',
  flexDirection: 'column',

  height: '100vh',
  marginTop: 'calc(0px - 5.8rem - 6px)',
  maxWidth: '54.1rem',
  width: '100%',
})

export const ContinerInput = styled('label', {
  height: '5.688rem',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  marginTop: '4.75rem',
  maxWidth: '54.1rem',
  width: '100%',
})

export const TopContentInput = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  height: '1.813rem',
  maxWidth: '54.1rem',
  width: '100%',

  span: {
    color: '$baseSubtitle',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '18px',
    lineHeight: '160%',
  },

  div: {
    height: '1.813rem',

    span: {
      color: '$baseSpan',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '160%',
    },
  },
})

export const DowContentInput = styled('div', {
  backgroundColor: '$baseInput',
  border: '1px solid $baseBorder',
  borderRadius: '6px',

  display: 'flex',
  padding: '12px 16px',

  height: '3.125rem',
  maxWidth: '54.1rem',
  width: '100%',

  input: {
    all: 'unset',
    color: '$baseLabel',

    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '160%',
    flex: 1,

    '&::placeholder': {
      color: '$baseLabel',
    },
  },
})
