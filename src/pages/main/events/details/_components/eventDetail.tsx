import { cn } from '@/utils/cn'
import { Box, Container,Image } from '@mantine/core'
import React from 'react'

export function EventDetail () {
  return (
    <Box className={cn('pt-[7vh]')}>
        <Box className={cn(' py-10 px-40 rounded-lg ')}>
        <Image src="/inter.jpg" alt="My Image" className={cn(' w-full h-[50vh] rounded-lg' )} />
        </Box>
    </Box>
  ) 
}
