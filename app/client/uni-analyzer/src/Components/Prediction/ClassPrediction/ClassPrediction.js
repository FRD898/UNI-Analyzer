import { CustomSearchInputContainer } from "../PredictionStyled";
import { CustomInput } from "../../CustomStyles/CustomComponents";
import SearchIcon from '@mui/icons-material/Search';
import TablePrediction from "../TablePrediction/TablePrediction";
import { theme } from "../../theme";
import { ThemeProvider } from '@mui/material/styles';
import { useState } from "react";

export default function ClassPrediction(){
    const [classroom, setClassroom] = useState("CC01");
    const handleChange = (event)=>{
        console.log(event.target)
        setClassroom(event.target.value)
    }
    return (
        <ThemeProvider theme={theme}>
            <CustomSearchInputContainer>
                <CustomInput
                        id="salon"
                        type="text"
                        value={classroom}
                        onChange={(e)=>handleChange(e)}
                />
                <SearchIcon  sx={{ color: theme.palette.primary.main,
                    fontSize: "30px",
                    "&:hover": {cursor:'pointer',
                    color: theme.palette.primary.dark},
                    }}></SearchIcon>
            </CustomSearchInputContainer>
            <TablePrediction></TablePrediction>
        </ThemeProvider>
    )
}