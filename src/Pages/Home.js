import {React, useState} from "react";
import "./baseStyle.css"
import "./home.style.css"
import MenuItem from "./Component/MenuItem"
import {
    Button
  } from "semantic-ui-react";
function Home() {
    return(
        <div>
            <div style = {{width:'100%', position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'}}>
                <p style={{fontSize:'2.5em',textAlign:'center'}}>Jonah Tjandra</p>
                <p style={{fontSize:'1.2em', textAlign:'center'}}>Passionate about Software Development and looking for opportunities to build great products</p>
                <div style = {{position: 'absolute',
                        top: '120%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)', backgroundColor: 'white'}}>
                    <Button 
                        href="https://github.com/jonahtjandra"
                        target="_blank"
                        circular
                        icon="github"
                    />
                    <Button
                        href="https://www.linkedin.com/in/jonah-tjandra/"
                        target="_blank"
                        circular
                        icon="linkedin"
                    />
                    <Button
                        href="resume.pdf"
                        target="_blank"
                        circular
                        icon="file alternate outline"
                    />
                </div>
            </div>          
            <MenuItem />
        </div>
    );
}

export default Home;