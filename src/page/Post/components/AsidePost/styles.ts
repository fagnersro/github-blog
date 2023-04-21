import { styled } from '../../../../styles'

export const ContainerAsidePost = styled('div', {
  boxShadow: '0px 2px 28px rgba(0, 0, 0, 0.2)',
  backgroundColor: '$baseBackground',
  borderRadius: '10px',
  padding: '2rem',

  height: '10.5rem',
  width: '53.9rem',

  nav: {
    display: 'flex',
    justifyContent: 'space-between',

    span: {
      color: '$blue',
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: '12px',
      lineHeight: '160%',
      textTransform: 'uppercase',

      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',

      height: '1.188rem',
      width: '4.188rem',
    },

    div: {
      span: {
        height: '1.188rem',
        width: '7.188rem',
      },
    },
  },

  h2: {
    marginTop: '1.25rem',

    color: '$baseTitle',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '24px',
    lineHeight: '130%',
  },
})

export const ContainerIcon = styled('div', {
  marginTop: '0.5rem',
  height: '1.625rem',
  width: '24.375rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  span: {
    color: '$baseSpan',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',

    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '160%',
  },
})
