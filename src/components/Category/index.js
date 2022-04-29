import React from 'react'
import { Loader } from '../Loader'
import { Link, Image } from './styles'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'
const DEFAULT_PET_EMOJI = '🐶'
export const Category = ({ cover = DEFAULT_IMAGE, path = '#', emoji = DEFAULT_PET_EMOJI, item }) => {
  return (
    <>
      <Link to={path}>
        {item ? <Loader /> : <Image src={cover} alt='image' />}
        {emoji}
      </Link>
    </>

  )
}
