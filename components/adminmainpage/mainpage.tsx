'use client'

import { useAppSelector } from '@/store/Store'
import React, { useEffect, useState } from 'react'
import  {Users } from '../users/users'




export const Mainpage =() => {
      const {mainpage } = useAppSelector((state:any) => state.whichgab)
      const[mainpagedata, setmainpagedata] = useState('')
      useEffect(() => {
        if (mainpage === 'gabsbylocation') {
          // Fetch data from useGetGabQuery
         setmainpagedata('gabsbylocation')
        } 
       if (mainpage === 'users'){
            setmainpagedata('users')
        }
        if (mainpage === 'map'){
          setmainpagedata('map')
      }
      }, [mainpage,mainpagedata]);
  return(
    <div>
    {mainpagedata === 'gabsbylocation' ? (
     'as'
    ) : mainpagedata === 'users' ? (
      <Users/>
    ) : mainpagedata === 'map' ?(
    "sdfsd"
    ):
    (
        <Users/>
    )}
  </div>
  )
}

