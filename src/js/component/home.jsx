import React from "react";
import PropTypes from "prop-types"; 
import ReactDOM from "react-dom";


//create your first component
function  SimpleCounter(props)  {
	return (
		<div className="counter">
    <div className="col"><i className="far fa-clock"></i>	
    </div>
    <div className="col-four">{props.digitFour}</div>
    <div className="col-three">{props.digitThree }</div>
	<div className="col-two">{props.digitTwo }</div>
	<div className="col-one">{props.digitOne }</div>
  </div>);
}
SimpleCounter.propTypes ={
digitFour: PropTypes.number,
digitThree: PropTypes.number,
digitTwo: PropTypes.number,
digitOne: PropTypes.number
};



export default SimpleCounter;
