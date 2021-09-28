import React from "react";
import "./baseStyle.css"
import "./home.style.css"
import MenuItem from "./Component/MenuItem"
function Home() {
    // const [opened, setOpened] = useState(false);
    return (
        <div>
            <MenuItem />
            <div style = {{width:'100%', position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'}}>
                <h1 style={{fontSize:'2.5em',textAlign:'center'}}>Jonah Tjandra</h1>
                <p style={{fontSize:'1.2em', textAlign:'center'}}>passionate about Software Development and Tech 🔥</p>
                <img style={{position: 'absolute',
                top: '30%',
                left: '50%',
                transform: 'translate(-50%, -100%)', zIndex:'-2'}} width="100px" src="jonah_memoji.PNG"/>
            </div>
        </div>

    )
}

export default Home;