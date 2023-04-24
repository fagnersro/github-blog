import Aside from './components/Aside'
import ReactMarkdow from 'react-markdown'
import { ContextDataBlog } from '../../context/ContextDataBlog'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import {
  ContainerHomer,
  ContainerPost,
  ContinerInput,
  DowContentInput,
  Post,
  TopContentInput,
} from './styles'

export default function Home() {
  const { dataPost } = useContext(ContextDataBlog)

  return (
    <ContainerHomer>
      <Aside />

      <ContinerInput>
        <TopContentInput>
          <span>Publicações</span>
          <div>
            <span>{dataPost?.length} publicações</span>
          </div>
        </TopContentInput>
        <DowContentInput>
          <input type="text" placeholder="Buscar conteúdo" />
        </DowContentInput>
      </ContinerInput>
      <ContainerPost>
        {dataPost?.map((item) => {
          return (
            <Link key={item.id} to={`${item.number}`}>
              <Post>
                <div>
                  <div>
                    <h2>{item.title}</h2>
                  </div>

                  <span>Há 1 dia</span>
                </div>
                <p>
                  <ReactMarkdow>{item.body}</ReactMarkdow>
                </p>
              </Post>
            </Link>
          )
        })}
      </ContainerPost>
    </ContainerHomer>
  )
}
