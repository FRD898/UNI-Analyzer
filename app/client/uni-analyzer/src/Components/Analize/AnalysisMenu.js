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
import BarChart from "../../Images/Bar.jpg"
import ClusterChart from "../../Images/Clustering.jpg"
import PieChart from "../../Images/pie.jpg"

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
                                <CustomImageAnalysis src={ClusterChart} alt="Card image"></CustomImageAnalysis>
                                <p>Esta herramienta permite agrupar alumnos en base a una característica común.</p>
                            </CustomCardContainer>
                        </Link>
                        <Link style={{textDecoration: 'none'}} to={"/bar"}>
                            <CustomCardContainer>
                                <CustomSubtitle>Barras</CustomSubtitle>
                                <CustomImageAnalysis src={BarChart} alt="Card image"></CustomImageAnalysis>
                                <p>Esta herramienta permite analizar en base a dos atributos.</p>
                            </CustomCardContainer>
                        </Link>
                        <Link style={{textDecoration: 'none'}} to={"/pie"}>
                            <CustomCardContainer>
                                <CustomSubtitle>Circular</CustomSubtitle>
                                <CustomImageAnalysis src={PieChart} alt="Card image"></CustomImageAnalysis>
                                <p>Esta herramienta permite agrupar alumnos en base a una característica común</p>
                            </CustomCardContainer>
                        </Link>
                    </CustomCardsContainer>
                </CustomAnalysisPageContainer>
            </CustomPageContainer>
        </ThemeProvider>
    )
}