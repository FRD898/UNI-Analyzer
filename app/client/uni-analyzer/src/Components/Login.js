import {React,useState} from "react";
import {Button,
        Paper,
        Input,
        IconButton,
        InputLabel,
        InputAdornment,
        FormControl,
        FormGroup} from "@mui/material/";
import { theme } from "./theme";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Container } from "@mui/system";
import logoUni from "./logoUNI.png";
import pabellon from "./UNI-pabellon.jpg";

const CustomTitle = styled('h1')(({theme})=>({
    fontSize: theme.palette.text.lg,
    fontWeight: "bold",
}));
const CustomSubtitle = styled('h2')(({theme})=>({
    fontSize: theme.palette.text.md,
    fontWeight: "bold",
}));

const CustomContainer = styled(Paper)(({ theme }) => ({
    //main: theme.palette.primary.main,
    background: theme.palette.background.default,
    height: "auto",
    margin: "0",
    display: "flex",
    textAlign: "center",
    flexDirection: "column",
    alignItems: "center",
}));

const CustomFormContainer = styled(Paper)(({theme})=>({
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${pabellon})`,
    backgroundSize: "cover",
    width: "80%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: `solid 6px ${theme.palette.secondary.main}`,
    borderRadius: "24px",
    padding: "40px 0px",
}));

const CustomForm = styled(FormGroup)(({theme})=>({
    height: "auto",
    width: "350px",
    'margin': "10px",
    padding: "40px 10px",
    border: `solid 4px ${theme.palette.secondary.main}`,
    background: theme.palette.primary.main,
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
}))

const CustomLabel = styled(InputLabel)(({theme})=>({
    fontSize: theme.palette.text.sm
}));

const CustomInput = styled(Input)(({theme})=>({
    background: "white",
    color: "black",
    borderRadius: "6px",
    paddingLeft: "6px",
    margin:"12px",
    width: "280px",
    fontSize: theme.palette.text.sm,
}))

const CustomButton= styled(Button)(({theme})=>({
    background: "black",
    color: theme.palette.primary,
    borderRadius: "6px",
    margin:"12px",
    border: "solid 1px white",
    fontWeight: "bold",
    fontSize: theme.palette.text.sm,
}));
const CustomLogo = styled("img")(({theme})=>({
    width: "120px",
    height: "140px",
}));

const CustomLink = styled('a')(({theme})=>({
    textDecoration: "none",
    color: "black",
    fontSize: "14px",
}))

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