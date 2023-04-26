import { styled } from '../../styles'

export const ContainerHomer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  height: '100%',
  marginTop: 'calc(0px - 5.8rem - 6px)',
  maxWidth: '54.1rem',
  width: '100%',
})

export const ContinerInput = styled('label', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  marginTop: '4.75rem',
  height: '5.688rem',
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

export const DowContentInput = styled('form', {
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

export const ContainerPost = styled('main', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '1.8rem',

  marginTop: '3rem',
  height: '100%',
  width: '100%',
})

export const Post = styled('div', {
  border: '2px solid transparent',
  backgroundColor: '$basePost',
  borderRadius: '0.625rem',
  padding: '32px',

  height: '16.25rem',
  width: '26rem',

  div: {
    display: 'flex',
    justifyContent: 'space-between',

    div: {
      width: '17.688rem',

      h2: {
        color: '$baseTitle',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '20px',
        lineHeight: '160%',
      },
    },

    span: {
      color: '$baseSpan',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '160%',
    },
  },

  p: {
    color: '$baseText',
    textAlign: 'left',

    marginTop: '1.25rem',
    height: '7rem',
    width: '22rem',
    overflowY: 'hidden',
    overflowX: 'hidden',
  },

  '&:hover': {
    border: '2px solid $baseLabel',
    transition: 'border 0.2s',
  },
})
