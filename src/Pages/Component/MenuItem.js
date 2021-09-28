import React from "react";
import "../baseStyle.css"
import { Burger, Button, Container, Drawer} from '@mantine/core';
import {Link} from 'react-router-dom'
import "../home.style.css"
import {useState} from "react";
function MenuItem() {
    const [opened, setOpened] = useState(false);
    return (
        <div>
        <Button style={{backgroundColor:'white', margin:'2%'}} onClick={() => setOpened(!opened)}><Burger opened={opened} /></Button>
        <Drawer opened={opened} onClose={() => setOpened(false)} padding="xl" size="xl">
            <Container style = {{width:'100%', position: 'absolute',
            top: '40%',
            left: '50%',
            transform: 'translate(-50%, -50%)', textAlign:'center'}}>
                <h2 style={{display: opened ? 'block' : 'none'}}><Link to="/" class='navlink'>home</Link></h2>
                <h2 style={{display: opened ? 'block' : 'none', paddingTop:'15%'}}><Link to="/about" class='navlink'>about</Link></h2>
                <h2 style={{display: opened ? 'block' : 'none', paddingTop:'15%'}}><Link to="/classes" class='navlink'>classes</Link></h2>
                <h2 style={{display: opened ? 'block' : 'none', paddingTop:'15%'}}><Link to="/projects" class='navlink'>projects</Link></h2>
            </Container>
        </Drawer>
        </div>
        
    )
}

export default MenuItem;