import Aside from './components/Aside'
import {
  ContainerHomer,
  ContainerPost,
  ContinerInput,
  DowContentInput,
  Post,
  TopContentInput,
} from './styles'

export default function Home() {
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
        <Post>
          <div>
            <div>
              <h2>JavaScript data types and data structures</h2>
            </div>

            <span>Há 1 dia</span>
          </div>
          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in
          </p>
        </Post>

        <Post>
          <div>
            <div>
              <h2>JavaScript data types and data structures</h2>
            </div>

            <span>Há 1 dia</span>
          </div>
          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in
          </p>
        </Post>

        <Post>
          <div>
            <div>
              <h2>JavaScript data types and data structures</h2>
            </div>

            <span>Há 1 dia</span>
          </div>
          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in
          </p>
        </Post>

        <Post>
          <div>
            <div>
              <h2>JavaScript data types and data structures</h2>
            </div>

            <span>Há 1 dia</span>
          </div>
          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in
          </p>
        </Post>

        <Post>
          <div>
            <div>
              <h2>JavaScript data types and data structures</h2>
            </div>

            <span>Há 1 dia</span>
          </div>
          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in
          </p>
        </Post>

        <Post>
          <div>
            <div>
              <h2>JavaScript data types and data structures</h2>
            </div>

            <span>Há 1 dia</span>
          </div>
          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in
          </p>
        </Post>
      </ContainerPost>
    </ContainerHomer>
  )
}
