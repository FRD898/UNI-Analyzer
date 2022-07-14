import { ThemeProvider } from "@emotion/react";
import { CustomButton, CustomPageContainer, CustomTitle } from "../CustomStyles/CustomComponents";
import { theme } from "../theme";
import { CustomPredictionFormContainer, 
    CustomPredictionInputContainer, 
    CustomPredictionOptionContainer, 
    CustomPredictionPageContainer} from "./PredictionStyled";
import { useState } from "react";
import ClassPrediction from "./ClassPrediction/ClassPrediction";
import StudentPrediction from "./StudentPrediction/StudentPrediction";

export default function Prediction(){
    const[showStudent, setShowStudent] = useState(true);
    const handleClick = (e)=>{
        setShowStudent(e.target.innerText==="ALUMNO"?true:false);
    }
    return(
        <ThemeProvider theme={theme}>
            <CustomPageContainer>
                <CustomPredictionPageContainer>
                    <CustomTitle>Predecir</CustomTitle>
                    <CustomPredictionFormContainer>
                        <CustomPredictionOptionContainer>
                            <CustomButton variant="contained" onClick={handleClick}>Alumno</CustomButton>
                            <CustomButton variant="contained" onClick={handleClick}>Salon</CustomButton>
                        </CustomPredictionOptionContainer>
                        <CustomPredictionInputContainer>
                            {showStudent?<StudentPrediction/>:<ClassPrediction/>}
                        </CustomPredictionInputContainer>
                    </CustomPredictionFormContainer>
                </CustomPredictionPageContainer>
            </CustomPageContainer>
        </ThemeProvider>
    )
}