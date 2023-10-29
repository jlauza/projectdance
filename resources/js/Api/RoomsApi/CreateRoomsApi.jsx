import axios from 'axios';
import useSWR from 'swr';
 
const fetcher = url => axios.post(url).then(res => res.data);
 
function CreatetRoomsApi() {
  
  try {
    const { data } = useSWR('/api/rooms/add', fetcher);
    
    return data;

  } catch (error) {
    console.error(error);
  }
  
  return {
    data,
    error
  }
}

export default CreatetRoomsApi;