import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    root: {
        fontFamily: "monserrat",
    },
    palette: {
        type: 'dark',
        background: {
            default: "#303030",
            paper: "#424242",
        },
        text: {
            primary: "#FADAD3",
            secondary: "white",
            sm: "18px",
            md: "24px",
            lg: "32px",
            xlg: "35px",
        },
        primary: {
        main: '#7C271E',
        light: "#96524b",
        dark: '#561b15',
        },
        secondary: {
        main: '#FADAD3',
        light: '#fbe1db',
        dark: '#af9893',
        },
    },
});