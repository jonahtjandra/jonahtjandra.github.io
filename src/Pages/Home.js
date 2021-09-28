import React from "react";
import "./baseStyle.css"
import { Text } from '@mantine/core';
function Home() {
    return (
        <div style = {{width:'100%', position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'}}>
            <h1 style={{fontSize:'2.3em',textAlign:'center'}}>Jonah Tjandra</h1>
            <h1 style={{fontSize:'2em',textAlign:'center'}}>Software Developer</h1>
        </div>
    )
}

export default Home;