import { ContainerHeader } from './styles'
import Cover from '../../assets/Cover.svg'
export default function Header() {
  return (
    <ContainerHeader>
      <img src={Cover} alt="" />
    </ContainerHeader>
  )
}
