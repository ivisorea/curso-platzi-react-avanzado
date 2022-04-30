import React from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery'
import { Route, Routes } from 'react-router'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { ListOfPhotoCard } from './containers/ListOfPhotoCard'
import { Layout } from './components/Layout'

export const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/detail/:id' element={<PhotoCardWithQuery />} />
          <Route path='/pet/:categoryId' element={<ListOfPhotoCard />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}
