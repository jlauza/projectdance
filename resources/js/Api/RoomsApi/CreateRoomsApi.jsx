import axios from 'axios';
import useSWR, { mutate } from 'swr';
 
const fetcher = url => axios.post(url).then(res => res.data);
 
function CreatetRoomsApi() {
  
  const AddRoom = async () => {
    // variable for new data
    // mutate api    
    try {
      await axios.post('/api/rooms/add', {
        // add new data param
      });

      mutate('/api/rooms');
    } catch (error) {
      console.error('Error in adding new room: ', error);

      // rollback
      mutate('/api/rooms');
    }
  }

  return AddRoom;

}

export default CreatetRoomsApi;