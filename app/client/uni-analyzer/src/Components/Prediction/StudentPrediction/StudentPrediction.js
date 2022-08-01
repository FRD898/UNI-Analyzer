import { ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { CustomAttributesContainer, CustomCheckboxInputContainer,
    CustomFormPrediction, CustomModelsContainer,
    CustomStandardLabel, CustomStudentDataContainer,
    CustomInputNumber } from "./StudentPredictionStyle";
import { theme } from "../../theme";
import { CustomButton, CustomInput } from '../../CustomStyles/CustomComponents';
import { Checkbox, Grid } from '@mui/material';
import { predictStudentPerformance } from '../../../Services/StudentService';

const Questions = [{
        id: 0,
        featureNumber: 6,
        question: "¿El alumno reside en Lima?",
        type: "yes/no",
    },
    {
        id: 1,
        featureNumber: 23,
        question: "Porcentaje de faltas del alumno",
        type: "percentage",
    },
    {
        id: 2,
        featureNumber: 24,
        question: "¿Rindió la primera práctica?",
        type: "yes/no",
    },
    {
        id: 3,
        featureNumber: 28,
        question: "¿Presentó todas las tareas?",
        type: "yes/no",
    },
    {
        id: 4,
        featureNumber: 37,
        question: "Promedio de prácticas antes del parcial",
        type: "mark",
    },
    {
        id: 5,
        featureNumber: 38,
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
    const [predictor, setPredictor] = useState("")

    const isEmpty = (par)=>{return par===""? true: false}
    const validateForm = ()=>{
        if(isEmpty(student.name) || isEmpty(student.class) || isEmpty(student.code)){
            window.alert("Debe completar todos los campos");
            return false;
        }
        if(isEmpty(predictor)){
            window.alert("Debe seleccionar un modelo");
            return false;
        }
        if(!/\b[\d]{8}\w$/g.test(student.code)){
            window.alert("Debe ingresar un código valido");
            return false;
        }
        return true;
    }
    const handlePredictionStudent = (e)=>{
        e.preventDefault();
        if(validateForm()){
            predictStudentPerformance(student).then(
                (res)=>{
                    res===null?
                    window.alert("Se presentó un error"):
                    window.alert(res)
                }
            )
            
        }
    }
    const handleChange = (e,type)=>{
        type==='name'?
        setStudent({...student, 'name':e.target.value}):
        type==='code'?
        setStudent({...student, 'code':e.target.value.replace(" ",'')}):
        setStudent({...student, 'class':e.target.value})
    }

    const handleModelSelection = (e,model)=>{
        if(e.target.checked && model=='svc'){
            setStudent({... student, 'predictor':'svc'})
            setPredictor('svc')
        }
        else if(e.target.checked && model=='rfc'){
            setStudent({... student, 'predictor':'rfc'})
            setPredictor('rfc')
        }else{
            setStudent({... student, 'predictor':''})
            setPredictor('')
        }
    }

    const renderQuestion = (question) => {
        const minMark = 0;
        const maxMark = 20;
        const minPercentage = 0;
        const maxPercentage = 100;
        const handleMarks  = (e,id)=>{
            var value = parseInt(e.target.value, 10);
            if (value > maxMark) value = maxMark;
            if (value < minMark) value = minMark;
            const newStudent = {...student};
            newStudent.answers[id]=value;
            setStudent(newStudent)
        }
        const handlePercentages = (e,id)=>{
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
                    value={student.answers[question.id]}
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
                                <Checkbox
                                onChange={(e)=>handleModelSelection(e,'svc')}
                                checked = {predictor==='svc'?true:false}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <CustomStandardLabel>Random Forest</CustomStandardLabel>
                                <Checkbox
                                onChange={(e)=>handleModelSelection(e,'rfc')}
                                checked = {predictor==='rfc'?true:false}
                                />
                            </Grid>
                        </Grid>
                    </CustomModelsContainer>
                </CustomCheckboxInputContainer>
                <CustomButton variant='contained' onClick={handlePredictionStudent}>Predecir</CustomButton>
            </CustomFormPrediction>
        </ThemeProvider>
    )
}