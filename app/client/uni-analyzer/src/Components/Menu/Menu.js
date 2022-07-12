import { CustomMenuContainer, 
    CustomNavLink, 
    CustomListNav,
    CustomUserInfo, 
    CustomUserName} from "./StyledMenu";
import { CustomLink, CustomLogo, CustomSubtitle } from "../CustomStyles/CustomComponents";
import logoUni from "../../Images/logoUNI.png";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../theme";
import { TextField } from "@mui/material";

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
                    <CustomNavLink to={'/predecir'} style={activeLink}>
                        Predecir
                    </CustomNavLink>
                    <CustomNavLink to={'/analizar'} style={activeLink}>
                        Analizar
                    </CustomNavLink>
                    <CustomNavLink to={'/encuesta'} style={activeLink}>
                        Encuesta
                    </CustomNavLink>
                    <CustomNavLink to={'/salones'} style={activeLink}>
                        Salones
                    </CustomNavLink>
                </CustomListNav>
                <CustomUserInfo>
                    <img src="./" alt="Logo user"></img>
                    <CustomUserName>Freider Achic</CustomUserName>
                </CustomUserInfo>
                <CustomLink href="./">
                    About us
                </CustomLink>
            </CustomMenuContainer>
        </ThemeProvider>
    )
}