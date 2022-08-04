import { TextField } from '@mui/material';
import { green } from '@mui/material/colors';
import {styled } from '@mui/material/styles';
const CustomInputSearch = styled(TextField)(({theme})=>({
    background: theme.palette.secondary.main,
    fontSize: theme.palette.text.sm,
}));

export {CustomInputSearch}