import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../API/axios'

export interface DataUser {
  id: string
  avatar_url: string
  name: string
  html_url: string
  bio: string
  login: string
  company: string
  followers: string
}

interface ProviderDataBlogProps {
  children: ReactNode
}

interface ContextDataBlogTypes {
  dataUser: DataUser | undefined
}

export const ContextDataBlog = createContext<ContextDataBlogTypes>(
  {} as ContextDataBlogTypes,
)

export function ProviderDataBlog({ children }: ProviderDataBlogProps) {
  const [dataUser, setDataUser] = useState<DataUser>()

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

  console.log(dataUser)

  return (
    <ContextDataBlog.Provider value={{ dataUser }}>
      {children}
    </ContextDataBlog.Provider>
  )
}
