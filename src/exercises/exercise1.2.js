import React, { useState } from 'react';
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
        const indexNum = parseInt(index);
        var sliceOne = binaryArray.slice(0, indexNum);
        var sliceTwo = binaryArray.slice(indexNum + 1);
        var replace = 0;
        if (checked) {
            replace = 1;
        }
        setBinaryArray(
            sliceOne.concat([replace], sliceTwo)
        );
    }

    return (
        <div className="App">
            <Box>
                <Checkbox id={"0"} onChange={(e, checked) => {
                    bitHandler(e.target.id, checked)
                }} />
                <Checkbox id={"1"} onChange={(e, checked) => {
                    bitHandler(e.target.id, checked)
                }} />
                <Checkbox id={"2"} onChange={(e, checked) => {
                    bitHandler(e.target.id, checked)
                }} />
                <Checkbox id={"3"} onChange={(e, checked) => {
                    bitHandler(e.target.id, checked)
                }} />
                <Checkbox id={"4"} onChange={(e, checked) => {
                    bitHandler(e.target.id, checked)
                }} />
                <Checkbox id={"5"} onChange={(e, checked) => {
                    bitHandler(e.target.id, checked)
                }} />
                <Checkbox id={"6"} onChange={(e, checked) => {
                    bitHandler(e.target.id, checked)
                }} />
                <Checkbox id={"7"} onChange={(e, checked) => {
                    bitHandler(e.target.id, checked)
                }} />
                <br></br>
                <TextField id="binary" value={binaryArray.join('')} />
                <br></br>
            </Box>
            <br></br>
            <ConvertButton binaryArray={binaryArray} setDecimalValue={setDecimalValue} />
            <br></br>
            <TextField id="decimal" value={decimalValue} />
        </div>
    );
}

function ConvertButton(props) {
    function onClick() {
        var joinedBArray = (props.binaryArray).join('');
        props.setDecimalValue(
            parseInt(joinedBArray, 2)
        );
    }
    return (
        <Button variant="contained" color="primary" onClick={(() => {
            onClick();
        })}>
            Convert
        </Button>
    );
}


export default App;
