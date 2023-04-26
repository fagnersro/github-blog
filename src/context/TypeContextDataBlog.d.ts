import { ReactNode } from 'react'

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

export interface DataFullPost {
  html_url: string
  title: string
  user: {
    login: string
  }
  comments: number
  body: string
  created_at: string
}

export interface ContextDataBlogTypes {
  dataUser: DataUser | undefined
  dataPost: DataPost[] | undefined
  dataFullPost: DataFullPost | undefined
  fatchDataFullPost(issueNumber: string | undefined): Promise<void>
  fatchDataPost(data: string): Promise<void>
}

export interface ProviderDataBlogProps {
  children: ReactNode
}
