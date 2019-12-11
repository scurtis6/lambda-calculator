import React, {useState} from "react";

const Display = (props) => {
  console.log("Display", props, props.number);

  // const [count] = useState(0);
return <div className="display">{props.number}</div>;
};

export default Display;