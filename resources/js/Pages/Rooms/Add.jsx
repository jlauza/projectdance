import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Grid, TextField, FilledInput, FormControl  } from '@mui/material';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function RoomsAdd({ open, setOpen }) {
  const handleClose = () => {
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
                <form action="#" method="POST">
                    <div class="mb-4">
                        <input type="text" id="name" name="name" class="w-full p-2 border border-gray-300 rounded-md" placeholder='Name*' />
                    </div>
                    <div class="mb-4">
                        {/* <label for="description" class="block text-gray-700 font-semibold">Description</label> */}
                        <textarea placeholder='Description' id="description" name="description" class="w-full p-2 border border-gray-300 rounded-md"></textarea>
                    </div>
                    <div class="flex justify-end">
                        <button type="button" class="px-4 py-2 mr-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none" onClick={handleClose}>Cancel</button>
                        <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">Submit</button>
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
