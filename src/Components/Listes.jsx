import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { rows } from '../data/db';
import { Delete } from '@material-ui/icons';

const columns = [
  { id: 'nom', label: 'Nom', minWidth: 170 },
  { id: 'prenom', label: 'Prenom', minWidth: 130 },
  {
    id: 'naissance',
    label: 'Date et lieu de naissance',
    minWidth: 190,
    align: 'right'
  },
  {
    id: 'sexe',
    label: 'Sexe',
    minWidth: 70,
    align: 'right',
  },
  {
    id: 'profession',
    label: 'Profession',
    minWidth: 90,
    align: 'right',
  },
];



export default function Listes() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 500 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead >
            <TableRow>
              <TableCell>
                Action
              </TableCell>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row,id) => {
                return (
                 <>
                  <TableRow hover role="checkbox" tabIndex={-1} key={id}>
                    <TableCell>
                      <RemoveRedEyeIcon style={{cursor:'pointer'}}/>
                      <DeleteIcon  style={{cursor:'pointer'}}/>
                      <EditIcon  style={{cursor:'pointer'}}/>
                    </TableCell>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow></>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}