import React from "react";

const OperatorButton = props => {
  console.log("OperatorButton", props);
  return (
    <>
    <button className="operator_button" onClick={() => props.addOperator(props.op.value)}>
      {props.op.char}
    </button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default OperatorButton;
