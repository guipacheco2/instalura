import { useState } from 'react'
import { useAppPageContext } from '../../components'
import { Post, postService } from '../../services'

export function usePostLike(): {
  like: (id: string) => Promise<void>
  pending: string
  posts: Post[]
} {
  const { posts, setPosts } = useAppPageContext()
  const [pending, setPending] = useState('')

  async function like(id: string) {
    setPending(id)

    const res = await postService.like(null, id)

    // ao adicionar um like, o endpoint retorna o post atualizado
    if (res.post) {
      setPosts((currentPosts) => {
        return currentPosts.map((post) => {
          if (post._id === id) {
            return res.post
          }

          return post
        })
      })
    }
    // ao remover, o endpoint retorna vazio
    else {
      setPosts((currentPosts) => {
        return currentPosts.map((post) => {
          if (post._id === id) {
            return {
              ...post,
              likes: post.likes.slice(0, post.likes.length - 1),
            }
          }

          return post
        })
      })
    }

    setPending('')
  }

  return { like, pending, posts }
}
