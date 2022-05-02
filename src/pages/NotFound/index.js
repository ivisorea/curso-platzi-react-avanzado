import React from 'react'
import { NavBar } from '../../components/NavBar'
import { Container, Text } from './styles'

export const NotFound = () => {
  return (
    <>
      <Container>
        <Text>SORRY</Text>
        <p>We couldn't find that page</p>
      </Container>
      <NavBar />
    </>
  )
}
