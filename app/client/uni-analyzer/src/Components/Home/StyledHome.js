import { styled } from '@mui/material/styles';
import {Box, Paper,
    } from "@mui/material/";
import pabellon from "../../Images/UNI-pabellon.jpg";

const CustomHomeContainer = styled(Box)(({theme})=>({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: "100%",
    height: "auto",
}));

const CustomMainImage = styled(Paper)(({theme})=>({
    backgroundImage: `url(${pabellon})`,
    backgroundSize: "cover",
    width: "80%",
    height: "500px",
    border: "solid 4px white",
    borderRadius: "24px",
}))

export {CustomHomeContainer, CustomMainImage}