import React, { useEffect, useState } from 'react'
import { Category } from '../Category'

import { ListItem, UnOrderedList } from './styles'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    window.fetch('https://curso-platzi-react-avanzado-qzmfht695-ivisorea.vercel.app/categories')
      .then(res => res.json())
      .then(data => setCategories(data))
  }, [])

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => {
    return (
      <UnOrderedList className={fixed ? 'fixed' : ''}>
        {
            categories.map(category => (
              <ListItem key={category.id}>
                <Category {...category} />
              </ListItem>
            ))
        }
      </UnOrderedList>
    )
  }

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
