import * as React from 'react';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { CustomButton } from '../CustomStyles/CustomComponents';

export default function ResponsiveDialog(props) {
const theme = useTheme();
const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

const handleClose = () => {
    //setOpen(false);
    props.setDialog({"show":false,"text":""});
};

return (
    <div>
        <Dialog
        fullScreen={fullScreen}
        open={props.show}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        >
        <DialogTitle id="responsive-dialog-title">
            {"Resultado de la predicción"}
        </DialogTitle>
        <DialogContent>
            <DialogContentText>
                {`En base a los datos ingresados, aplicando el modelo predictivo seleccionado, el estudiante:`}
                <Box sx={{ fontWeight: 'bold',
                textTransform: 'uppercase' }}>
                {props.text}
                </Box>
                {`Sus datos al igual que el resultado de la predicción, quedaran registrados
                en su respectivo salón para que pueda ser consultado o analizado cuando crea conveniente.`}
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <CustomButton size="small" color="success" autoFocus variant='contained' onClick={handleClose}>Aceptar</CustomButton>
        </DialogActions>
        </Dialog>
    </div>
);
}