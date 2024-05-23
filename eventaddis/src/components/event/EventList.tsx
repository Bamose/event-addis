'use client'

import { Container } from '@mantine/core'
import React from 'react'
import classes from './evenlist.module.css'
import { Event } from './event'


function EventList() {
  return (

    <div className='h-max mb-10 rounded-md px-[6%] py-5'  >
            <Event  />
    </div>

  )
}

export default EventList