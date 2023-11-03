//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";



//import your own components
import SimpleCounter from "./component/home.jsx";
let seg, seg2, min, min2, hour, hour2 

seg = seg2 = min = min2 = hour = hour2 = 0;
setInterval(function() {
		seg++
	if (seg == 9){
		seg = 0
		seg2++
	}
	if (seg2 == 6) {
		seg = 0
		seg2 = 0
		min++
	}
	if ( min == 9){
		seg = 0
		seg2 = 0
		min=0
		min2++
	}



ReactDOM.render(
	<SimpleCounter  digitOne={ seg} digitTwo={seg2} digitThree={min} digitFour={min2}/>,
	document.querySelector("#app"));
	
}, 1000);



// const  four = Math.floor(counter/1000);
// 	const  three = Math.floor(counter/100);
// 	const  two = Math.floor(counter/10);
// 	const  one = Math.floor(counter/1);
// console.log(four,three, two, one); 

// counter++; 

// digitThree={three} digitFour={four}