import { useGetmembersQuery } from "@/store/api";
import { membertypes } from "@/types/types";
import { useEffect, useState } from "react";

export type UserApiResponse = {
    data: Array<membertypes>;
    meta: {
      totalRowCount: number;
    };
  };
export function members(){
    const [fetchedUsers, setFetchedUsers] = useState<membertypes[]>([]);
    const { data, isLoading, error } = useGetmembersQuery();
    
  
    // Handle loading state
    
 /*    // Update fetched users when data changes
    useEffect(() => {
     
      setFetchedUsers(data?.data ?? []);
    }, [data, isLoading]);
    if(fetchedUsers){
    return fetchedUsers
    } */
}