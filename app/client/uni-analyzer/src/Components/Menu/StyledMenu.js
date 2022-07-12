import { styled } from '@mui/material/styles';
import {Box,
        List,
        ListItem} from "@mui/material/";
import { NavLink } from "react-router-dom";
const CustomMenuContainer = styled(Box)(({theme})=>({
    width:"300px",
    height:"100vh",
    borderRight: `4px solid ${theme.palette.secondary.main}`,
    background: theme.palette.primary.main,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
}));

const CustomListNav = styled('nav')(({theme})=>({
    display: "flex",
    flexDirection: "column",
    
}));

const CustomNavLink = styled(NavLink)(({theme})=>({
    textDecoration: "none",
    fontSize: theme.palette.text.md,
    color: theme.palette.secondary.main,
    "&:hover":{
        color: theme.palette.text.secondary,
        cursor: "pointer",
    },
    margin:"4px",
}));

const CustomUserInfo = styled(Box)(({theme})=>({
    color: theme.palette.text.primary,
    display: "flex",
    flexDirection: "column",
}));

const CustomUserName = styled(Box)(({theme})=>({
    display:"block",
    fontSize: theme.palette.text.sm,
    color: theme.palette.secondary.main,
    "&:hover": {
        color: theme.palette.secondary.dark,
        cursor: "pointer",
    }
}));

export {CustomMenuContainer, CustomListNav, CustomNavLink, CustomUserInfo,CustomUserName} 