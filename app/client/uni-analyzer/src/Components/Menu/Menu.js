import { CustomMenuContainer, 
    CustomNavLink, 
    CustomListNav,
    CustomUserInfo, 
    CustomUserName} from "./StyledMenu";
import { CustomLink, CustomLogo, CustomSubtitle } from "../CustomStyles/CustomComponents";
import logoUni from "../../Images/logoUNI.png";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../theme";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

export default function Menu(){
    const activeLink = ({ isActive }) => {
        return {
          color: isActive ? "white" : theme.palette.secondary.main,
          fontWeight: isActive ? "bold  ": "",
        };
    }
    return (
        <ThemeProvider theme={theme}>
            <CustomMenuContainer>
                <CustomLogo alt="logo Universidad Nacional de Ingenieria" src={logoUni}/>
                <CustomSubtitle>Herramientas </CustomSubtitle>
                <CustomListNav>
                    <CustomNavLink to={'/prediction'} style={activeLink}>
                        Predecir
                    </CustomNavLink>
                    <CustomNavLink to={'/analysis'} style={activeLink}>
                        Analizar
                    </CustomNavLink>
                    <CustomNavLink to={'/form'} style={activeLink}>
                        Encuesta
                    </CustomNavLink>
                    <CustomNavLink to={'/classes'} style={activeLink}>
                        Salones
                    </CustomNavLink>
                </CustomListNav>
                <CustomUserInfo>
                    <AccountCircleOutlinedIcon sx={{fontSize: 50}}></AccountCircleOutlinedIcon>
                    <CustomUserName>Freider Achic</CustomUserName>
                </CustomUserInfo>
                <CustomUserName>Log Out</CustomUserName>
                <CustomLink href="/login">
                    About us
                </CustomLink>
            </CustomMenuContainer>
        </ThemeProvider>
    )
}