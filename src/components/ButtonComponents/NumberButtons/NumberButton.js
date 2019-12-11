import React from "react";
 /* Display a button element rendering the data being passed down from the parent container on props */
const NumberButton = (props) => {
  // console.log("NumberButton", props);
  
  return (
  
    <button className="number_button" onClick={() => props.addNumber(props.text)}> 
      {props.text}
    </button>
    
  );
  };

export default NumberButton;