import { PieChart } from "./Pie/PieChart";
import { theme } from "../theme";
import { ThemeProvider } from "@mui/material/styles";
import { CustomPageContainer, CustomTitle } from "../CustomStyles/CustomComponents";
import { Grid } from "@mui/material";
import { getClassrooms } from "../../Services/UserService";
import { useState, useEffect } from "react";
import { CustomChartContainer } from "./AnalysisStyled";
import SelectComponent from "../SelectComponent/SelectComponent";

export default function AnalysisPie(){
    const [stateBar, setStateBar] = useState({'loaded':false,'classrooms':[],"class_names":[], "room":""});
    const [x, setX] = useState("Residencia");

    useEffect(()=>{
        getClassrooms().then(
            (res)=>{
                var class_names = []
                for(const room of res){
                    class_names.push(room.class_name)
                }
                setStateBar({...stateBar,
                    'loaded':true,
                    'classrooms':res,
                    "class_names":class_names,
                    "room":class_names[0],
                })
            }
        )
    },[])
    const setRoom = (newRoom)=>{
        setStateBar({
            ...stateBar,
            room:newRoom,
        })
    }
    return (
        <ThemeProvider theme={theme}>
            <CustomPageContainer>
                <CustomTitle>Gráfico Circular</CustomTitle>
                <CustomChartContainer container direction="column">
                    <Grid item>
                        <Grid>
                        <SelectComponent atr={x} setAtr={setX}
                        label="Atributo"
                        options={["Residencia","Faltas","PC1","Tareas","Prácticas","Parcial","Resultado"]}
                        />
                        <SelectComponent atr={stateBar.room} setAtr={setRoom}
                        label="Salón"
                        options={stateBar["class_names"]}
                        />
                        </Grid>
                    </Grid>
                    <Grid item xs={12} style={{height:"65vh"}}>
                        {stateBar.loaded?<PieChart var={x} room={stateBar.room} classrooms={stateBar.classrooms[stateBar["class_names"].indexOf(stateBar.room)]}/>:null}
                    </Grid>
                </CustomChartContainer>
            </CustomPageContainer>
        </ThemeProvider>

    )
}