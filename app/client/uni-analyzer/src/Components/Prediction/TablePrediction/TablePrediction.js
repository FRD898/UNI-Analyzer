import { ThemeProvider } from "@emotion/react"
import { theme } from "../../theme"
import * as React from 'react';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import { CustomTableContainer } from "../PredictionStyled";
import EnhancedTableHead from "./EnhancedTableHead";
import EnhancedTableToolbar from "./EnhancedTableToolbar";

function createData(name, pc1, pc2, participation, tasks, middle, prediction) {
    return {
      name,
      pc1,
      pc2,
      participation,
      tasks,
      middle,
      prediction
    };
  }
  
  const rows = [
    createData('Cupcake', 305, 3.7, 67, 4, 61, 14),
    createData('Donut', 452, 25.0, 51, 4.9, 62, 14),
    createData('Eclair', 262, 16.0, 24, 6.0, 67, 4),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 67, 4),
    createData('Gingerbread', 356, 16.0, 49, 3.9, 67, 4),
    createData('Honeycomb', 408, 3.2, 87, 6.5, 67, 4),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 67, 4),
    createData('Jelly Bean', 375, 0.0, 94, 0.0, 67, 4),
    createData('KitKat', 518, 26.0, 65, 7.0, 67, 4),
    createData('Lollipop', 392, 0.2, 98, 0.0, 67, 4),
    createData('Marshmallow', 318, 0, 81, 2.0, 67, 4),
    createData('Nougat', 360, 19.0, 9, 37.0, 67, 4),
    createData('Oreo', 437, 18.0, 63, 4.0, 67, 4),
  ];
  
  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  
  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }
  
  
  
  EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
  };
  

  EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
  };



export default function TablePrediction(){
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('prediction');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [classroom, setClassroom] = React.useState("CC01");

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
        const newSelecteds = rows.map((n) => n.name);
        setSelected(newSelecteds);
        return;
        }
        setSelected([]);
    };

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
            selected.slice(0, selectedIndex),
            selected.slice(selectedIndex + 1),
        );
        }

        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const isSelected = (name) => selected.indexOf(name) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    return(
        <ThemeProvider theme={theme}>
            <CustomTableContainer>
                <EnhancedTableToolbar numSelected={selected.length} />
                <TableContainer>
                    <Table
                    sx={{ minWidth: 750 }}
                    aria-labelledby="tableTitle"
                    >
                        <EnhancedTableHead
                        numSelected={selected.length}
                        order={order}
                        orderBy={orderBy}
                        onSelectAllClick={handleSelectAllClick}
                        onRequestSort={handleRequestSort}
                        rowCount={rows.length}
                        />
                        <TableBody>
                        {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                            rows.slice().sort(getComparator(order, orderBy)) */}
                        {rows.slice().sort(getComparator(order, orderBy))
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => {
                            const isItemSelected = isSelected(row.name);
                            const labelId = `enhanced-table-checkbox-${index}`;

                            return (
                                <TableRow
                                hover
                                onClick={(event) => handleClick(event, row.name)}
                                role="checkbox"
                                aria-checked={isItemSelected}
                                tabIndex={-1}
                                key={row.name}
                                selected={isItemSelected}
                                >
                                <TableCell padding="checkbox">
                                    <Checkbox
                                    color="primary"
                                    checked={isItemSelected}
                                    inputProps={{
                                        'aria-labelledby': labelId,
                                    }}
                                    />
                                </TableCell>
                                <TableCell
                                    component="th"
                                    id={labelId}
                                    scope="row"
                                    padding="none"
                                >
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.pc1}</TableCell>
                                <TableCell align="right">{row.pc2}</TableCell>
                                <TableCell align="right">{row.participation}</TableCell>
                                <TableCell align="right">{row.tasks}</TableCell>
                                <TableCell align="right">{row.middle}</TableCell>
                                <TableCell align="right">{row.prediction}</TableCell>
                                </TableRow>
                            );
                            })}
                        {emptyRows > 0 && (
                            <TableRow>
                             <TableCell colSpan={6} />
                            </TableRow>
                        )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </CustomTableContainer>
        </ThemeProvider>
    )
}