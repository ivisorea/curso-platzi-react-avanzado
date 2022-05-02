import React from 'react'
import { Outlet } from 'react-router'
import { ListOfCategories } from '../ListOfCategories'
import { Logo } from '../Logo'
import { NavBar } from '../NavBar'

export const Layout = () => {
  return (
    <>
      <Logo />
      <ListOfCategories />
      <Outlet />
      <NavBar />
    </>
  )
}
