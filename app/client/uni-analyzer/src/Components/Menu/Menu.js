import { CustomMenuContainer, 
    CustomListItem, 
    CustomListMenu,
    CustomUserInfo, 
    CustomUserName} from "./StyledMenu";
import { CustomLink, CustomLogo, CustomSubtitle } from "../CustomStyles/CustomComponents";
import logoUni from "../../Images/logoUNI.png";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../theme";
import { TextField } from "@mui/material";

export default function Menu(){
    return (
        <ThemeProvider theme={theme}>
            <CustomMenuContainer>
                <CustomLogo alt="logo Universidad Nacional de Ingenieria" src={logoUni}/>
                <CustomSubtitle>Herramientas </CustomSubtitle>
                <CustomListMenu>
                    <CustomListItem>
                        Predecir
                    </CustomListItem>
                    <CustomListItem>
                        Analizar
                    </CustomListItem>
                    <CustomListItem>
                        Encuesta
                    </CustomListItem>
                    <CustomListItem>
                        Salones
                    </CustomListItem>
                </CustomListMenu>
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