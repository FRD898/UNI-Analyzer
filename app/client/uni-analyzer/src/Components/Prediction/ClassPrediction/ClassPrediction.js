import { CustomSearchInputContainer } from "../PredictionStyled";
import TablePrediction from "../TablePrediction/TablePrediction";
import { theme } from "../../theme";
import { ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from "react";
import { getClassrooms } from "../../../Services/UserService";
import Autocomplete from '@mui/material/Autocomplete';
import { CustomInputSearch } from "./CustomClassPredictionStyle";


export default function ClassPrediction(){
    const [state, setState] = useState({'loaded':false,'room':{},'options':[],'classrooms':[]});
    useEffect(()=>{
        getClassrooms().then(
            (res)=>{
                var options = []
                for(const [i,r] of res.entries()){
                    options.push({
                        label:r.class_name,
                        id:i
                    })
                }
                setState({...state,
                    'loaded':true,
                    'room':options[0],
                    'options':options,
                    'classrooms':res
                })
            }
        )
    },[])
    return (
        <ThemeProvider theme={theme}>
            <CustomSearchInputContainer>
                <Autocomplete
                disablePortal
                id="combo-box-demo"
                sx={{ width: 300 }}
                value={state['room']}
                onChange={(event, newValue) => {
                setState({
                    ...state,
                    'room':newValue
                });
                }}
                options={state['options']}
                getOptionLabel={(option) => option.label || ""}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                renderInput={(params) =>
                    <CustomInputSearch {...params} label="Salón"
                    InputLabelProps={{
                        style: { color: '#303030', fontWeight: "bold"},
                    }}
                    sx={{ input: { color: theme.palette.primary.main, } }}
                    />
                    }
                />
                
            </CustomSearchInputContainer>
            {
                state.loaded?<TablePrediction  students={state.classrooms[state.room.id].students} room={state.room.label} />:null
            }
        </ThemeProvider>
    )
}