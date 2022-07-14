import { styled } from '@mui/material/styles';
import {Paper,Box} from "@mui/material/";
const CustomCardsContainer = styled(Box)(({theme})=>({
    display: 'flex',
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
}));
const CustomAnalysisPageContainer = styled(Paper)(({theme})=>({
    width: "100%",
    height: "auto",
    padding: "0px 40px",
}));

const CustomImageAnalysis = styled('img')(({theme})=>({
    borderRadius: "18px",
}));

export {CustomCardsContainer,CustomAnalysisPageContainer, CustomImageAnalysis}