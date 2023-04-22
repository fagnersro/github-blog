import { useContext } from 'react'

import {
  iconGit,
  iconArrowUp,
  iconBuild,
  iconUser,
} from '../../../../assets/Icons/'

import {
  BioContent,
  ContainerAside,
  ContentAside,
  Info,
  TitleContent,
  WrapperAside,
} from './styles'
import { ContextDataBlog } from '../../../../context/ContextDataBlog'

export default function Aside() {
  const { dataUser } = useContext(ContextDataBlog)

  return (
    <>
      <ContainerAside>
        <WrapperAside>
          <img src={dataUser?.avatar_url} alt="" />
          <ContentAside>
            <TitleContent>
              <div>
                <h1>{dataUser?.name}</h1>
              </div>
              <div>
                <a href={dataUser?.html_url} target="_blank" rel="noreferrer">
                  <span>github{iconArrowUp}</span>
                </a>
              </div>
            </TitleContent>

            <BioContent>
              <span>{dataUser?.bio}</span>
            </BioContent>

            <Info>
              <span>
                {iconGit}
                {dataUser?.login}
              </span>
              <span>
                {iconBuild}
                {dataUser?.company}
              </span>
              <span>
                {iconUser}
                {dataUser?.followers} seguidores
              </span>
            </Info>
          </ContentAside>
        </WrapperAside>
      </ContainerAside>
    </>
  )
}
