import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Button, Grid } from '@mui/material';
import { useState } from 'react';
import RoomsAdd from './RoomsAdd';
import RoomsList from './RoomsList';

export default function RoomsIndex({ auth }) {

    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Rooms</h2>}
        >
            <Head title="Rooms" />

            <div className="py-5">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="bg-white shadow-md rounded-lg overflow-hidden">
                            <div className="flex justify-between items-center px-6 py-4">
                                {/* CUSTOM TEMPLATE STARTS HERE */}

                                <RoomsAdd open={open} setOpen={setOpen} />                                
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <Button variant='contained' onClick={handleClickOpen}>
                                            Add new room
                                        </Button>                                        
                                    </Grid>
                                    <Grid item xs={12}>
                                        <RoomsList />
                                    </Grid>
                                </Grid>

                                {/* CUSTOM TEMPLATE ENDS HERE */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}


