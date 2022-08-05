import { styled } from '@mui/material/styles';
import {Paper,Box,Grid} from "@mui/material/";
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
    width: "auto",
    height: "200px"
}));

const CustomChartContainer = styled('Grid')(({theme})=>({
    backgroundColor: 'white',
    border: `6px solid ${theme.palette.secondary.main}`,
    margin:"20px 60px",
    padding: "20px 40px",
    borderRadius: "12px",
    color: theme.palette.primary.dark,
}));
export {CustomCardsContainer,CustomAnalysisPageContainer,
    CustomChartContainer,CustomImageAnalysis}