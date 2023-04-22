import Aside from './components/Aside'
import ReactMarkdow from 'react-markdown'
import {
  ContainerHomer,
  ContainerPost,
  ContinerInput,
  DowContentInput,
  Post,
  TopContentInput,
} from './styles'
import { ContextDataBlog } from '../../context/ContextDataBlog'
import { useContext } from 'react'

export default function Home() {
  const { dataPost } = useContext(ContextDataBlog)

  return (
    <ContainerHomer>
      <Aside />

      <ContinerInput>
        <TopContentInput>
          <span>Publicações</span>
          <div>
            <span>6 publicações</span>
          </div>
        </TopContentInput>
        <DowContentInput>
          <input type="text" placeholder="Buscar conteúdo" />
        </DowContentInput>
      </ContinerInput>
      <ContainerPost>
        {dataPost?.map((item) => {
          return (
            <Post key={item.id}>
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
          )
        })}
      </ContainerPost>
    </ContainerHomer>
  )
}
