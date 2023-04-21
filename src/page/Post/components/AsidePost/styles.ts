import { styled } from '../../../../styles'

export const ContainerAsidePost = styled('div', {
  border: '1px solid #FFF',
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
})
