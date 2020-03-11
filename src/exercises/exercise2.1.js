import React, { useState } from 'react';
import './exercise.css';
import Box from '@material-ui/core/Box';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import 'typeface-roboto';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

function App() {
    const [color, setColor] = useState("text.primary");

    const handleChange = event => {
        setColor(event.target.value);
    };

    return (
        <Card>
            <CardContent>
                <Typography variant="h4" component="h2" >
                    <Box color={color} fontWeight="fontWeightBold">
                        Colors
                    </Box>
                </Typography>
            </CardContent>
            <CardActions>
                <RadioGroup aria-label="color" name="color" value={color} onChange={handleChange}>
                    <FormControlLabel value="text.primary" control={<Radio />} label="First colour" />
                    <FormControlLabel value="secondary.main" control={<Radio />} label="Second colour" />
                </RadioGroup>
            </CardActions>
        </Card>
    );
}

export default App;