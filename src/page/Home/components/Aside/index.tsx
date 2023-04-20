import { ArrowSquareOut } from '@phosphor-icons/react'
import Avatar from '../../../../assets/avatar.png'
import {
  BioContent,
  ContainerAside,
  ContentAside,
  IconInfoCompany,
  IconInfoFollowers,
  IconInfoGit,
  Info,
  TitleContent,
  WrapperAside,
} from './styles'

export default function Aside() {
  return (
    <>
      <ContainerAside>
        <WrapperAside>
          <img src={Avatar} alt="" />
          <ContentAside>
            <TitleContent>
              <div>
                <h1>Cameron Williamson</h1>
              </div>
              <div>
                <span>
                  github <ArrowSquareOut weight="bold" />
                </span>
              </div>
            </TitleContent>

            <BioContent>
              <span>
                Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
                viverra massa quam dignissim aenean malesuada suscipit. Nunc,
                volutpat pulvinar vel mass.
              </span>
            </BioContent>

            <Info>
              <span>
                <IconInfoGit></IconInfoGit>
                cameronwll
              </span>
              <span>
                <IconInfoCompany></IconInfoCompany>
                Rocketseat
              </span>
              <span>
                <IconInfoFollowers></IconInfoFollowers>
                32 seguidores
              </span>
            </Info>
          </ContentAside>
        </WrapperAside>
      </ContainerAside>
    </>
  )
}
