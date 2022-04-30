import React from 'react'
import { Outlet } from 'react-router'
import { ListOfCategories } from '../ListOfCategories'
import { Logo } from '../Logo'

export const Layout = () => {
  return (
    <>
      <Logo />
      <ListOfCategories />
      <Outlet />
    </>
  )
}
