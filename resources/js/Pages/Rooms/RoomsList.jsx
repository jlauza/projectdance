import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Checkbox, Typography } from '@mui/material';
import GetRoomsApi from '@/Api/RoomsApi/GetRoomsApi';

export default function RoomsList({ user }) {
  const user_id = user.id
  const { data } = GetRoomsApi(user_id);
  console.log(data);
  console.log(user.id);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
          <TableCell width='12px'>
              <Checkbox />
          </TableCell>
            <TableCell align='left'>Room name</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="left">Capacity</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            !data ? 
            data?.map((row, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell scope="row">
                <Checkbox />
                </TableCell>
                <TableCell scope="row">
                  {row.name}
                </TableCell>
                <TableCell scope="row">
                  {row.description}
                </TableCell>   
                <TableCell scope="row">
                  {row.capacity}
                </TableCell>                           
                <TableCell scope="row" align='right'>
                  <Button variant='contained' size='small' color='error'>Delete</Button>
                </TableCell>
              </TableRow>
            ))            
            :
            <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
              <TableCell colSpan={5} scope="row" align='center'>
                <Typography variant='p'>No record found.</Typography>
              </TableCell>                  
              </TableRow>          
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}