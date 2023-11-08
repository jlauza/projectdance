import axios from 'axios';
import useSWR from 'swr';
 
axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:8081';
// axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const fetcher = url => axios.get(url).then(res => res.data);
 
function GetRoomsApi (user_id) {
  const { data, error } = useSWR(() => user_id ? `api/rooms/${user_id}` : null, fetcher);
  
  return {
    rooms: data,
    isLoading: !error && !data,
    isError: error
  }
}

export default GetRoomsApi;