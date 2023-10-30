import axios from 'axios';
import useSWR from 'swr';
 
const fetcher = url => axios.get(url).then(res => res.data);
 
function GetRoomsApi () {
  const { data, error } = useSWR(`/api/rooms`, fetcher);
  
  return {
    data: data || [],
    error
  }
}

export default GetRoomsApi;