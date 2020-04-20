import React, { useRef, useEffect, useState } from 'react';
import './exercise.css';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function App() {
    const [mousePos, setMousePos] = useState(null);
    const canvasRef = useRef(null);
    const setMouseCoordinates = (event) => {
		setMousePos({x: event.clientX, y: event.clientY});
    }
    const drawHead = (ctx) => {
        let [w, h] = [canvasRef.current.width, canvasRef.current.height];
        ctx.clearRect(0, 0, w, h);
        ctx.beginPath();
        ctx.arc(w/2, h/2, 100, 0, Math.Pi * 2, true);
        ctx.moveTo(w/2+75, h/2);

        if (mousePos && mousePos.x > (w/2-30) && mousePos.x < (w/2+30)) {
            ctx.moveTo(w/2+50, h/2+40);
            ctx.arc(w/2, h/2+40, 50, 0, Math.PI, true);
        } else {
            ctx.arc(w/2, h/2, 75, 0, Math.PI, false);
        }

        ctx.moveTo(w/2-10, h/2-40);
        ctx.arc(w/2-30, h/2-40, 20, 0, Math.Pi * 2, true);
        ctx.moveTo(w/2+50, h/2-40);
        ctx.arc(w/2+30, h/2-40, 20, 0, Math.Pi * 2, true);
        ctx.stroke();
    }
    const drawLeftEye = (ctx) => {
        let [w, h] = [canvasRef.current.width, canvasRef.current.height];
        let angle = (mousePos ? Math.atan2(mousePos.y-(h/2-40), mousePos.x-(w/2-30)) : null);
        let xMovement = (angle !== null ? Math.cos(angle)*5 : 0);
        let yMovement = (angle !== null ? Math.sin(angle)*5 : 0);
        ctx.beginPath();
        ctx.moveTo(w/2-10, h/2-40);
        ctx.arc(w/2-(30-xMovement), h/2-(40-yMovement), 10, 0, Math.PI * 2, true);
        ctx.fillStyle = "black";
        ctx.fill();
    }
    
    const drawRightEye = (ctx) => {
        let [w, h] = [canvasRef.current.width, canvasRef.current.height];
        let angle = (mousePos ? Math.atan2(mousePos.y-(h/2-40), mousePos.x-(w/2-30)) : null);
        let xMovement = (angle !== null ? Math.cos(angle)*5 : 0);
        let yMovement = (angle !== null ? Math.sin(angle)*5 : 0);
        ctx.beginPath();
        ctx.moveTo(w/2+50, h/2-40);
        ctx.arc(w/2+(30+xMovement), h/2-(40-yMovement), 10, 0, Math.PI * 2, true);
        ctx.fillStyle = "black";
        ctx.fill();
    }

    useEffect(() => {
        let ctx = canvasRef.current.getContext('2d');
        ctx.save();
        drawHead(ctx);
        ctx.restore();

        ctx.save();
        drawLeftEye(ctx);
        ctx.restore();

        ctx.save();
        drawRightEye(ctx);
        ctx.restore();
    })

    return (
        <Box>
            <Box style={{"zIndex": 1, "position": "fixed"}} display="block">
				<Typography className="heading" variant="h6">Eyes follow the cursor
				</Typography>
			</Box>
            <canvas
				width={500}
				height={500}
				ref={canvasRef}
				onMouseMove={setMouseCoordinates}
				style={{"zIndex": 2, "position": "fixed"}}
			/>
        </Box>
    );
}

export default App;