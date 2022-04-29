import React from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery'
import { Route, Routes } from 'react-router'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'

export const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pet/:id' element={<Home />} />
        <Route path='/detail/:id' element={<PhotoCardWithQuery />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}
