import { useState } from 'react'
import { Post, postService } from '../../services'

export function usePostLike(
  posts: Post[],
): {
  clientPosts: Post[]
  like: (id: string) => Promise<void>
  pending: string
} {
  const [pending, setPending] = useState('')
  const [clientPosts, setClientPosts] = useState(posts)

  async function like(id: string) {
    setPending(id)

    const res = await postService.like(null, id)

    // ao adicionar um like, o endpoint retorna o post atualizado
    if (res.post) {
      setClientPosts((currentPosts) => {
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
      setClientPosts((currentPosts) => {
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

  return { clientPosts, like, pending }
}
