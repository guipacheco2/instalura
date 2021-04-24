export interface Post {
  __v: number
  _id: string
  createdAt: string
  description: string
  filter: string
  likes: { _id: string; user: string }[]
  photoUrl: string
  updatedAt: string
  user: string
}
