import { useQuery } from '@apollo/client'
import React from 'react'
import { useParams } from 'react-router'
import { GET_SINGLE_PHOTO } from '../../components/hoc/getSinglePhoto'
import { Loader } from '../../components/Loader'
import { PhotoCard } from '../../components/PhotoCard'

export const PhotoCardWithQuery = () => {
  const { id } = useParams()
  console.log(id)
  const { data, loading, error } = useQuery(GET_SINGLE_PHOTO, {
    variables: { id }
  })

  if (loading) return <Loader />
  if (error) return <p>Error :(</p>
  const { photo = {} } = data

  return <PhotoCard {...photo} />
}
