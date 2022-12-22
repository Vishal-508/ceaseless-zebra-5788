import { Grid, GridItem } from '@chakra-ui/react'
import React from 'react'

export default function News() {
  return (
    <div>

      <Grid templateColumns='repeat(1, 1fr)' gap={6}>
        <GridItem w='100%' h='10' bg='blue.500' />
        <GridItem w='100%' h='10' bg='blue.500' />
        <GridItem w='100%' h='10' bg='blue.500' />
        <GridItem w='100%' h='10' bg='blue.500' />
        <GridItem w='100%' h='10' bg='blue.500' />
        <GridItem w='100%' h='10' bg='blue.500' />
      </Grid>

    </div>
  )
}
