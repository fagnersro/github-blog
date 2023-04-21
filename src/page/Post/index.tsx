import AsidePost from './components/AsidePost'
import {
  ContainerPost,
  ContainerContentPost,
  WrapperContentPost,
  ContentPostUp,
  ContentPostDown,
} from './styles'

export default function Post() {
  return (
    <ContainerPost>
      <AsidePost />
      <ContainerContentPost>
        <WrapperContentPost>
          <ContentPostUp>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have. These can be used to build other data
              structures. Wherever possible, comparisons with other languages
              are drawn.
            </p>

            <p>
              <a href="https://github.com/fagnersro">Dynamic typing</a> <br />
              JavaScript is a loosely typed and dynamic language. Variables in
              JavaScript are not directly associated with any particular value
              type, and any variable can be assigned (and re-assigned) values of
              all types:
            </p>
          </ContentPostUp>
          <ContentPostDown></ContentPostDown>
        </WrapperContentPost>
      </ContainerContentPost>
    </ContainerPost>
  )
}
