import React from 'react'
import { Loader } from '../Loader'
import { Anchor, Image } from './styles'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'
const DEFAULT_PET_EMOJI = '🐶'
export const Category = ({ cover = DEFAULT_IMAGE, paht, emoji = DEFAULT_PET_EMOJI, item }) => {
  return (
    <>
      <Anchor href={paht}>
        {item ? <Loader /> : <Image src={cover} alt='image' />}
        {emoji}
      </Anchor>
    </>

  )
}
