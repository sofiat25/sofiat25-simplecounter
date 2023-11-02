//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";



//import your own components
import SimpleCounter from "./component/home.jsx";

let counter = 0;

	const  four = Math.floor(counter/1000);
	const  three = Math.floor(counter/100);
	const  two = Math.floor(counter/10);
	const  one = Math.floor(counter/1);
console.log(four,three, two, one); 




//render your react application
ReactDOM.render(<SimpleCounter digitFour={ four} digitThree={ three} digitTwo={two} digitOne={ one}/>,
document.querySelector("#app"));

