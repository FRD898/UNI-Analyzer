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
import { List, ListItemText, Grid } from "@mui/material";

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



export default function TablePrediction(props){
    const rows = []
    for(const student of props.students){
        var r = {...student}
        for(const [i,answer] of student.answers.entries()){
            r[`q${i+1}`]=answer
        }
        rows.push(r)
    }
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('prediction');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

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
                <EnhancedTableToolbar numSelected={selected.length} room={props.room} />
                <Grid container>
                    <Grid item xs={6}>
                        <List dense={true}>
                            <ListItemText
                                primary="1:Residencia"
                                secondary="(1:Lima 0:Otro departamento)"
                            />
                            <ListItemText
                                    primary="3:PC1"
                                    secondary="(1:Se presentó 0:No se presentó)"
                            />
                            <ListItemText
                                    primary="5:Promedio de PCs antes del parcial"
                            />
                        </List>
                    </Grid>
                    <Grid item xs={6}>
                        <List dense={true}>
                                <ListItemText
                                    primary="2:Porcentaje de Faltas"
                                />
                                 <ListItemText
                                primary="4:Tareas"
                                secondary="(1:Presentó 0:No presentó)"
                                />
                                <ListItemText
                                    primary="6:Nota del parcial"
                                />
                            </List>
                    </Grid>
                </Grid>

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
                                style={{ maxWidth: 50 }}
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
                                <TableCell align="right">{row.code}</TableCell>
                                <TableCell id="test" align="right">{row.answers[0]==0?"No":"Sí"}</TableCell>
                                <TableCell align="right">{row.answers[1]}</TableCell>
                                <TableCell align="right">{row.answers[2]==0?"No":"Sí"}</TableCell>
                                <TableCell align="right">{row.answers[3]==0?"No":"Sí"}</TableCell>
                                <TableCell align="right">{row.answers[4]}</TableCell>
                                <TableCell align="right">{row.answers[5]}</TableCell>
                                <TableCell align="right">{row.predictor}</TableCell>
                                <TableCell align="right">{row.prediction==0?"No":"Sí"}</TableCell>
                                <TableCell align="right">{row.mark_prediction}</TableCell>
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