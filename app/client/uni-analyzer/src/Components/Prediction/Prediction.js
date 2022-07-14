import { ThemeProvider } from "@emotion/react";
import { Button } from "@mui/material";
import { CustomButton, CustomInput, CustomPageContainer, CustomTitle } from "../CustomStyles/CustomComponents";
import { theme } from "../theme";
import { CustomPredictionFormContainer, CustomPredictionInputContainer, CustomPredictionOptionContainer, CustomPredictionPageContainer, CustomSearchInputContainer } from "./PredectionStyled";
import SearchIcon from '@mui/icons-material/Search';
import TablePrediction from "./TablePrediction";
import { useState } from "react";

export default function Prediction(){
    const [classroom, setClassroom] = useState("CC01");
    const handleChange = (event)=>{
        console.log(event.target)
        setClassroom(event.target.value)
    }
    return(
        <ThemeProvider theme={theme}>
            <CustomPageContainer>
                <CustomPredictionPageContainer>
                    <CustomTitle>Predecir</CustomTitle>
                    <CustomPredictionFormContainer>
                        <CustomPredictionOptionContainer>
                            <CustomButton variant="contained">Alumno</CustomButton>
                            <CustomButton variant="contained">Salon</CustomButton>
                        </CustomPredictionOptionContainer>
                        <CustomPredictionInputContainer>
                            <CustomSearchInputContainer>
                                <CustomInput
                                     id="salon"
                                     type="text"
                                     value={classroom}
                                     onChange={(e)=>handleChange(e)}
                                />
                                <SearchIcon  sx={{ color: theme.palette.primary.main,
                                    fontSize: "30px",
                                    "&:hover": {cursor:'pointer',
                                    color: theme.palette.primary.dark},
                                    }}></SearchIcon>
                            </CustomSearchInputContainer>
                            <TablePrediction></TablePrediction>
                        </CustomPredictionInputContainer>
                    </CustomPredictionFormContainer>
                </CustomPredictionPageContainer>
            </CustomPageContainer>
        </ThemeProvider>
    )
}