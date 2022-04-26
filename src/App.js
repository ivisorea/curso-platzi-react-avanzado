import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCard } from './components/ListOfPhotoCard'
import { Logo } from './components/Logo'
import { GlobalStyles } from './styles/GlobalStyles'

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Logo />
      <ListOfCategories />
      <ListOfPhotoCard />
    </>
  )
}
