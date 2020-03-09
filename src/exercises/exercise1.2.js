import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import './exercise.css';

function App() {
    document.title = 'Binary Boxes';

    return (
        <div>
            <BinaryConverter />
        </div>
    )
}

function BinaryConverter() {
    const [decimalValue, setDecimalValue] = useState(0);
    const [binaryArray, setBinaryArray] = useState([0, 0, 0, 0, 0, 0, 0, 0]);

    function bitHandler(index, checked) {
        var sliceOne = binaryArray.slice(0, index);
        var sliceTwo = binaryArray.slice(index);
        var replace = 0;
        if (checked) {
            replace = 1;
        }
        setBinaryArray(
            sliceOne.concat([replace], sliceTwo)
        );
        console.log(binaryArray + "b");
        console.log(binaryArray.slice(0, index).concat([replace], (binaryArray.slice(index + 1))) + " barray");
        console.log(sliceOne + " one");
        console.log(index + " index");
        console.log([replace] + " replace");
        console.log(sliceTwo + " two");
        console.log(binaryArray.length + " length");
    }

    return (
        <div className="App">
            <Box>
                <Checkbox id={0} onChange={(e, checked) => {
                    bitHandler(e.target.id, checked)
                }} />
                <Checkbox id={1} onChange={(e, checked) => {
                    bitHandler(e.target.id, checked)
                }} />
                <Checkbox id={2} onChange={(e, checked) => {
                    bitHandler(e.target.id, checked)
                }} />
                <Checkbox id={3} onChange={(e, checked) => {
                    bitHandler(e.target.id, checked)
                }} />
                <Checkbox id={4} onChange={(e, checked) => {
                    bitHandler(e.target.id, checked)
                }} />
                <Checkbox id={5} onChange={(e, checked) => {
                    bitHandler(e.target.id, checked)
                }} />
                <Checkbox id={6} onChange={(e, checked) => {
                    bitHandler(e.target.id, checked)
                }} />
                <Checkbox id={7} onChange={(e, checked) => {
                    bitHandler(e.target.id, checked)
                }} />
                <br></br>
                <TextField id="binary" value={binaryArray} />
                <br></br>
            </Box>
            <br></br>
            <ConvertButton />
            <br></br>
            <TextField id="decimal" value={decimalValue} />
        </div>
    );
}

function ConvertButton() {
    return (
        <Button variant="contained" color="primary">
            Convert
    </Button>
    );
}


export default App;
