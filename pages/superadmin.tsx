import { Sidebar } from '@/components/Sidebar'
import { Mainpage } from '@/components/adminmainpage/mainpage'
import { DashNavbar } from '@/components/adminsnavbar/dashnav'
import React from 'react'

function superadmin() {
  return (
    <>
    <div><DashNavbar /></div>
    <div className="flex flex-row  ">
    <div className="w-[15%] ">
    <Sidebar />
    </div>
    <div>
            <Mainpage />  
        </div>
    <div className="absolute w-[25%] right-0 ">
 {/*    <Gabpage /> */}
    </div>
    </div>
    
    </>
  )
}

export default superadmin