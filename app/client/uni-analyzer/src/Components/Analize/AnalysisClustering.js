import { BubbleChart } from "./Bubble/BubbleChart";
import { theme } from "../theme";
import { ThemeProvider } from "@mui/material/styles";
import { CustomPageContainer, CustomTitle } from "../CustomStyles/CustomComponents";
import { Grid } from "@mui/material";
import { getClassrooms } from "../../Services/UserService";
import { useState, useEffect } from "react";
import { CustomChartContainer } from "./AnalysisStyled";
import SelectComponent from "../SelectComponent/SelectComponent";


export default function AnalysisClustering(){
    const [stateBubble, setStateBubble] = useState({'loaded':false,'classrooms':[],"class_names":[], "room":""});
    const [x, setX] = useState("");
    const [y, setY] = useState("");

    useEffect(()=>{
        getClassrooms().then(
            (res)=>{
                var class_names = []
                for(const room of res){
                    class_names.push(room.class_name)
                }
                setStateBubble({...stateBubble,
                    'loaded':true,
                    'classrooms':res,
                    "class_names":class_names,
                    "room":class_names[0],
                })
            }
        )
    },[])
    const setRoom = (newRoom)=>{
        setStateBubble({
            ...stateBubble,
            room:newRoom,
        })
    }
    return (
        <ThemeProvider theme={theme}>
            <CustomPageContainer>
                <CustomTitle>Analizar Clustering</CustomTitle>
                <CustomChartContainer container direction="column">
                    <Grid item>
                        <Grid>
                        <SelectComponent atr={x} setAtr={setX}
                        label="X"
                        options={["Residencia","Faltas","PC1","Tareas","Prácticas","Parcial"]}
                        />
                        <SelectComponent atr={y} setAtr={setY}
                        label="Y"
                        options={["Residencia","Faltas","PC1","Tareas","Prácticas","Parcial"]}
                        />
                        <SelectComponent atr={stateBubble.room} setAtr={setRoom}
                        label="Salón"
                        options={stateBubble["class_names"]}
                        />
                        </Grid>
                    </Grid>
                    <Grid item>
                        {stateBubble.loaded?<BubbleChart vars={{x,y}} room={stateBubble.room} classrooms={stateBubble.classrooms[stateBubble["class_names"].indexOf(stateBubble.room)]}></BubbleChart>:null}
                    </Grid>
                </CustomChartContainer>
            </CustomPageContainer>
        </ThemeProvider>

    )
}