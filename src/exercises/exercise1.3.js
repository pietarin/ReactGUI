import React, { useState, useEffect } from 'react';
import './exercise.css';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

function App() {
    const [clicked, setClicked] = useState(0);
    const [wheel, setWheel] = useState(0);

    const mouseLoc = useOnMouseMove();
    const x = mouseLoc.x;
    const y = mouseLoc.y;

    document.title = 'Mouse listener';

    function onMouseDown() {
        setClicked(clicked + 1);
    }

    function onWheel(e) {
        setWheel(wheel + e.deltaY)
    }

    return (
		<Box onClick={onMouseDown} onWheel={(e) => onWheel(e)}>
			<Paper style={{width: 400, textAlign: 'center'}}>
                <Box><TextField id={"clicked"} variant="outlined" fullWidth value={"Mouse has been clicked: " + clicked + " times."} /></Box>
				<Box><TextField id={"mouseLoc"} variant="outlined" fullWidth value={"The location of the cursor is: " + x + ", " + y} /></Box>
				<Box><TextField id={"wheel"} variant="outlined" fullWidth value={"Mouse wheel has been rolled:  " + wheel} /></Box>
			</Paper>
		</Box>
	);
}

function useOnMouseMove() {
    const [mouseLoc, setMouseLoc] = useState({ x: 0, y: 0 });
    useEffect(() => {
      const setFromEvent = e => setMouseLoc({ x: e.offsetX, y: e.offsetY });
      window.addEventListener("mousemove", setFromEvent);
      return () => {
        window.removeEventListener("mousemove", setFromEvent);
      };
    }, []);
    return mouseLoc;
  };

export default App;