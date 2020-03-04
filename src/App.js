import React from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function App() {
  const [autofill, setAutofill] = React.useState(true);
  document.title = 'Names';

  return(
    <div>
    {autofill ? <Form setAutofill={setAutofill}/> : <Autofilled /> }
    </div>
  )
}

function Autofilled() {
  const [isActive, setActive] = React.useState(true);

  return (
    <div className="App">
			<Box>
				<TextField id="firstname" label="First name: " defaultValue="Jaakko" />
				<TextField disabled={isActive} id="middlename" label="Middle name: " defaultValue="mikalie"/>
        <br></br>
        <FormControlLabel control={
					<Checkbox onClick={() => setActive(!isActive)} value="secondary"  />
				} 
				label="Middle name"
			/>
      <br></br>
      <TextField id="lastname" label="Last name: " defaultValue="Hakulinen"/>
			</Box>
      <br></br>
			<Button variant="contained" color="primary" >
				Autofilled
			</Button>
		</div>
  );
}

function Form(props) {
  const [isActive, setActive] = React.useState(false);
  

  return (
    <div className="App">
			<Box>
				<TextField id="firstname" label="First name: " />
				<TextField disabled={!isActive} id="middlename" label="Middle name: " />
        <br></br>
        <FormControlLabel control={
					<Checkbox onClick={() => setActive(!isActive)} value="secondary"  />
				} 
				label="Middle name"
			/>
      <br></br>
      <TextField id="lastname" label="Last name: " />
			</Box>
      <br></br>
			<Button variant="contained" color="primary" onClick={() => {props.setAutofill(false)}} >
				Autofill
			</Button>
		</div>
  );
}

export default App;
