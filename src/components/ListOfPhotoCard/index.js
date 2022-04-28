import { gql, useQuery } from '@apollo/client'
import React from 'react'
import { Loader } from '../Loader'
import { PhotoCard } from '../PhotoCard'

const GET_PHOTOS = gql`
  query getPhotos{
    photos{
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
  `

export const ListOfPhotoCard = () => {
  const { loading, error, data } = useQuery(GET_PHOTOS)

  if (loading) return <Loader />
  if (error) return <p>Error :(</p>

  return (
    <>
      <ul>
        {data.photos.map(photo => (
          <li key={photo.id}>
            <PhotoCard {...photo} />
          </li>
        ))}
      </ul>
    </>
  )
}
