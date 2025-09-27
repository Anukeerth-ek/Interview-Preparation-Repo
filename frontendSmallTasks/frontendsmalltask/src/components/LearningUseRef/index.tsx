import React, { useEffect, useRef, useState } from "react";

const UseRefHook = () => {
     const myRef = useRef(0);
     const [value, setValue] = useState(0);
  const handleRefValue = () => {
    myRef.current = myRef.current + 1;
  }
  
  const handleStateValue = () => {
    setValue((prev)=> prev + 1)
  }
     return (
          <>
   

         <button onClick={()=> handleRefValue()}>UseRefHook:{ myRef.current}</button>
         <button onClick={()=> handleStateValue()}>UseState:{ value}</button>
         
          </>
     );
};

export default UseRefHook;
