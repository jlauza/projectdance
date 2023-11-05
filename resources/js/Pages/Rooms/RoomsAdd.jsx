import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Grid  } from '@mui/material';
import { useForm } from '@inertiajs/react';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function RoomsAdd({ open, setOpen }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    try {
        // add method
        setOpen(false);
    } catch (error) {
        console.log(error);
    }
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog
      fullWidth
        open={open || false}
        TransitionComponent={Transition}
        // keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Add new room"}</DialogTitle>
        <DialogContent>
            <Grid container spacing={1} sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                paddingTop: 3
            }}>
                <form onSubmit={handleSubmit} method='post'>
                    <div className="mb-4">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={''}
                        onChange={(e) => setData('name', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder='Name*'
                      />                       
                    </div>
                    <div className="mb-4">
                      <input
                        type="number"
                        id="capacity"
                        name="capacity"
                        // onChange={(e) => setData('capacity', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder='Capacity*'
                      />                       
                    </div>
                    <div className="mb-4">
                        <textarea
                            placeholder='Description'
                            value={''}
                            onChange={(e) => setData('description', e.target.value)}
                            id="description"
                            name="description"
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />                       
                    </div>
                    <div className="flex justify-end">
                        <button type="button" className="px-4 py-2 mr-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none" onClick={handleClose}>Cancel</button>
                        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">Add</button>
                    </div>
                </form>
            </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
}
