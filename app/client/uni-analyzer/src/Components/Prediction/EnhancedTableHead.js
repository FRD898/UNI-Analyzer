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
      id: 'pc1',
      numeric: true,
      disablePadding: false,
      label: 'PC1',
    },
    {
      id: 'pc2',
      numeric: true,
      disablePadding: false,
      label: 'PC2',
    },
    {
      id: 'participation',
      numeric: true,
      disablePadding: false,
      label: 'Participación',
    },
    {
      id: 'tasks',
      numeric: true,
      disablePadding: false,
      label: 'Tareas',
    },
    {
      id: 'middle',
      numeric: true,
      disablePadding: false,
      label: 'Parcial',
    },
    {
      id: 'prediction',
      numeric: true,
      disablePadding: false,
      label: 'Resultado',
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
  