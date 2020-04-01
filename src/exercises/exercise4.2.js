import React, { useState } from 'react';
import './exercise.css';
import logo from './logo.svg';
import Box from '@material-ui/core/Box'; 


function App() {
    const [image, setImage] = useState(logo);

    const imageDragStart = (event) => {
		event.dataTransfer.setData("image/jpeg", event.target.src);
		event.dataTransfer.dropEffect = "copy";
	}
	
	const imageOnDrop = (event) => {
		event.preventDefault();
		let file = event.dataTransfer.files[0];
		if (file) {
			let reader = new FileReader()
			reader.onloadend = function(evt) {
				setImage(reader.result);
			};
			reader.readAsDataURL(file)
		}
		
	}
	
	const imageDragOver = (event) => {
		event.preventDefault();
		event.dataTransfer.dropEffect = "copy"
	}

    return (
        <Box>
            <img src={image} 
            alt="drag n drop kuva" 
            id="DraggingImage" 
            onDragStart={imageDragStart} 
            draggable={true} 
            onDrop={imageOnDrop} 
            onDragOver={imageDragOver}/>
        </Box>
    );
}

export default App;