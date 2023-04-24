import { ContainerAsidePost, ContainerIcon } from './styles'
import {
  iconChevron,
  iconArrowUp,
  iconGit,
  iconCalendar,
  iconComment,
} from '../../../../assets/Icons'
import { useContext } from 'react'
import { ContextDataBlog } from '../../../../context/ContextDataBlog'
import { Link } from 'react-router-dom'

export default function AsidePost() {
  const { dataFullPost } = useContext(ContextDataBlog)

  return (
    <ContainerAsidePost>
      <nav>
        <Link to="/">
          <span>{iconChevron}voltar</span>
        </Link>
        <div>
          <a href={dataFullPost?.html_url} target="_blank" rel="noreferrer">
            <span>ver no github{iconArrowUp}</span>
          </a>
        </div>
      </nav>

      <h2>{dataFullPost?.title}</h2>

      <ContainerIcon>
        <span>
          {iconGit}
          {dataFullPost?.user.login}
        </span>
        <span>{iconCalendar}1 min</span>
        <span>
          {iconComment}
          {dataFullPost?.comments} comentários
        </span>
      </ContainerIcon>
    </ContainerAsidePost>
  )
}
