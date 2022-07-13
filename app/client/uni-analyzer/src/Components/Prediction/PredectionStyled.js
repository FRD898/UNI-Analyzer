import { styled } from '@mui/material/styles';
import {Paper,Box} from "@mui/material/";
const CustomPredictionPageContainer = styled(Paper)(({theme})=>({
    width: "100%",
    height: "auto",
    padding: "40px 40px",
}))
const CustomPredictionFormContainer = styled(Box)(({theme})=>({
    border: `solid 6px ${theme.palette.secondary.main}`,
    background: "white",
    height: "400px",
    borderRadius: "24px",
    padding: "40px",
}))

const CustomPredictionOptionContainer = styled(Box)(({theme})=>({

}));
const CustomPredictionInputContainer = styled(Paper)(({theme})=>({
    border: `solid 6px ${theme.palette.primary.main}`,
    background: "white",
    height: "80%",
    borderRadius: "4px",
}));

export {CustomPredictionPageContainer,
    CustomPredictionFormContainer,
    CustomPredictionOptionContainer,
    CustomPredictionInputContainer}