import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import { theme } from "../theme";

export default function SelectComponent(props){
    const handleChange = (event) => {
        props.setAtr(event.target.value)
    };
    return(
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small" style={{color: '#303030'}}>
            {props.label}
            </InputLabel>
            <Select labelId="demo-select-small"
            style={{color: theme.palette.primary.dark,backgroundColor:theme.palette.secondary.main}}
            id="demo-select-small"
            value={props.atr}
            label="Select"
            onChange={handleChange}>
                {
                    props.options.map((val,i)=>(
                        <MenuItem key={i} value={val}>{val}</MenuItem>
                    ))
                }
            </Select>
        </FormControl>
    )
}