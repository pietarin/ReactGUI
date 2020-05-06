import React, { useState, useRef, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import FormLabel from '@material-ui/core/FormLabel';


function App() {
	const [result, setResult] = useState(null);
	const [results, setResults] = useState(null);
	const [finderStarted, setFinderStarted] = useState(false);
	const [numberStatistics, setNumberStatistics] = useState({});
	const [finder, setFinder] = useState(null);
	const [firstInput, setFirstInput] = useState("");
	const [secondInput, setSecondInput] = useState("");


	const findPrimes = (event) => {
		setResult(null);
		setResults(null);
		let fndr = new Worker('primesFinder.js');
		setFinder(fndr);
		setFinderStarted(true);
		// send message to the worker
		fndr.postMessage({ startFrom: parseInt(firstInput) });
		// receive results from the worker
		fndr.onmessage = function (message) {
			if (message.data.prime) {
				setResult(message.data.prime);
			}
			if (message.data.primes) {
				setResults(message.data.primes);
				setFinderStarted(false);
				let ar = {};
				for (let r in message.data.primes) {
					let textValue = "" + message.data.primes[r];
					for (let c in textValue) {
						let letter = textValue.charAt(c);
						if (!ar.hasOwnProperty(letter)) {
							ar[letter] = { value: 1, name: textValue.charAt(c) };
						} else {
							ar[letter].value += 1;
						}
					}
				}

				setNumberStatistics(ar);
			}
		}
	}

	const analyse = (event) => {
		console.log("Posting worker a stop message");
		finder.postMessage({ stop: true });
		setFinderStarted(false);
	}

	let resultContent = <Typography>...</Typography>
	if (results !== null) {
		resultContent = results.length;
	}

	const handleChangeOne = (event) => {
		setFirstInput(event.target.value);
	};

	const handleChangeTwo = (event) => {
		setSecondInput(event.target.value);
	};

	return (
		<Box>
			<FormLabel>From</FormLabel>
			<Input
				value={firstInput}
				onChange={handleChangeOne}
			/>
			<br />
			<FormLabel>To</FormLabel>
			<Input
				value={secondInput}
				onChange={handleChangeTwo}
			/>

			<Typography>Prime: {result}</Typography>
			{console.log(result)}
			<Button
				variant="outlined"
				disabled={finderStarted}
				color="primary"
				onClick={findPrimes}>
				Find primes
			</Button>

			<Button
				variant="outlined"
				disabled={result === null}
				color="primary"
				onClick={analyse}>
				Calculate statistics
			</Button>
			<Box >
				<Typography>Found primes</Typography>
				{resultContent}
			</Box>
		</Box>
	);
}

export default App;