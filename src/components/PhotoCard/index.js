import React, { useEffect, useRef, useState } from 'react'
import { Button, Img, ImgWrapper, PhotoCardWrapper } from './styles'
import { MdFavoriteBorder } from 'react-icons/md'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const element = useRef(null)
  const [show, setShow] = useState(false)
  useEffect(() => {
    const observer = new
    window.IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0]
      if (isIntersecting) {
        console.log('is visible')
        setShow(true)
        observer.disconnect()
      }
    })
    observer.observe(element.current)
  }, [])

  return (
    <PhotoCardWrapper ref={element}>
      {
        show && (
          <>
            <a href={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </a>
            <Button>
              <MdFavoriteBorder size='30px' />{likes} likes
            </Button>
          </>
        )
      }
    </PhotoCardWrapper>
  )
}
