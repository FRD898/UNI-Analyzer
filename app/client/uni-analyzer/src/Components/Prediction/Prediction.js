import { ThemeProvider } from "@emotion/react";
import { Button } from "@mui/material";
import { CustomPageContainer, CustomTitle } from "../CustomStyles/CustomComponents";
import { theme } from "../theme";
import { CustomPredictionFormContainer, CustomPredictionInputContainer, CustomPredictionOptionContainer, CustomPredictionPageContainer } from "./PredectionStyled";

export default function Prediction(){
    return(
        <ThemeProvider theme={theme}>
            <CustomPageContainer>
                <CustomPredictionPageContainer>
                    <CustomTitle>Predecir</CustomTitle>
                    <CustomPredictionFormContainer>
                        <CustomPredictionOptionContainer>
                            <Button>Alumno</Button>
                            <Button>Alumnos</Button>
                        </CustomPredictionOptionContainer>
                        <CustomPredictionInputContainer>

                        </CustomPredictionInputContainer>
                    </CustomPredictionFormContainer>
                </CustomPredictionPageContainer>
            </CustomPageContainer>
        </ThemeProvider>
    )
}