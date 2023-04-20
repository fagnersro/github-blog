import { Outlet } from 'react-router-dom'
import { globalStyles } from '../styles/global'

import Logo from '../assets/Logo.svg'
import { ContainerRoot, ContainerImg, FooterRoot } from './styles'

globalStyles()

export default function Root() {
  return (
    <ContainerRoot>
      <ContainerImg>
        <img src={Logo} alt="" />
      </ContainerImg>
      <Outlet />
      <FooterRoot></FooterRoot>
    </ContainerRoot>
  )
}
