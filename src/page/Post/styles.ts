import { styled } from '../../styles'

export const ContainerPost = styled('div', {
  marginTop: 'calc(0px - 5.8rem - 6px)',

  height: '100%',
  width: '54rem',
})

export const ContainerContentPost = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  height: '100%',
  width: '54rem',
})

export const WrapperContentPost = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  height: '90%',
  width: '50rem',
})

export const ContentPostUp = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',

  height: 'fit-content',
  width: '100%',

  p: {
    color: '$baseText',
    textAlign: 'left',
    padding: '0.625rem',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '160%',

    pre: {
      backgroundColor: '$basePost',
      padding: '0.938rem',
      height: '100%',
      width: '100%',
    },
    code: {
      color: 'blue',
      fontFamily: 'Fira Code',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '0.875rem',
    },
  },

  a: {
    color: '$blue',
    textDecoration: 'underline',
  },
})

export const ContentPostDown = styled('div', {
  backgroundColor: '$basePost',

  marginTop: '1.5rem',
  height: '6.875rem',
  width: '100%',
})
