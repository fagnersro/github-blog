import { styled } from '../../styles'

export const ContainerPost = styled('div', {
  marginTop: 'calc(0px - 5.8rem - 6px)',
  height: '37rem',
  width: '54rem',
})

export const ContainerContentPost = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  height: '26.375rem',
  width: '54rem',
})

export const WrapperContentPost = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',

  height: '21.375rem',
  width: '50rem',
})

export const ContentPostUp = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',

  height: '13rem',
  width: '100%',

  p: {
    color: '$baseText',
    textAlign: 'left',

    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '160%',
  },

  a: {
    color: '$blue',
    textDecoration: 'underline',
  },
})

export const ContentPostDown = styled('div', {
  backgroundColor: '$basePost',
  height: '6.875rem',
  width: '100%',
})
