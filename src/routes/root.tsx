import { Outlet } from 'react-router-dom'
import { globalStyles } from '../styles/global'

import Logo from '../assets/Logo.svg'
import { ContainerRoot, ContainerImg } from './styles'

globalStyles()

export default function Root() {
  return (
    <ContainerRoot>
      <ContainerImg>
        <img src={Logo} alt="" />
      </ContainerImg>
      <Outlet />
    </ContainerRoot>
  )
}
