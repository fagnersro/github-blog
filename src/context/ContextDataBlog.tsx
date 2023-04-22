import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api, apiPost } from '../API/axios'

export interface DataUser {
  id: number
  avatar_url: string
  name: string
  html_url: string
  bio: string
  login: string
  company: string
  followers: string
}

export interface DataPost {
  id: number
  title: string
  body: string
  number: number
}

interface ProviderDataBlogProps {
  children: ReactNode
}

interface ContextDataBlogTypes {
  dataUser: DataUser | undefined
  dataPost: DataPost[] | undefined
}

export const ContextDataBlog = createContext<ContextDataBlogTypes>(
  {} as ContextDataBlogTypes,
)

export function ProviderDataBlog({ children }: ProviderDataBlogProps) {
  const [dataUser, setDataUser] = useState<DataUser>()
  const [dataPost, setDataPost] = useState<DataPost[]>([] as DataPost[])

  const fatchDataPost = useCallback(async () => {
    const response = await apiPost.get(
      `issues?q=repo:fagnersro/Challenge-Github-Blog`,
    )
    setDataPost(response.data.items)
  }, [])
  console.log(dataPost)

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
    <ContextDataBlog.Provider value={{ dataUser, dataPost }}>
      {children}
    </ContextDataBlog.Provider>
  )
}
