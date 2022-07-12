import {React,useState} from "react";
import {Button,
        Paper,
        Input,
        IconButton,
        InputLabel,
        InputAdornment,
        FormControl,
        FormGroup} from "@mui/material/";
import { theme } from "../theme";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Container } from "@mui/system";

import logoUni from "../../Images/logoUNI.png";

import {CustomButton,
        CustomContainer,
        CustomForm,
        CustomFormContainer,
        CustomInput,
        CustomLabel,
        CustomLink,
        CustomLogo,
        CustomTitle,
        CustomSubtitle} from "../CustomStyles/CustomComponents";


export default function Login(){
    const [values, setValues] = useState({
        email:"",
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });
    const [user,setUser] = useState({
        email:"test@gmail.com",
        password:"",
    })
    const handleChange =  (e) => {
        e.preventDefault()
        e.target.id === 'email'?setUser({...user, email:e.target.value}):setUser({...user, password:e.target.value});
    };

    const handleClickShowPassword = () => {
    setValues({
        ...values,
        showPassword: !values.showPassword,
    });
    };

    const handleMouseDownPassword = (event) => {
    event.preventDefault();
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
    }
    
    return(<ThemeProvider theme={theme}>
    <CustomContainer>
        <CustomTitle>ANALYZER</CustomTitle>
        <CustomFormContainer>
            <CustomForm onSubmit={handleSubmit}>
                <CustomLogo alt="logo Universidad Nacional de Ingenieria" src={logoUni} />
                <CustomSubtitle>
                    Log in
                </CustomSubtitle>
                <CustomLabel htmlFor="email">Email</CustomLabel>
                <CustomInput
                    id="email"
                    type="email"
                    value={user.email}
                    onChange={(e)=>handleChange(e)}
                />
                <CustomLabel htmlFor="password">Password</CustomLabel>
                <CustomInput
                    id="password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={user.password}
                    onChange={handleChange}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        >
                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                    }
                />
                <CustomLink href="/">Forgot password?</CustomLink>
                <CustomButton variant="contained">Continue</CustomButton>
            </CustomForm>
        </CustomFormContainer>
    </CustomContainer>
    </ThemeProvider>)
}