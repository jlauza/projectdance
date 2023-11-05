import axios from 'axios';
import useSWR from 'swr';
 
const fetcher = url => axios.get(url).then(res => res.data);
 
function GetRoomsApi (user_id) {
  const { data, error } = useSWR(`api/rooms/${user_id}`, fetcher);
  
  return {
    data: data || [],
    error
  }
}

export default GetRoomsApi;