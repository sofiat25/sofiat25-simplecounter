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
	if (seg == 10){
		seg = 0
		seg2++
	}
	if (seg2 == 10) {
		seg = 0
		seg2 = 0
		min++
	}
	if ( min == 10){
		seg = 0
		seg2 = 0
		min=0
		min2++
	}



ReactDOM.render(
	<SimpleCounter  digitOne={ seg} digitTwo={seg2} digitThree={min} digitFour={min2}/>,
	document.querySelector("#app"));

}, 1000);
