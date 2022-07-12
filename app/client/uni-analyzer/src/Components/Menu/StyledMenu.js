import { styled } from '@mui/material/styles';
import {Box,
        List,
        ListItem} from "@mui/material/";
const CustomMenuContainer = styled(Box)(({theme})=>({
    width:"300px",
    height:"800px",
    borderRight: `4px solid ${theme.palette.secondary.main}`,
    background: theme.palette.primary.main,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
}));

const CustomListMenu = styled(List)(({theme})=>({
    color: theme.palette.secondary.main,
    fontSize: theme.palette.text.sm,
}));

const CustomListItem = styled(ListItem)(({theme})=>({
    "&:hover":{
        color: theme.palette.text.secondary,
        cursor: "pointer",
    }
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

export {CustomMenuContainer, CustomListMenu, CustomListItem, CustomUserInfo,CustomUserName} 