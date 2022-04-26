import React from 'react'
import { Category } from '../Category'

import { ListItem, UnOrderedList } from './styles'
import { categories } from '../../../api/db.json'

export const ListOfCategories = () => {
  return (
    <>
      <UnOrderedList>
        {
            categories.map(category => (
              <ListItem key={category.id}>
                <Category {...category} />
              </ListItem>
            ))
        }
      </UnOrderedList>
    </>
  )
}
