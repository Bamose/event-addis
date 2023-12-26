'use client'

import { useAppSelector } from '@/store/Store'
import React, { useEffect, useState } from 'react'
import  {Users } from '../users/users'
import Createvent from '../event/createevent'




export const Mainpage =({membersdata} ) => {
      const {mainpage } = useAppSelector((state:any) => state.whichgab)
      console.log('dsf', mainpage)
      const[mainpagedata, setmainpagedata] = useState('')
      useEffect(() => {
        if (mainpage === 'gabsbylocation') {
          // Fetch data from useGetGabQuery
         setmainpagedata('gabsbylocation')
        } 
       if (mainpage === 'users'){
            setmainpagedata('users')
        }
        if (mainpage === 'events'){
          setmainpagedata('events')
      }
      }, [mainpage,mainpagedata]);
  return(
    <div>
    {mainpagedata === 'gabsbylocation' ? (
     'as'
    ) : mainpagedata === 'users' ? (
      <Users membersdata={membersdata}/>
    ) : mainpagedata === 'events' ?(
    <Createvent />
    ):
    (
       <Users membersdata={membersdata}/> 
    )}
  </div>
  )
}

