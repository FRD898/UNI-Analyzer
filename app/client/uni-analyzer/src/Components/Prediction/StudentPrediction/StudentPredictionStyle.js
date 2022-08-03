import { Box, FormGroup, Grid, TextField, Typography } from '@mui/material';
import {styled } from '@mui/material/styles';
const CustomFormPrediction = styled(FormGroup)(({theme})=>({
    background: theme.palette.background.paper,
    padding: "20px 40px",
    display: "flex",
    alignItems: "center",
}));

const CustomGridContainer = styled(Grid)(({theme})=>({
    paddingTop:"0",
    alignItems:"center",
}))

const CustomStandardLabel = styled(Typography)(({theme}) =>({

}));

const CustomInputNumber = styled(TextField)(({theme})=>({
    marginBottom:"4px",
    marginTop: "0px",
}));

export {CustomFormPrediction,CustomStandardLabel, CustomInputNumber, CustomGridContainer}