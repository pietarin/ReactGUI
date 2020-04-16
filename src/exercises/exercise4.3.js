import React, { useState } from 'react';
import './exercise.css';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';

function App() {
    const [undoStack, setUndoStack] = useState([]);
	const [redoStack, setRedoStack] = useState([]);
    const [buttonData, setButtonData] = useState([
        { key: 0, label: '1' , clicked: false},
        { key: 1, label: '2' , clicked: false},
        { key: 2, label: '3' , clicked: false},
      ]);
    const [text, setText] = useState([]);

    const undo = (event) => {
        console.log("painettiinhan sitä")
		setRedoStack(redoStack.concat([textMap]));
		setUndoStack(undoStack.slice(0, undoStack.length-1));
	}
	const redo = (event) => {
        console.log("painettiinhan tätä")
		setUndoStack(undoStack.concat([text]));
		setRedoStack(redoStack.slice(0, redoStack.length-1));
    }
    
    function handleClick(key, teksti) {
        setText(text.concat(teksti));
    }

    const textMap = text.map((teksti, index) =>
    <li key={index.toString()}>
      {teksti}
    </li>
    )

    return (
        <div>
            <Typography>
                {textMap}
            </Typography>
            {buttonData.map(data => {
                return (
                    <Button
                        color="primary"
                        variant="outlined"
                        key={data.key}
                        onClick={() => {
                            handleClick(data.key, data.label)
                        }}
                    >
                        {data.label}
                    </Button>
                );
            })}
            <Box>
				<IconButton disabled={undoStack.length === 0} onClick={undo}>
					<UndoIcon/>
				</IconButton>
				<IconButton disabled={redoStack.length === 0} onClick={redo}>
					<RedoIcon/>
				</IconButton>
			</Box>
        </div>
    );
}

export default App;