import React, { useState } from 'react';
import './exercise.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    text: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    }
}));

function App() {
    const [text, setText] = useState('Initial text')
    const [open, setOpen] = useState(false);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = event => {
        setText(event.target.value);
    }

    const styledClasses = useStyles();

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Button color="inherit" onClick={handleClickOpen}>Click here to change the text on the page</Button>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="dialog-title"
                        aria-describedby="dialog-description"
                    >
                        <DialogTitle id="dialog-title">Update</DialogTitle>
                        <DialogContent>
                            <Typography>
                                Type your message:
                            </Typography>
                            <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={handleChange} />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Close this dialog
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Toolbar>
            </AppBar>
            <h1 className={styledClasses.text}>
                {text}
            </h1>
        </div>
    );
}

export default App;