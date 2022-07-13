import {Button,
    Paper,
    Input,
    IconButton,
    InputLabel,
    InputAdornment,
    FormControl,
    FormGroup} from "@mui/material/";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

import pabellon from "../../Images/UNI-pabellon.jpg";

const CustomTitle = styled('h1')(({theme})=>({
    fontSize: theme.palette.text.xlg,
    fontWeight: "bold",
    color: "white"
}));
const CustomSubtitle = styled('h2')(({theme})=>({
    fontSize: theme.palette.text.lg,
    fontWeight: "bold",
    color: theme.palette.text.primary,
}));

const CustomContainer = styled(Paper)(({ theme }) => ({
    //main: theme.palette.primary.main,
    background: theme.palette.background.default,
    height: "auto",
    margin: "0",
    display: "flex",
    textAlign: "center",
    flexDirection: "column",
    alignItems: "center",
}));

const CustomFormContainer = styled(Paper)(({theme})=>({
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${pabellon})`,
    backgroundSize: "cover",
    width: "80%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: `solid 6px ${theme.palette.secondary.main}`,
    borderRadius: "24px",
    padding: "40px 0px",
}));

const CustomForm = styled(FormGroup)(({theme})=>({
    height: "auto",
    width: "350px",
    'margin': "10px",
    padding: "40px 10px",
    border: `solid 4px ${theme.palette.secondary.main}`,
    background: theme.palette.primary.main,
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
}))

const CustomLabel = styled(InputLabel)(({theme})=>({
    fontSize: theme.palette.text.sm,
    color: theme.palette.text.primary,
}));

const CustomInput = styled(Input)(({theme})=>({
    background: "white",
    color: "black",
    borderRadius: "6px",
    paddingLeft: "6px",
    margin:"12px",
    width: "280px",
    fontSize: theme.palette.text.sm,
}))

const CustomButton= styled(Button)(({theme})=>({
    background: "black",
    color: theme.palette.primary,
    borderRadius: "6px",
    margin:"12px",
    border: "solid 1px white",
    fontWeight: "bold",
    fontSize: theme.palette.text.sm,
}));
const CustomLogo = styled("img")(({theme})=>({
    width: "120px",
    height: "140px",
}));

const CustomLink = styled('a')(({theme})=>({
    textDecoration: "none",
    color: theme.palette.text.primary,
    fontSize: "14px",
    fontWeight: "bold",
    "&:hover":{
        color: theme.palette.text.secondary,
    }
}))

const CustomPageContainer = styled(Paper)(({theme})=>({
    display: "flex",
    width: "100%",
    height: "auto",
    textAlign: "center",
}));

const CustomCardContainer = styled(Paper)(({theme})=>({
    background: theme.palette.primary.main,
    width: "auto",
    height: "460px",
    borderRadius: "16px",
    border: `solid 4px ${theme.palette.secondary.main}`,
    padding: "30px",
    margin: "20px",
    color: theme.palette.secondary.main,
    "&:hover":{
        'cursor':"pointer",
        border: `solid 6px white`,
    }
}));
export {CustomButton, CustomContainer, CustomForm, CustomFormContainer, CustomInput, CustomLabel,
    CustomLink, CustomLogo, CustomSubtitle, CustomTitle, CustomPageContainer, CustomCardContainer,
}