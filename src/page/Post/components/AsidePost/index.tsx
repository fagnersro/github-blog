import { ContainerAsidePost } from './styles'
import { iconChevron, iconArrowUp } from '../../../../assets/Icons'

export default function AsidePost() {
  return (
    <ContainerAsidePost>
      <nav>
        <span>{iconChevron}voltar</span>
        <div>
          <span>ver no github{iconArrowUp}</span>
        </div>
      </nav>
    </ContainerAsidePost>
  )
}
