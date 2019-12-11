import React, {useState} from "react";
import OperatorButton from "./OperatorButton";
import {operators} from "../../../data";
// import { userInfo } from "os";

//import any components needed

//Import your array data to from the provided data file

const Operators = (props) => {
  // STEP 2 - add the imported data to state
  const [buttonOperator] = useState(operators);
  return (
    <div className="operators_button">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {buttonOperator.map(operator => 
         <OperatorButton 
         op={operator}
         key={operator} 
         addOperator={props.addOperator}/>
       )};
    </div>
  );
};

export default Operators;