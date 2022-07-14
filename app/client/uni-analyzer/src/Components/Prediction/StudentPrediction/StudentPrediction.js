import { ThemeProvider } from '@mui/material/styles';
import { CustomAttributesContainer, CustomCheckboxInputContainer, CustomFormPrediction, CustomModelsContainer, CustomStandardLabel, CustomStudentDataContainer } from "./StudentPredictionStyle";
import { theme } from "../../theme";
import { CustomButton, CustomInput } from '../../CustomStyles/CustomComponents';
import { Checkbox, Grid } from '@mui/material';

const Questions = [{
        question: "¿El alumno participa en clase?",
        type: "yes/no",
    },
    {
        question: "¿Presentó las tareas?",
        type: "yes/no",
    },
    {
        question: "Nota de la primera práctica",
        type: "number",
    },
    {
        question: "Nota de la segunda pŕactica",
        type: "number",
    },
    {
        question: "Notal del examen parcial",
        type: "number",
    },
]

const renderQuestion = (question) => {
    return(
        <Grid container>
            <Grid item xs={8}>
                <CustomStandardLabel>{question.question}</CustomStandardLabel>
            </Grid>
            <Grid item xs={4}>
                {question.type==="number"?<Checkbox></Checkbox>:<Checkbox></Checkbox>}
            </Grid>
        </Grid>
    )
}

export default function StudentPrediction(){
    const handlePredictionStudent = (e)=>{
        console.log('sssssssssssssssssssss');
        e.preventDefault()
        window.alert("submit")
    }
    return(
        <ThemeProvider theme={theme}>
            <CustomFormPrediction onSubmit={handlePredictionStudent}>
                <CustomStudentDataContainer container spacing={2}>
                    <Grid item>
                        <CustomStandardLabel>Nombre</CustomStandardLabel>
                    </Grid>
                    <Grid item>
                        <CustomInput></CustomInput>
                    </Grid>
                </CustomStudentDataContainer>
                <CustomStudentDataContainer container spacing={2}>
                    <Grid item>
                        <CustomStandardLabel>Código</CustomStandardLabel>
                    </Grid>
                    <Grid item>
                        <CustomInput></CustomInput>
                    </Grid>
                </CustomStudentDataContainer>
                <CustomCheckboxInputContainer container direction="row">
                    <CustomAttributesContainer item xs={6}>
                        {Questions.map(q => renderQuestion(q))}
                    </CustomAttributesContainer>
                    <CustomModelsContainer item xs={6}>
                        <Grid><CustomStandardLabel>
                            Modelo
                        </CustomStandardLabel></Grid>
                        <Grid container direction="row">
                            <Grid item xs={6}>
                                <CustomStandardLabel>SVM</CustomStandardLabel>
                                <Checkbox></Checkbox>
                            </Grid>
                            <Grid item xs={6}>
                                <CustomStandardLabel>Random Forest</CustomStandardLabel>
                                <Checkbox></Checkbox>
                            </Grid>
                        </Grid>
                    </CustomModelsContainer>
                </CustomCheckboxInputContainer>
                <CustomButton variant='contained' onClick={handlePredictionStudent}>Predecir</CustomButton>
            </CustomFormPrediction>
        </ThemeProvider>
    )
}