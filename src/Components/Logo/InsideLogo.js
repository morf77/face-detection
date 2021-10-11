import React from 'react';
import Tilt from "react-tilt";
import "./Logo.css";
import brain from './logo.svg'

const InsideLogo=()=>{
    return (
        <Tilt className="Tilt b32 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 , borderRadius:"100%"}} >
            <div className="Tilt-inner"> 
                <img alt="logo" src={brain} style={{width:"80%",marginTop:'12px'}}/>
            </div>
        </Tilt>
    )
}

export default InsideLogo;