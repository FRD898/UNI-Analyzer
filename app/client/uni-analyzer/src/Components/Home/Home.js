import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../theme";
import { CustomHomeContainer, CustomMainImage } from "./StyledHome";
import { CustomPageContainer, CustomTitle } from "../CustomStyles/CustomComponents";
export default function Home(){
    return(
        <ThemeProvider theme={theme}>
            <CustomPageContainer>
                <CustomHomeContainer>
                    <CustomTitle>
                        ANALYZER
                    </CustomTitle>
                    <CustomMainImage/>
                </CustomHomeContainer>
            </CustomPageContainer>
        </ThemeProvider>
    )
}