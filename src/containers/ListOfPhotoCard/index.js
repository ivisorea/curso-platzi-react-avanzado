import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_PHOTOS } from '../../components/hoc/getPhotos'
import { Loader } from '../../components/Loader'
import { PhotoCard } from '../../components/PhotoCard'

export const ListOfPhotoCard = ({ categoryId }) => {
  const { loading, error, data } = useQuery(GET_PHOTOS, {
    variables: { categoryId }
  })

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
