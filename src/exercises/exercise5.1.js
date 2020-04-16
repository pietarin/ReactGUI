import React, { useState, useRef, useEffect } from 'react';
import './exercise.css';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function App() {
    const [canvasSize, setCanvasSize] = useState([window.innerWidth, window.innerHeight]);

    // reference to canvas element, in JSX content
    // there is ref={canvasRef} which causes that
    // element to be stored here
    const canvasRef = useRef(null);
    
    window.onresize = (event) => {
        // always keep canvas the same size as the window
        setCanvasSize([window.innerWidth, window.innerHeight]);
    }

    const drawHouse1 = (ctx) => {
        // Set line width
        ctx.lineWidth = 10;

        // Wall
        ctx.strokeRect(75, 140, 150, 110);

        // Door
        ctx.fillRect(130, 190, 40, 60);

        // Roof
        ctx.beginPath();
        ctx.moveTo(50, 140);
        ctx.lineTo(150, 60);
        ctx.lineTo(250, 140);
        ctx.closePath();
        ctx.stroke();
    }

    const drawHouse2 = (ctx) => {
        // Set line width
        ctx.lineWidth = 7;

        // Wall
        ctx.strokeRect(150, 240, 250, 210);

        // Door
        ctx.fillRect(330, 290, 40, 60);

        // Roof
        ctx.beginPath();
        ctx.moveTo(150, 240);
        ctx.lineTo(250, 160);
        ctx.lineTo(350, 240);
        ctx.closePath();
        ctx.stroke();
    }

    useEffect(() => {
		// this is called every time the UI has updated
		// when this is executed the first time, the canvas has been created
		let ctx = canvasRef.current.getContext('2d');
		// width an height are used in various places, store them in these variables to shorten the following code
		let [w, h] = [canvasRef.current.width, canvasRef.current.height];

		// cursor
		ctx.lineWidth = 2.0;
		ctx.strokeStyle = "black";
		ctx.shadowColor = "lightGray";
		ctx.shadowBlur = 3;
		ctx.shadowOffsetX = 4;
		ctx.shadowOffsetY = 4;
        drawHouse1(ctx);
        drawHouse2(ctx);
		ctx.lineWidth = 1.0;
		ctx.restore();
	});

    return (
        <Box>
			<canvas
				width={canvasSize[0]}
				height={canvasSize[1]}
				ref={canvasRef}
				style={{"cursor": "none", "zIndex": 1, "position": "fixed"}}
			/>
		</Box>
    );
}

export default App;