import { cn } from '@/utils/cn'
import { Avatar, Box, Container,Flex,Group,Image, Stack,Text, Title } from '@mantine/core'
import React from 'react'

export function EventDetail () {
  return (
    <Stack className={cn('pt-[7vh] px-40')}>
        <Box className={cn(' py-10  rounded-lg ')}>
        <Image src="/inter.jpg" alt="My Image" className={cn(' w-full h-[50vh] rounded-lg' )} />
        </Box>

        <Box w={500}>
          <Text>Wednesday, May 29</Text>
          <Title>Journey into the Sacred Feminine - The S.H.E Method</Title>
        </Box>
        <Group>
          <Avatar />
          <Flex  gap={10} direction={'column'}>
            
            <Text > <b>By Rise up Hiking</b>  7.2k followers</Text>
            <Box size={'sm'} className={cn('bg-orange-400/40 rounded-full p-2 w-[10vw] pl-5')}><Text>72.1k attendess</Text></Box>
          </Flex>
        </Group>
    </Stack>
  ) 
}
