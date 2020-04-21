import React, { useRef, useEffect, useState } from 'react';
import './exercise.css';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Input from '@material-ui/core/Input';
import FormLabel from '@material-ui/core/FormLabel';

function App() {
    const [usdToPound, setUsdToPound] = useState(false);
    const [value, setValue] = useState('$ to £');

    const handleChange = event => {
        setValue(event.target.value);
        if (value === '$ to £') {
            setUsdToPound(true);
        } else if (value === '£ to $') {
            setUsdToPound(false);
        }
    };
    return(
        <Box>
            {usdToPound ? <DollarToPound/> : <PoundToDollar/>}
            <RadioGroup aria-label="color" name="color" value={value} onChange={handleChange}>
                <FormLabel component="legend">Direction:</FormLabel>
                <FormControlLabel value="£ to $" control={<Radio />} label="£ to $" />
                <FormControlLabel value="$ to £" control={<Radio />} label="$ to £" />
            </RadioGroup>
        </Box>
    )
}

function PoundToDollar() {
    const [amount, setAmount] = useState(null);
    const exchangeRate = 0.81;
    const enDate = new Intl.DateTimeFormat(
		'en-GB', 
		{day: 'numeric', month: 'long', year: 'numeric'}
    ).format(new Date());
    const enTime = new Intl.DateTimeFormat(
		'en-GB', 
		{hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short'}
    ).format(new Date());

    const handleChange = (event) => {
        setAmount(event.target.value);
      };

    return (
        <Box>
            <Typography>Exchange rate at </Typography>
            <Typography>{enDate} at {enTime} is</Typography>
            <Input 
            value={amount}
            onChange={handleChange}
            ></Input>
            <Typography> = {amount * exchangeRate}</Typography>
        </Box>
    );
}

function DollarToPound() {
    const [amount, setAmount] = useState(null);
    const exchangeRate = 1.23;
    const usDate = new Intl.DateTimeFormat(
		'en-US', 
		{day: 'numeric', month: 'long', year: 'numeric'}
    ).format(new Date());
    const usTime = new Intl.DateTimeFormat(
		'en-US', 
		{hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short'}
    ).format(new Date());

    const handleChange = (event) => {
        setAmount(event.target.value);
      };

    return (
        <Box>
            <Typography>Exchange rate at </Typography>
            <Typography>{usDate} at {usTime} is</Typography>
            <Input 
            value={amount}
            onChange={handleChange}
            ></Input>
            <Typography> = {amount * exchangeRate}</Typography>
        </Box>
    );
}

export default App;