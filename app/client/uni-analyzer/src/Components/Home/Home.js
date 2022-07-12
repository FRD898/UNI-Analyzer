import Menu from "../Menu/Menu";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../theme";

export default function Home(){
    return(
        <ThemeProvider theme={theme}>
            <Menu>

            </Menu>
        </ThemeProvider>
    )
}