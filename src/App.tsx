import React, { useState } from "react";

import "./App.css";

const companies = [
	{ name: "Company One", category: "Finance", start: 1981, end: 2003 },
	{ name: "Company Two", category: "Retail", start: 1992, end: 2008 },
	{ name: "Company Three", category: "Auto", start: 1999, end: 2007 },
	{ name: "Company Four", category: "Retail", start: 1989, end: 2010 },
	{ name: "Company Five", category: "Technology", start: 2009, end: 2014 },
	{ name: "Company Six", category: "Finance", start: 1987, end: 2010 },
	{ name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
	{ name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
	{ name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

// -----------------------------------------------  NUM 1  ---------------------------------------------------------------------

// Code problem 1: Given the following array of integers:
// [1,2,3,4,5,6,7,8,9]
// write a function that returns an (array of objects) with (all even inputs) (with the following form):
// {id: number<unique>, value: <result>}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const evenNumsObj = nums
	.filter((n) => n % 2 === 0)
	.map((n, index) => {
		return { value: n, id: index };
	});

console.log(JSON.stringify(evenNumsObj));

//
//
//
//
//
//
//
//
//
//
//
//
// ----------------------------------------------  NUM 2  --------------------------------------------------------------------

//  Step1: write an array with the type {city: string, state: string, population: number}[]
//  Step 2: write a function that accepts the array from step 1, and returns an array of all cities with populations greater than
//  2 million but less than 4 million,

//  sorted by State, then population as well as the total population of all the cities that are
//  not removed from the list.

//  This can be accomplished without any custom utility functions.

const cityStatePop = [
	{ city: "New York City", state: "NY", Population: 8622357 },
	{ city: "Los Angeles", state: "CA", Population: 4085014 },
	{ city: "Chicago", state: "IL", Population: 2670406 },
	{ city: "Houston", state: "TX", Population: 2378146 },
	{ city: "Phoenix", state: "AZ", Population: 1743469 },
	{ city: "Philadelphia", state: "PA", Population: 1590402 },
	{ city: "San Antonio", state: "TX", Population: 1579504 },
	{ city: "San Diego", state: "CA", Population: 1469490 },
	{ city: "Dallas", state: "TX", Population: 1400337 },
	{ city: "San Jose", state: "CA", Population: 1036242 },
];

const funkSoulBrotha = cityStatePop.filter(
	(location) => location.Population > 2000000 && location.Population < 4000000
);
console.log(funkSoulBrotha);
//
//
//
//
//
//
//
//
//
//
//
//
//

const App = () => {
	const [count, setCount] = useState(0);

	const decrementCount = () => {
		setCount((previousCount) => previousCount - 1);
	};
	const incrementCount = () => {
		setCount((previousCount) => previousCount + 1);
	};

	return (
		<div style={{ display: "flex", margin: 30 }}>
			<button onClick={decrementCount}>-</button>
			<div style={{ padding: 5 }}>{count}</div>
			<button onClick={incrementCount}>+</button>
		</div>
	);
};

export default App;
