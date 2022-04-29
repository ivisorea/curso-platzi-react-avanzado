import { gql } from '@apollo/client'

export const LIKE_ANONYMOUS_PHOTOS = gql`
mutation likeAnonymousPhoto($input: LikePhoto!){
    likeAnonymousPhoto(input: $input){
      id,
      likes,
      liked
    }
  }
`
