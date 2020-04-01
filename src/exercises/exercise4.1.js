import React, { useState } from 'react';
import './exercise.css';
import Typography from '@material-ui/core/Typography';

function App() {
    const [textOne, setTextOne] = React.useState("Some text");
    const [textTwo, setTextTwo] = React.useState("More text");
    const [textThree, setTextThree] = React.useState("Even more text");

    const textDragStart = (event, index) => {
		event.dataTransfer.setData("text/plain", textOne);
		event.dataTransfer.setData("text/html", "<h2>" + textOne + "</h2>");
		event.dataTransfer.dropEffect = "copy";
    }
    
    
	const textOnDrop = (event, index) => {
		var items = event.dataTransfer.items;
		for (var i = 0; i < items.length; ++i) {
			var item = items[i];
			if (item.kind === 'string') {
				event.preventDefault();
				const data = event.dataTransfer.getData("text/plain");
				setTextOne(data);
				return;
			}
		}
		event.preventDefault();
	}
	
	const textDragEnter = (event, index) => {
		var items = event.dataTransfer.items;
		for (var i = 0; i < items.length; ++i) {
			var item = items[i];
			if (item.kind === 'string') {
				event.preventDefault();
				return;
			}
		}
	}
	
	const textDragOver = (event, index) => {
		event.preventDefault();
		event.dataTransfer.dropEffect = "copy"
    }
    
    
	const pagePaste = (event, index) => {
		let paste = event.clipboardData.getData('text');
		setTextOne(paste);
		event.preventDefault();
	}
	
	const pageCopy = (event, index) => {
		event.clipboardData.setData('text/plain', textOne);
		event.preventDefault();	
	}

    return (
        <div style={{width: 400, height: 400}} onPaste={pagePaste} onCopy={pageCopy} contentEditable={true}>
            <Typography id="DraggingText" variant='h2'
				onDragStart={textDragStart}
                index = {"1"}
				draggable={true} 
				onDrop={textOnDrop} 
				onDragEnter={textDragEnter} 
				onDragOver={textDragOver}>
				{textOne}
			</Typography>
            <Typography id="DraggingText" variant='h2' 
				onDragStart={textDragStart} 
				draggable={true}
                index = {"2"} 
				onDrop={textOnDrop} 
				onDragEnter={textDragEnter} 
				onDragOver={textDragOver}>
				{textTwo}
			</Typography>
            <Typography id="DraggingText" variant='h2' 
				onDragStart={textDragStart} 
				draggable={true} 
                index = {"3"}
				onDrop={textOnDrop} 
				onDragEnter={textDragEnter} 
				onDragOver={textDragOver}>
				{textThree}
			</Typography>
        </div>
        
    );
}

export default App;