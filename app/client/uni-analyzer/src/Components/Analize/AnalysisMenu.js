import { ThemeProvider } from "@mui/material/styles";
import { CustomPageContainer, 
    CustomTitle, 
    CustomCardContainer, 
    CustomSubtitle } from "../CustomStyles/CustomComponents";
import { theme } from "../theme";
import { CustomAnalysisPageContainer, 
    CustomCardsContainer,
    CustomImageAnalysis } from "./AnalysisStyled";
export default function AnalysisMenu(){
    return (
        <ThemeProvider theme={theme}>
            <CustomPageContainer>
                <CustomAnalysisPageContainer>
                    <CustomTitle>
                        Analizar
                    </CustomTitle>
                    <CustomCardsContainer>
                        <CustomCardContainer>
                            <CustomSubtitle>Clustering</CustomSubtitle>
                            <CustomImageAnalysis alt="Card image"></CustomImageAnalysis>
                            <p>Esta herramienta permite agrupar alumnos en base a una característica común</p>
                        </CustomCardContainer>
                        <CustomCardContainer>
                            <CustomSubtitle>Barras</CustomSubtitle>
                            <p>Esta herramienta permite agrupar alumnos en base a una característica común</p>
                        </CustomCardContainer>
                        <CustomCardContainer>
                            <CustomSubtitle>Circular</CustomSubtitle>
                            <p>Esta herramienta permite agrupar alumnos en base a una característica común</p>
                        </CustomCardContainer>
                    </CustomCardsContainer>
                    
                </CustomAnalysisPageContainer>
            </CustomPageContainer>
        </ThemeProvider>
    )
}