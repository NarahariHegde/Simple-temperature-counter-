import React, { useState } from "react";

const Temperature = () => {
  const [temp, setTemp] = useState(0);
const [color,setColor]=useState('')
 var blue = "rgb(97, 155, 238)";
  const add = () => {
    setTemp(temp + 1);

    if (temp >= 15) {
      setColor("red");
    } else if (temp < 15 ) {
      setColor("white");
    }
    if(temp<-1)
    {
        setColor(blue)
        
    }
   
  };

  const sub = () => {
    setTemp(temp - 1);

    if(temp<=0)
    {
        setColor(blue)
        // alert("its cold");
    }
    else if(temp>0)
    {
        setColor('white')
    }
     if (temp>16) {
       setColor("red");
     }
  };
  return (
    <>
      <div className="main">
        <div className="temp" style={{background:color}}>
          <h1>{temp} %</h1>
        </div>
        <div className="section">
          <button onClick={add}>+</button>
          <button onClick={sub}>-</button>
        </div>
      </div>
    </>
  );
};

export default Temperature;
