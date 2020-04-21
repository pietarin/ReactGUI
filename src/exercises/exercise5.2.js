import React, { useRef, useEffect, useState } from 'react';
import './exercise.css';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import brushSVG from './android.svg';
import brushImg from './brush.png';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Slider from '@material-ui/core/Slider';

function App() {
    // reference to canvas element, in JSX c
    const [zoom, setZoom] = useState(1.0);
	const [pan, setPan] = useState(1);
	const [tilt, setTilt] = useState(1);
	const [rotation, setRotation] = useState(0);
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
        // transform to take care of pant, tilt, zoom and rotation
		ctx.translate(pan, tilt);
		ctx.translate(w/2, h/2);
		ctx.scale(zoom, zoom);
		ctx.rotate(rotation/180*Math.PI);
		ctx.translate(-w/2, -h/2);
		// draw the png and svg images to canvas
		ctx.drawImage(imageEl.current, 0, w/3);
		ctx.drawImage(svgEl.current, 0, w/3);
		// in the end restore the transform
		ctx.restore();
    });

    return (
        <Box>
            <Box>
				<Typography variant="h6">Images on Canvas</Typography>
			</Box>
			<Box display="flex" style={{"position": "relative", "top": 0, "width": 40, "height": 600}}>
				<FormControlLabel
					labelPlacement='bottom'
					label="v-pos"
					control={
						<Slider
							value={-tilt}
							orientation="vertical"
							valueLabelDisplay="auto"
							step={1}
							min={-600}
							max={600}
							onChange={(event, value) => setTilt(-value)}
						/>
					}>
				</FormControlLabel>
				<Box>
					<canvas
						width={600}
						height={600}
						ref={canvasRef}
					/>
					<Box style={{"width": 600}}>
					<FormControlLabel
						style={{"width": 600}}
						labelPlacement='bottom'
						label="h-pos"
						control={
							<Slider
								value={pan}
								orientation="horizontal"
								valueLabelDisplay="auto"
								step={1}
								min={-600}
								max={600}
								onChange={(event, value) => setPan(value)}
							/>
						}>
					</FormControlLabel>
					</Box>
					<Box style={{"width": 600}}>
						<FormControlLabel
							style={{"width": 600}}
							labelPlacement='bottom'
							label="zoom"
							control={
							<Slider
								value={(zoom-1)*64}
								orientation="horizontal"
								valueLabelDisplay="auto"
								step={1}
								min={0}
								max={255}
								onChange={(event, value) => setZoom(value/64+1)}
							/>
						}>
					</FormControlLabel>
					</Box>
					<Box style={{"width": 600}}>
						<FormControlLabel
							style={{"width": 600}}
							labelPlacement='bottom'
							label="rot"
							control={
							<Slider
								value={rotation}
								orientation="horizontal"
								valueLabelDisplay="auto"
								step={5}
								min={0}
								max={180}
								onChange={(event, value) => setRotation(value)}
						/>
						}>
					</FormControlLabel>
					</Box>
				</Box>
			</Box>
                    <img onLoad={() => {}} src={brushImg} alt="" ref={imageEl} style={{ "display": "none" }} />
                    <img onLoad={() => {}} src={brushSVG} alt="" ref={svgEl} style={{ "display": "none" }} />
        </Box>
    );
}

export default App;