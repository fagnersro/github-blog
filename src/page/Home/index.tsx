import Aside from './components/Aside'
import {
  ContainerHomer,
  ContinerInput,
  DowContentInput,
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
    </ContainerHomer>
  )
}
