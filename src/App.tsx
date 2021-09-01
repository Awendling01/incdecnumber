import React, { useState } from "react";

import "./App.css";

const companies = [
	{name: "Company One", category: "Finance", start: 1981, end: 2003},
	{name: "Company Two", category: "Retail", start: 1992, end: 2008},
	{name: "Company Three", category: "Auto", start: 1999, end: 2007},
	{name: "Company Four", category: "Retail", start: 1989, end: 2010},
	{name: "Company Five", category: "Technology", start: 2009, end: 2014},
	{name: "Company Six", category: "Finance", start: 1987, end: 2010},
	{name: "Company Seven", category: "Auto", start: 1986, end: 1996},
	{name: "Company Eight", category: "Technology", start: 2011, end: 2016},
	{name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];  
const nums = [1,2,3,4,5,6,7,8,9];


const evenNumsObj = nums.filter((n) => n % 2 === 0 ).map((n, index) => {
	return {value:n, id:index} });


console.log(JSON.stringify(evenNumsObj))









// Code problem 1: Given the following array of integers:
// [1,2,3,4,5,6,7,8,9]
// write a function that returns an (array of objects) with (all even inputs) (with the following form):
// {id: number<unique>, value: <result>}









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
