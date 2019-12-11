import React, {useState} from "react";
import NumberButton from "./NumberButton";
import {numbers} from "../../../data";

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

// export default function Numbers(){}

const Numbers = (props) => {
  // STEP 2 - add the imported data to state

  const [buttonNumber, setButtonNumber] = useState(numbers);
  console.log("Numbers", props);
  return (
    <div>
         {/* /* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {buttonNumber.map(number=> {
         return <NumberButton 
         text={number} 
         key={number} 
         addNumber={props.addNumber}/>
       })}
    </div>
  );
      }
      // alternate solution below
      // const Numbers = (props) => 
      //   console.log("Numbers", props);
      //   return (
      //     <div>
      //        {numbers.map(number=> {
      //          return <NumberButton 
      //          text={number} 
      //          key={number} 
      //          addNumber={props.addNumber}/>
      //        })}
      //     </div>
      //   );
      //       }
      export default Numbers;