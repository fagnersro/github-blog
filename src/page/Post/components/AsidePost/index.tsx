import { ContainerAsidePost, ContainerIcon } from './styles'
import {
  iconChevron,
  iconArrowUp,
  iconGit,
  iconCalendar,
  iconComment,
} from '../../../../assets/Icons'

export default function AsidePost() {
  return (
    <ContainerAsidePost>
      <nav>
        <span>{iconChevron}voltar</span>
        <div>
          <span>ver no github{iconArrowUp}</span>
        </div>
      </nav>

      <h2>JavaScript data types and data structures</h2>

      <ContainerIcon>
        <span>{iconGit}cameronwll</span>
        <span>{iconCalendar}Há 1 dia</span>
        <span>{iconComment}5 comentários</span>
      </ContainerIcon>
    </ContainerAsidePost>
  )
}
