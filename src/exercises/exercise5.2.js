import React, { useRef, useEffect } from 'react';
import './exercise.css';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import brushSVG from './brush.svg';
import brushImg from './brush.png';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function App() {
    // reference to canvas element, in JSX content
    // there is ref={canvasRef} which causes that
    // element to be stored here
    const canvasRef = useRef(null);
    const imageEl = useRef(brushImg);
    const svgEl = useRef(brushSVG);

    useEffect(() => {
        // this is called every time the UI has updated
        // when this is executed the first time, the canvas has been created
        let ctx = canvasRef.current.getContext('2d');
        // width an height are used in various places, store them in these variables to shorten the following code
        let [w, h] = [canvasRef.current.width, canvasRef.current.height];
        // clear canvas
        ctx.clearRect(0, 0, w, h);
        // save the current canvas state so that we can go back to it
        ctx.save();
        // draw the png and svg images to canvas
        ctx.drawImage(imageEl.current, 0, w / 3);
        ctx.drawImage(svgEl.current, 0, w / 3);
    });

    return (
        <Box>
            <Box>
                <Typography variant="h6">Images on Canvas</Typography>
            </Box>
            <Box display="flex" style={{ "position": "relative", "top": 0, "width": 40, "height": 600 }}>
                <Box>
                    <canvas
                        width={600}
                        height={600}
                        ref={canvasRef}
                    />
                    <img onLoad={() => {}} src={brushImg} alt="" ref={imageEl} style={{ "display": "none" }} />
                    <img onLoad={() => {}} src={brushSVG} alt="" ref={svgEl} style={{ "display": "none" }} />
                </Box>
            </Box>
        </Box>
    );
}

export default App;