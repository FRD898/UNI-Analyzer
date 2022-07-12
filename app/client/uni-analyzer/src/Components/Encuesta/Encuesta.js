import { ThemeProvider } from "@mui/material/styles";
import { CustomPageContainer, CustomTitle } from "../CustomStyles/CustomComponents";
import { theme } from "../theme";
export default function Encuesta(){
    return (
        <ThemeProvider theme={theme}>
            <CustomPageContainer>
                <CustomTitle>
                    Encuesta
                </CustomTitle>
            </CustomPageContainer>
        </ThemeProvider>
    )
}