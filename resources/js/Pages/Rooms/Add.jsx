import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Grid  } from '@mui/material';
import { useForm } from '@inertiajs/react';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function RoomsAdd({ open, setOpen }) {

  const {data, setData, errors, post} = useForm({
    name: "",
    description: ""
  });

  const handleSubmit = (e) => {
    try {
        e.preventDefault();
        // method(route('controller'))
        post(route('rooms.store'));
    } catch (error) {
        console.log(error);
    }
  }

  const handleClose = (e) => {
    setOpen(false);
  };

  return (
    <>
      <Dialog
      fullWidth
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Add new room"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Grid container spacing={1} sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                paddingTop: 3
            }}>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                        type="text"
                        id="name"
                        name="name"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder='Name*' />
                        <span className="text-red-600">
                            {errors.name}
                        </span>                          
                    </div>
                    <div class="mb-4">
                        <textarea
                            placeholder='Description'
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)}
                            id="description"
                            name="description"
                            className="w-full p-2 border border-gray-300 rounded-md" />
                        <span className="text-red-600">
                            {errors.description}
                        </span>                            
                    </div>
                    <div class="flex justify-end">
                        <button type="button" className="px-4 py-2 mr-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none" onClick={handleClose}>Cancel</button>
                        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">Submit</button>
                    </div>
                </form>
            </Grid>
          </DialogContentText>
        </DialogContent>
        {/* <DialogActions>
          <Button variant='text' size='small' onClick={handleClose}>Cancel</Button>
          <Button variant='contained' size='small' type='submit'>Add</Button>
        </DialogActions> */}
      </Dialog>
    </>
  );
}
