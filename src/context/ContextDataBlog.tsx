import { createContext, useCallback, useEffect, useState } from 'react'
import { api, apiPost } from '../API/axios'
import {
  ContextDataBlogTypes,
  DataFullPost,
  DataPost,
  DataUser,
  ProviderDataBlogProps,
} from './TypeContextDataBlog'

export const ContextDataBlog = createContext<ContextDataBlogTypes>(
  {} as ContextDataBlogTypes,
)

export function ProviderDataBlog({ children }: ProviderDataBlogProps) {
  const [dataUser, setDataUser] = useState<DataUser>()
  const [dataPost, setDataPost] = useState<DataPost[]>([] as DataPost[])
  const [dataFullPost, setDataFullPost] = useState<DataFullPost>()

  const fatchDataFullPost = useCallback(
    async (issueNumber: string | undefined) => {
      const response = await api.get(
        `/repos/fagnersro/Challenge-Github-Blog/issues/${issueNumber}`,
      )
      /* eslint-disable */
      const {
        html_url,
        title,
        user: { login },
        comments,
        body,
        created_at
      }:DataFullPost = response.data

      const responseDataFullPost: DataFullPost = {
        html_url,
        title,
        user: { login },
        comments,
        body,
        created_at
      }

      setDataFullPost(responseDataFullPost)

    },
    [],
  )



  const fatchDataPost = useCallback(async (query = "") => {

    const response = await apiPost.get(
      `issues?q=${
        query ? query : ""
      }repo:fagnersro/Challenge-Github-Blog`,
    )

    setDataPost(response.data.items)
  }, [])

  const fatchDataUser = useCallback(async () => {
    const response = await api.get('/users/fagnersro')
    /* eslint-disable */
    const {
      id,
      avatar_url,
      name,
      html_url,
      bio,
      login,
      company,
      followers,
    }: DataUser = response.data

    const responseDataUser = {
      id,
      avatar_url,
      name,
      html_url,
      bio,
      login,
      company,
      followers,
    }

    setDataUser(responseDataUser)
  }, [])

  useEffect(() => {
    fatchDataUser()
  }, [fatchDataUser])
  
  useEffect(() => {
    fatchDataPost()
  }, [fatchDataPost])

  return (
    <ContextDataBlog.Provider value={{ dataUser, dataPost, dataFullPost, fatchDataFullPost, fatchDataPost }}>
      {children}
    </ContextDataBlog.Provider>
  )
}
