import { ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { CustomAttributesContainer, CustomCheckboxInputContainer,
    CustomFormPrediction, CustomModelsContainer,
    CustomStandardLabel, CustomStudentDataContainer,
    CustomInputNumber } from "./StudentPredictionStyle";
import { theme } from "../../theme";
import { CustomButton, CustomInput } from '../../CustomStyles/CustomComponents';
import { Checkbox, Grid } from '@mui/material';

const Questions = [{
        id: 0,
        question: "¿El alumno reside en Lima?",
        type: "yes/no",
    },
    {
        id: 1,
        question: "Porcentaje de faltas del alumno",
        type: "percentage",
    },
    {
        id: 2,
        question: "¿Rindió la primera práctica?",
        type: "yes/no",
    },
    {
        id: 3,
        question: "¿Presentó todas las tareas?",
        type: "yes/no",
    },
    {
        id: 4,
        question: "Promedio de prácticas antes del parcial",
        type: "mark",
    },
    {
        id: 5,
        question: "Nota del exámen parcial de Introducción a la C.",
        type: "mark",
    },
]

export default function StudentPrediction(){

    const [student, setStudent] = useState({
        'name':"",
        'code':"",
        'answers':[0,0,0,0,0,0],
        'predictor':'',
        'class':'',
    })

    const handlePredictionStudent = (e)=>{
        e.preventDefault()
        window.alert("submit")
        console.log(student);
    }
    const handleChange = (e,type)=>{
        type==='name'?
        setStudent({...student, 'name':e.target.value}):
        type==='code'?
        setStudent({...student, 'code':e.target.value}):
        setStudent({...student, 'class':e.target.value})
    }

    const renderQuestion = (question) => {
        const minMark = 0;
        const maxMark = 20;
        const minPercentage = 0;
        const maxPercentage = 100;
        const handleMarks  = (e,id)=>{
            console.log("Handle Marks");
            var value = parseInt(e.target.value, 10);
            if (value > maxMark) value = maxMark;
            if (value < minMark) value = minMark;
            const newStudent = {...student};
            newStudent.answers[id]=value;
            setStudent(newStudent)
        }
        const handlePercentages = (e,id)=>{
            console.log("Handle Percentages");
            var value = parseInt(e.target.value, 10);
            if (value > maxPercentage) value = maxPercentage;
            if (value < minPercentage) value = minPercentage;
            const newStudent = {...student};
            newStudent.answers[id]=value;
            setStudent(newStudent)
        }
        const handleYesNo = (e,id)=>{
            const newStudent = {...student};
            e.target.checked?
            newStudent.answers[id]=1:
            newStudent.answers[id]=0;
            setStudent(newStudent)
        }

        return(
            <Grid key={question.id} container>
                <Grid item xs={8}>
                    <CustomStandardLabel>{question.question}</CustomStandardLabel>
                </Grid>
                <Grid item xs={4}>
                    {question.type==="mark" || question.type==="percentage"?
                    <CustomInputNumber
                    className={question.id}
                    type="number"
                    InputProps={{ inputProps: question.type==="mark" ? { min: minMark, max: maxMark } : { min: minPercentage, max: maxPercentage }}}
                    onChange={(e)=>question.type==="mark" ? handleMarks(e,question.id): handlePercentages(e,question.id)}
                    />:<Checkbox
                    onChange={(e)=>handleYesNo(e,question.id)}
                    />}
                </Grid>
            </Grid>
        )
    }

    return(
        <ThemeProvider theme={theme}>
            <CustomFormPrediction onSubmit={handlePredictionStudent}>
                <CustomStudentDataContainer container spacing={2}>
                    <Grid item>
                        <CustomStandardLabel >Nombre</CustomStandardLabel>
                    </Grid>
                    <Grid item>
                        <CustomInput className='name' value={student.name} onChange={(e)=>handleChange(e,'name')}></CustomInput>
                    </Grid>
                </CustomStudentDataContainer>
                <CustomStudentDataContainer container spacing={2}>
                    <Grid item>
                        <CustomStandardLabel>Código</CustomStandardLabel>
                    </Grid>
                    <Grid item>
                        <CustomInput className='code' value={student.code} onChange={(e)=>handleChange(e,'code')}></CustomInput>
                    </Grid>
                </CustomStudentDataContainer>
                <CustomStudentDataContainer container spacing={2}>
                    <Grid item>
                        <CustomStandardLabel>Salón</CustomStandardLabel>
                    </Grid>
                    <Grid item>
                        <CustomInput className='class' value={student.class} onChange={(e)=>handleChange(e,'class')}></CustomInput>
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