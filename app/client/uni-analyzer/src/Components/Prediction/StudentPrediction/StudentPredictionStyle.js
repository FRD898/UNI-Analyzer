import { Box, FormGroup, Grid, Typography } from '@mui/material';
import {styled } from '@mui/material/styles';
const CustomFormPrediction = styled(FormGroup)(({theme})=>({
    background: theme.palette.background.paper,
    padding: "10px",
    display: "flex",
    alignItems: "center",
}));

const CustomStudentDataContainer = styled(Grid)(({theme})=>({

}));

const CustomCheckboxInputContainer = styled(Grid)(({theme})=>({

}));

const CustomAttributesContainer = styled(Grid)(({theme})=>({

}));

const CustomModelsContainer = styled(Grid)(({theme})=>({

}));

const CustomStandardLabel = styled(Typography)(({theme}) =>({

}));

export {CustomFormPrediction,CustomStudentDataContainer,
CustomCheckboxInputContainer, CustomAttributesContainer,
CustomModelsContainer, CustomStandardLabel as CustomStandardLabel}