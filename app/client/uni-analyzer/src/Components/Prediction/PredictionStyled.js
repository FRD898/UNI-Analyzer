import { styled } from '@mui/material/styles';
import {Paper,Box} from "@mui/material/";
const CustomPredictionPageContainer = styled(Paper)(({theme})=>({
    width: "100%",
    height: "auto",
    padding: "0px 60px",
}))
const CustomPredictionFormContainer = styled(Box)(({theme})=>({
    border: `solid 6px ${theme.palette.secondary.main}`,
    background: "white",
    height: "auto",
    borderRadius: "24px",
    padding: "40px",
}))

const CustomPredictionOptionContainer = styled(Box)(({theme})=>({
    display: "flex",
    alignItems: "flex-start",
}));
const CustomPredictionInputContainer = styled(Paper)(({theme})=>({
    border: `solid 6px ${theme.palette.primary.main}`,
    background: "white",
    height: "100%",
    borderRadius: "4px",
    padding: "20px 40px",
}));

const CustomSearchInputContainer = styled(Box)(({theme})=>({
}));

const CustomTableContainer = styled(Paper)(({theme})=>({
    width: "100%",
    border: `solid 4px ${theme.palette.primary.light}`,
    padding: "0px",
    height: "auto",

}));

export {CustomPredictionPageContainer,
    CustomPredictionFormContainer,
    CustomPredictionOptionContainer,
    CustomPredictionInputContainer,
    CustomSearchInputContainer,
    CustomTableContainer}