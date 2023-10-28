import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Grid  } from '@mui/material';
import { useForm } from '@inertiajs/react';
import { redirect } from 'react-router-dom';


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
        post(route('rooms.store'));
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
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder='Name*' />
                        <span className="text-red-600">
                            {errors.name}
                        </span>                          
                    </div>
                    <div className="mb-4">
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
