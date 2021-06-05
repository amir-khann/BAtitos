import React from 'react'
import Button from './Button'

// Import react-circular-progressbar module and styles
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";
import Example from './Example';



const Progress = (props) => {
    const percentage1=70;
    const percentage2=20;
    const percentage3=90;
    const percentage4=80;
    return (
        <div className="row1">
            <div className="col"><Button  btnType="second" btnText="SIGN NOW"/></div>
            <div className="progress">
            <div style={{ width: "7.5em", height: "7.5em" }}> <CircularProgressbar
        value={percentage1}
        text={percentage1}
        strokeWidth={15}
        styles={buildStyles({
          textColor: "white",
          strokeLinecap: "butt",
          pathColor:"#2494FF",
          trailColor: "#181818"
        })}
      />
      <p>DAYS</p>
      </div>
    
            <div style={{ width: "7.5em", height: "7.5em" }}> <CircularProgressbar
        value={percentage2}
        text={percentage2}
        strokeWidth={15}
        styles={buildStyles({
          textColor: "white",
          strokeLinecap: "butt",
          pathColor:"#FACD30",
          trailColor: "#181818"
        })}
      />
      <p>HOURS</p>
      </div>
            <div style={{ width: "7.5em", height: "7.5em" }}> <CircularProgressbar
        value={percentage3}
        text={percentage3}
        strokeWidth={15}
        styles={buildStyles({
          textColor: "white",
          strokeLinecap: "butt",
          pathColor:"#EE4C5D",
          trailColor: "#181818"
        })}
      />
      <p>MINUETS</p>
      </div>
            
       <div style={{ width: "7.5em", height: "7.5em" }}> <CircularProgressbar
        value={percentage4}
        text={percentage4}
        strokeWidth={15}
        styles={buildStyles({
          textColor: "white",
          strokeLinecap: "butt",
          pathColor:"#28E6FE",
          trailColor: "#181818"
        })}
      />
      <p>SECONDS</p>
      </div>
            
      
        </div>
        </div>
    )
}

export default Progress
