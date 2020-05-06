import React, { useRef, useEffect, useState } from 'react';
import './exercise.css';
import Box from '@material-ui/core/Box';
import Input from '@material-ui/core/Input';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Textfield from '@material-ui/core/TextField';

function App() {
    const [mouseX, setMouseX] = useState(null);
    const [mouseY, setMouseY] = useState(null);
    const [fullWidth, setFullWidth] = useState(false);

    const handleClick = (event) => {
        event.preventDefault();
        setMouseX(event.clientX);
        setMouseY(event.clientY);
    };

    const handleClose = () => {
        setMouseX(null);
        setMouseY(null);
    };

    const changeWidth = () => {
        console.log("Change Width");
        setFullWidth(!fullWidth);
    }

    return (
        <Box>
            <Textfield
                onContextMenu={handleClick}
                fullWidth={fullWidth}
                
            ></Textfield>
            <Menu
                keepMounted
                open={mouseY !== null}
                onClose={handleClose}
                anchorReference="anchorPosition"
                anchorPosition={
                    (mouseY !== null && mouseX !== null) ?
                        { top: mouseY, left: mouseX } : undefined
                }
            >
                <MenuItem onClick={(evt) => { changeWidth(); handleClose(evt); }}>Change width</MenuItem>
                <MenuItem onClick={(evt) => { handleClose(evt); }}>Do nothing</MenuItem>
            </Menu>
        </Box>
    )
}

export default App;