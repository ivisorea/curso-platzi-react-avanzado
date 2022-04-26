import React from 'react'
import { Anchor, Image } from './styles'

export const Category = ({ cover, paht, emoji }) => {
  return (
    <>
      <Anchor href={paht}>
        <Image src={cover} alt='image' />
        {emoji}
      </Anchor>
    </>

  )
}
