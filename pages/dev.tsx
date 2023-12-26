import { Sidebar } from '@/components/Sidebar'
import { Mainpage } from '@/components/adminmainpage/mainpage'
import { DashNavbar } from '@/components/adminsnavbar/dashnav'
import { useAppDispatch, wrapper } from '@/store/Store';
import { Getmembers, Eventapi } from '@/store/api';
import React from 'react'
import { Users } from '../components/users/users';
export const getServerSideProps = wrapper.getServerSideProps((Store) => async (context) => {
  console.log("Executing getServerSideProps");
 
  Store.dispatch(Getmembers.initiate());
 await Promise.all(Store.dispatch(Eventapi.util.getRunningQueriesThunk()))
 
 const { data } = Eventapi.endpoints.Getmembers.select(undefined)(Store.getState());
  console.log('hola',data)
  return {
    props: { members: data },
  };
});

function superadmin(members) {
  console.log('familiya', members)
  return (
    <>
    
    <div className='overflow-' ><DashNavbar /></div>
    <div className="flex flex-row  ">
    <div className="w-[15%] ">
    <Sidebar />
    </div>
    <div className='w-[85%]'>
            <Mainpage membersdata={members} /> 
        </div>
    
    </div>

    </>
  )
}

export default superadmin