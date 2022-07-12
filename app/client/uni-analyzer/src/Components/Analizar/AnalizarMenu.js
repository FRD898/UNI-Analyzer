import { ThemeProvider } from "@mui/material/styles";
import { CustomPageContainer, CustomTitle } from "../CustomStyles/CustomComponents";
import { theme } from "../theme";
export default function AnalizarMenu(){
    return (
        <ThemeProvider theme={theme}>
            <CustomPageContainer>
                <CustomTitle>
                    Analizar Menu
                </CustomTitle>
            </CustomPageContainer>
        </ThemeProvider>
    )
}