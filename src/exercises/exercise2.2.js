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
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';

function App() {
    const [text, setText] = useState('Initial text')
    const [checked, setChecked] = useState(true);
    const [open, setOpen] = useState(false);

    const handleChange = () => {
        if (text === 'Other text') {
            setText('Initial text');
            setChecked(true);
        } else {
            setText('Other text');
            setChecked(false);
        }

    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <FormGroup>
                <FormControlLabel
                    control={<Switch checked={checked} onChange={handleChange} aria-label="login switch" />}
                    label={checked ? 'Show other text' : 'Show initial text'}
                />
            </FormGroup>
            <AppBar position="static">
                <Toolbar>
                    <Button color="inherit" onClick={handleClickOpen}>About</Button>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="dialog-title"
                        aria-describedby="dialog-description"
                    >
                        <DialogTitle id="dialog-title">About</DialogTitle>
                        <DialogContent>
                            <Typography>
                                Something about my application.
                            </Typography>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Close
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Toolbar>
            </AppBar>
            <h1>
                {text}
            </h1>
        </div>
    );
}

export default App;