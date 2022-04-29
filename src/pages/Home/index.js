import React from 'react'
import { useParams } from 'react-router'
import { ListOfCategories } from '../../components/ListOfCategories'
import { Logo } from '../../components/Logo'
import { ListOfPhotoCard } from '../../containers/ListOfPhotoCard'

export const Home = () => {
  const { id } = useParams()
  return (
    <>
      <Logo />
      <ListOfCategories />
      <ListOfPhotoCard categoryId={id} />
    </>
  )
}
