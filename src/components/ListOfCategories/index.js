import React, { useEffect, useState } from 'react'
import { Category } from '../Category'

import { ListItem, UnOrderedList } from './styles'

function useFetchCategories () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    window.fetch('https://curso-platzi-react-avanzado-qzmfht695-ivisorea.vercel.app/categories')
      .then(res => res.json())
      .then(data => setCategories(data))
      .finally(() => setLoading(false))
  }, [])
  return { categories, loading }
}

export const ListOfCategories = () => {
  const { categories, loading } = useFetchCategories()
  const [showFixed, setShowFixed] = useState(false)

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
      <UnOrderedList fixed={fixed}>
        {
            loading
              ? [1, 2, 3, 4, 5].map((item, index) => (
                <ListItem key={index}>
                  <Category item={item} />
                </ListItem>
                ))
              : categories.map(category => (
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
