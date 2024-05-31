'use client'
import { Box, Stack, Title,Text,Flex, Button,Group } from '@mantine/core'
import { useRouter } from 'next/navigation'
import React from 'react'

export function Detail () {

  const router = useRouter()
  const handleCreate = () =>{
    router.push("/create-event")
  }
  return (
    <Stack className='w-2/3'>
       <Title size={'h2'}> Hello There</Title>
       <Flex justify='center' className='mt-[10vh]'>
       <Box className='w-2/3 h-auto bg-gray-400/20 py-6 rounded-lg '>
            <Stack justify='center' align='center'>
                <Title size={'h4'}> Start from scratch</Title>
                <Text size="sm" c={'gray'}>Add all your event details, create new tickets, and set up recurring events</Text>
                <Button bg={'black'} onClick={handleCreate}>Create event</Button>
            </Stack>
       </Box>
       </Flex>
    </Stack>
  )
}
