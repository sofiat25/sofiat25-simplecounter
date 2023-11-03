//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";



//import your own components
import SimpleCounter from "./component/home.jsx";
let counter = 0;
setInterval(function() {
	const  four = Math.floor(counter/1000);
	const  three = Math.floor(counter/100);
	const  two = Math.floor(counter/10);
	const  one = Math.floor(counter/1);
console.log(four,three, two, one); 

counter++; 
ReactDOM.render(
	<SimpleCounter  digitOne={ one} digitTwo={two} digitThree={three} digitFour={four} />,
	document.querySelector("#app"));
	
}, 1000);



// const  four = Math.floor(counter/1000);
// 	const  three = Math.floor(counter/100);
// 	const  two = Math.floor(counter/10);
// 	const  one = Math.floor(counter/1);
// console.log(four,three, two, one); 

// counter++; 

// digitThree={three} digitFour={four}