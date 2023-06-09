import { styled } from '@stitches/react'
import HeaderBackground from '../assets/HeaderBackground.png'

export const ContainerRoot = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
})

export const ContainerImg = styled('div', {
  backgroundImage: `url(${HeaderBackground})`,
  backgroundSize: 'cover',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  height: '18.5rem',
  width: '100vw',

  img: {
    marginTop: 'calc(0px - 3.8rem - 6px)',
  },
})

export const FooterRoot = styled('footer', {
  height: '5.75rem',
  width: '100%',
})
