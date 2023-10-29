import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Checkbox } from '@mui/material';
import { Button } from '@mui/base';

export default function RoomsList() {
  const [rooms, setRooms] = useState();

  useEffect(() => {
    axios.get('/api/rooms').then(
      response => {
        setRooms(response.data)
      }
    ).catch(error => {
      console.error('There was an error fetching rooms: ', error);
    });
  }, []);

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
          {rooms?.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              <Checkbox />
              </TableCell>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.description}
              </TableCell>              
              <TableCell component="th" scope="row">
                <Button>Edit</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}