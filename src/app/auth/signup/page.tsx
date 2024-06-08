import { Box, Divider, Stack, Title,Text, Flex } from '@mantine/core'
import Link from 'next/link'
import React from 'react'
import { GoogleButton } from './_components/googleButton'
import SignUpForm from './_components/signUpForm'


export default function signupPage () {
  return (
    <Stack className="px-2 pt-3 w-full" bg={'white'} >
    <Flex>  
    <Title className="text-center font-semibold" size={24}>
      Welcome, Sign up to Event Addis 
    </Title>

    
      <>
      <GoogleButton radius="xl">Sign in with Google</GoogleButton>
        <Divider
          label="Or"
          labelPosition="center"
          className="font-semibold"
        />
      </>
    
    <SignUpForm />

    <Text className="text-left text-xs text-gray-600">
      By signing up, you agree to our{' '}
      <Link href="/page/terms" className="text-primary-5 hover:underline">
        Terms of Service
      </Link>{' '}
      and{' '}
      <Link href="/page/privacy" className="text-primary-5 hover:underline">
        Privacy Policy
      </Link>
      , including{' '}
      <Link href="/page/cookie" className="text-primary-5 hover:underline">
        Cookie Use.
      </Link>
    </Text>
    </Flex>  
  </Stack>

  )
}

