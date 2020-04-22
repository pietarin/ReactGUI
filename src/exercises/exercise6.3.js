import React, { useRef, useEffect, useState } from 'react';
import './exercise.css';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Input from '@material-ui/core/Input';
import Switch from '@material-ui/core/Switch';

function App() {
    const [language, setLanguage] = useState(false);

    const toggleChecked = () => {
        setLanguage((prev) => !prev);
    };
    return (
        <Box>
            <FormControlLabel
                control={<Switch language="finnish" checked={language} onChange={toggleChecked} />}
                label="In english"
            />
            {language ? <EngReverser /> : <FiReverser />}
        </Box>
    )
}

function EngReverser() {
    const [inputString, setInputString] = useState("");
    const handleChange = (event) => {
        setInputString(event.target.value);
    };
    function reverseString(str) {
        return str.split("").reverse().join("");
    }
    return (
        <Box>
            <Typography>
                Your string:
            </Typography>
            <Input
                value={inputString}
                onChange={handleChange}
            ></Input>
            <Typography>Reversed</Typography>
            <Typography>{reverseString(inputString)}</Typography>
        </Box>
    )
}

function FiReverser() {
    const [inputString, setInputString] = useState("");
    const handleChange = (event) => {
        setInputString(event.target.value);
    };
    function reverseString(str) {
        return str.split("").reverse().join("");
    }
    return (
        <Box>
            <Typography>
                Merkkijonosi:
            </Typography>
            <Input
                value={inputString}
                onChange={handleChange}
            ></Input>
            <Typography>Toisinpäin</Typography>
            <Typography>{reverseString(inputString)}</Typography>
        </Box>
    )
}

export default App;