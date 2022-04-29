import React from 'react'
import { Img, ImgWrapper, PhotoCardWrapper } from './styles'
import { useNearScreen } from '../../hooks/useNearScreen'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { FavButton } from '../FavButton'
import { gql, useMutation } from '@apollo/client'
import { Loader } from '../Loader'

const LIKE_ANONYMOUS_PHOTOS = gql`
mutation likeAnonymousPhoto($input: LikePhoto!){
    likeAnonymousPhoto(input: $input){
      id,
      likes,
      liked
    }
  }
`
export const PhotoCard = ({ id, likes = 0, src }) => {
  const [show, element] = useNearScreen()
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)
  const [likeAnonymousPhoto, { loading, error }] = useMutation(LIKE_ANONYMOUS_PHOTOS)

  const handleFavClick = () => {
    !liked && likeAnonymousPhoto({ variables: { input: { id } } })
    setLiked(!liked)
  }
  if (loading) return <Loader />
  if (error) return <p>Error :(</p>

  return (
    <PhotoCardWrapper ref={element}>
      {
        show && (
          <>
            <a href={`/?detail=${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </a>
            <FavButton likes={likes} liked={liked} onClick={handleFavClick} />
          </>
        )
      }
    </PhotoCardWrapper>
  )
}
