import { ThemeProvider } from "@mui/material/styles";
import { CustomPageContainer, 
    CustomTitle, 
    CustomCardContainer, 
    CustomSubtitle, 
    CustomLink} from "../CustomStyles/CustomComponents";
import { theme } from "../theme";
import { CustomAnalysisPageContainer, 
    CustomCardsContainer,
    CustomImageAnalysis } from "./AnalysisStyled";
import { Link } from "react-router-dom";
export default function AnalysisMenu(){
    return (
        <ThemeProvider theme={theme}>
            <CustomPageContainer>
                <CustomAnalysisPageContainer>
                    <CustomTitle>
                        Analizar
                    </CustomTitle>
                    <CustomCardsContainer>
                        <Link style={{textDecoration: 'none'}} to={"/clustering"}>
                            <CustomCardContainer>
                                <CustomSubtitle>Clustering</CustomSubtitle>
                                <CustomImageAnalysis alt="Card image"></CustomImageAnalysis>
                                <p>Esta herramienta permite agrupar alumnos en base a una característica común</p>
                            </CustomCardContainer>
                        </Link>
                        <Link style={{textDecoration: 'none'}} to={"/bar"}>
                            <CustomCardContainer>
                                <CustomSubtitle>Barras</CustomSubtitle>
                                <p>Esta herramienta permite agrupar alumnos en base a una característica común</p>
                            </CustomCardContainer>
                        </Link>
                        <Link style={{textDecoration: 'none'}} to={"/pie"}>
                            <CustomCardContainer>
                                <CustomSubtitle>Circular</CustomSubtitle>
                                <p>Esta herramienta permite agrupar alumnos en base a una característica común</p>
                            </CustomCardContainer>
                        </Link>
                    </CustomCardsContainer>
                    
                </CustomAnalysisPageContainer>
            </CustomPageContainer>
        </ThemeProvider>
    )
}