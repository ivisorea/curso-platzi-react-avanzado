import React from 'react'
import { PhotoCard } from '../PhotoCard'

export const ListOfPhotoCard = () => {
  return (
    <>
      <ul>
        {
            [1, 2, 3, 4, 5].map(photo => (
              <li key={photo}>
                <PhotoCard />
              </li>
            ))
        }
      </ul>
    </>
  )
}
