import Aside from './components/Aside'
import ReactMarkdow from 'react-markdown'

import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

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

const searcFormSchema = z.object({
  query: z.string(),
})

export type SearchFormInputs = z.infer<typeof searcFormSchema>

export default function Home() {
  const { dataPost, fatchDataPost } = useContext(ContextDataBlog)

  const { register, handleSubmit, reset } = useForm<SearchFormInputs>({
    resolver: zodResolver(searcFormSchema),
  })

  function handleSearchIssues(data: SearchFormInputs) {
    fatchDataPost(data.query)
    reset()
  }

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
        <DowContentInput onSubmit={handleSubmit(handleSearchIssues)}>
          <input
            type="text"
            placeholder="Buscar conteúdo"
            {...register('query')}
          />
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
