import Avatar from '../../../../assets/avatar.png'
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
                <span>github{iconArrowUp}</span>
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
              <span>{iconGit}cameronwll</span>
              <span>{iconBuild}Rocketseat</span>
              <span>{iconUser}32 seguidores</span>
            </Info>
          </ContentAside>
        </WrapperAside>
      </ContainerAside>
    </>
  )
}
