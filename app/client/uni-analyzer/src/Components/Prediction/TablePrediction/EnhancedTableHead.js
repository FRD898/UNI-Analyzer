import TableHead from '@mui/material/TableHead';
import TableSortLabel from '@mui/material/TableSortLabel';
import { visuallyHidden } from '@mui/utils';
import Box from '@mui/material/Box';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Checkbox from '@mui/material/Checkbox';


const headCells = [
    {
      id: 'name',
      numeric: false,
      disablePadding: true,
      label: 'Nombres',
    },
    {
      id: 'code',
      numeric: false,
      disablePadding: false,
      label: 'Código',
    },
    {
      id: 'residence',
      numeric: true,
      disablePadding: false,
      label: '1',
    },
    {
      id: 'absence',
      numeric: true,
      disablePadding: false,
      label: '2',
    },
    {
      id: 'pc1',
      numeric: false,
      disablePadding: false,
      label: '3',
    },
    {
      id: 'tasks',
      numeric: false,
      disablePadding: false,
      label: '4',
    },
    {
      id: 'meanPcs',
      numeric: true,
      disablePadding: false,
      label: '5',
    },
    {
      id: 'middle',
      numeric: true,
      disablePadding: false,
      label: '6',
    },
    {
      id: 'predictor',
      numeric: false,
      disablePadding: false,
      label: 'Modelo',
    },
    {
      id: 'prediction',
      numeric: true,
      disablePadding: false,
      label: 'Aprueba',
    },
    {
      id: 'finalMark',
      numeric: true,
      disablePadding: false,
      label: 'Nota final',
    },
  ];

export default function EnhancedTableHead(props) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
      props;
    const createSortHandler = (property) => (event) => {
      onRequestSort(event, property);
    };
  
    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              color="primary"
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{
                'aria-label': 'select all desserts',
              }}
            />
          </TableCell>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? 'right' : 'left'}
              padding={headCell.disablePadding ? 'none' : 'normal'}
              sortDirection={orderBy === headCell.id ? order : false}
              style={{ maxwidth: 50 }}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }
  