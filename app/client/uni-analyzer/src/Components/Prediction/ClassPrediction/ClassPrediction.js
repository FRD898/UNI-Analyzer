import { CustomSearchInputContainer } from "../PredictionStyled";
import { CustomInput } from "../../CustomStyles/CustomComponents";
import SearchIcon from '@mui/icons-material/Search';
import TablePrediction from "../TablePrediction/TablePrediction";
import { theme } from "../../theme";
import { ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from "react";
import { getClassrooms } from "../../../Services/UserService";
import Autocomplete from '@mui/material/Autocomplete';
import { TextField } from "@mui/material";
import { CustomInputSearch } from "./CustomClassPredictionStyle";


export default function ClassPrediction(){
    const [state, setState] = useState({'room':{},'options':[],'classrooms':[]});
    useEffect(()=>{
        console.log("renderizado")
        getClassrooms().then(
            (res)=>{
                console.log("*************************",res)
                var options = []
                for(const [i,r] of res.entries()){
                    console.log("iteraaaaaaaaaaaaaaaaaaaaaaaaaaaando")
                    options.push({
                        label:r.class_name,
                        id:i
                    })
                }
                setState({...state,
                    'room':options[0],
                    'options':options,
                    'classrooms':res
                })
            }
        )
    },[])

    const handleSearchClassroom = ()=>{
        /*for (const room of classrooms.classrooms) {
            if (room['class_name'].includes(classroom)){
                console.log(room['class_name'])
            }
        }*/
    }
    return (
        <ThemeProvider theme={theme}>
            <CustomSearchInputContainer>
                <Autocomplete
                disablePortal
                id="combo-box-demo"
                sx={{ width: 300 }}
                value={state['room']}
                onChange={(event, newValue) => {
                console.log(newValue);
                setState({
                    ...state,
                    'room':newValue
                });
                }}
                options={state['options']}
                getOptionLabel={(option) => option.label || ""}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                renderInput={(params) =>
                    <CustomInputSearch {...params} label="Salones"
                    InputLabelProps={{
                        style: { color: '#303030'},
                    }}
                    sx={{ input: { color: theme.palette.primary.main, } }}
                    />
                    }
                />
                <SearchIcon  sx={{ color: theme.palette.primary.main,
                    fontSize: "30px",
                    "&:hover": {cursor:'pointer',
                    color: theme.palette.primary.dark},
                    }}
                    onClick={handleSearchClassroom}
                    ></SearchIcon>
            </CustomSearchInputContainer>
            <TablePrediction ></TablePrediction>
        </ThemeProvider>
    )
}