import Menu from "../Menu/Menu";
import { Navigate, Outlet } from "react-router-dom";
import { CustomHomePageContainer } from "../CustomStyles/CustomComponents";
import {  Grid } from '@mui/material';
export default function HomeLayout(){
    return(
        <CustomHomePageContainer container>
            <Grid item xs={2}>
                <Menu></Menu>
            </Grid>
            <Grid item xs={10}>
                <Outlet></Outlet>
            </Grid>
        </CustomHomePageContainer>
    )
}