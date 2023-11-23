'use client'
import Link from 'next/link'
import React from 'react'
import Image from "next/image";
import { useAppDispatch } from '@/store/Store';
import { setmainpage, setwhichgabdata } from '@/store/gab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCalendar, faUser,faChartBar } from '@fortawesome/free-regular-svg-icons';
import { fa2, faList } from '@fortawesome/free-solid-svg-icons';


export const  Sidebar =() => {
  const dispatch = useAppDispatch();
const newgabs = () => {
  dispatch(setwhichgabdata({whichgab: 'newgab'}))
}
const hotgabs = () => {
  dispatch(setwhichgabdata({whichgab: 'hotgab'}))
}
const Gabsbylocation = () =>{
  dispatch(setmainpage({mainpage:'gabsbylocation'}))
}
  return (
<>
<div className='flex flex-col pt-[90%]  border-r border-gray-100 z-0 ' >
  
      <div className='flex flex-row pl-8 text-textcolor border-b cursor-pointer border-gray-100 w-11/12'>
        <div className='h-6 w-6 mb-2'>
      <FontAwesomeIcon icon={faUser}  className=" bg-gray" />
      </div>

      <button onClick={newgabs} className='px-4 '> Users </button>
      </div>
      <div className='flex flex-row pl-8 pt-5 text-textcolor border-b border-gray-100 cursor-pointer w-11/12'>

      <div className='h-6 w-6 mb-2'>
      <FontAwesomeIcon icon={faCalendar} className="text-2xl bg-gray "  />
      </div>

      <button onClick={hotgabs} className='px-4'> Events </button>
      </div>

      <div className='flex flex-row pl-8 pt-5 text-textcolor border-b border-gray-100 cursor-pointer w-11/12'>
      <div className='h-6 w-6 mb-2'>
      <FontAwesomeIcon icon={faList} className="text-2xl bg-gray "  />
      </div>
      <button onClick ={Gabsbylocation} className='px-4'> Departments</button>
      </div>
     
      <div className='flex flex-row pl-8 pt-5 text-textcolor cursor-pointer border-b border-gray-100 w-11/12'>
      <div className='h-6 w-6 mb-2'>
      <FontAwesomeIcon icon={faChartBar} className="text-2xl bg-gray "  />
      </div>  
      <button className='px-4'> Report analysis</button>
      </div>
     
   
  </div>
      </>
  )
}
