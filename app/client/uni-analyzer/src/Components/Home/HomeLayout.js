import Menu from "../Menu/Menu";
import { Navigate, Outlet } from "react-router-dom";
import { CustomPageContainer } from "../CustomStyles/CustomComponents";
export default function HomeLayout(){
    return(
        <CustomPageContainer>
            <Menu></Menu>
            <Outlet></Outlet>
        </CustomPageContainer>
    )
}