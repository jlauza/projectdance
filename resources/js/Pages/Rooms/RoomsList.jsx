import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Checkbox } from '@mui/material';
import GetRoomsApi from '@/Api/RoomsApi/GetRoomsApi';

export default function RoomsList() {
  const { data } = GetRoomsApi();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
          <TableCell>
              <Checkbox />
          </TableCell>
            <TableCell align='left'>Room name</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row, index) => (
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
              <TableCell scope="row" align='right'>
                <Button variant='contained' size='small' color='error'>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}