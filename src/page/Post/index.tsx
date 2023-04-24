import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import AsidePost from './components/AsidePost'
import {
  ContainerPost,
  ContainerContentPost,
  WrapperContentPost,
  ContentPostUp,
} from './styles'
import { ContextDataBlog } from '../../context/ContextDataBlog'

export default function Post() {
  const { fatchDataFullPost, dataFullPost } = useContext(ContextDataBlog)
  const { issueNumber } = useParams()

  useEffect(() => {
    fatchDataFullPost(issueNumber)
  }, [fatchDataFullPost, issueNumber])
  console.log(dataFullPost?.body)
  return (
    <ContainerPost>
      <AsidePost />
      <ContainerContentPost>
        <WrapperContentPost>
          <ContentPostUp>
            <p>
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {dataFullPost?.body}
              </ReactMarkdown>
            </p>
          </ContentPostUp>
        </WrapperContentPost>
      </ContainerContentPost>
    </ContainerPost>
  )
}
