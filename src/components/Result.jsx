import React from 'react';
import "./Result.css"

const Result = ({result}) => {
    const { ip, 
    location,
isp} = result;


    return (
        
<div  >

        <div className="result">
            
            <div className="address">
                <h4>IP ADDRESS </h4>
                <h2> {ip}</h2>
               

            </div>
            <div className="location">
                <h4>LOCATION </h4>
    <h2>{result.location?.region}</h2>
               
            </div>
            <div className="timeZone">
                <h4> TIMEZONE </h4>
                <h2>UTC: {result.location?.timezone  }</h2>
                
                
            </div>
            <div className="isp">
                <h4>ISP </h4>
                <h2>{isp}</h2>
               
                
            </div>
        </div>
        </div>

     

    )
} 
export default Result;
