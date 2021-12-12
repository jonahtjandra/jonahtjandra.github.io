import React from "react";
import {Link} from 'react-router-dom'
import MenuItem from "./Component/MenuItem"
import {
    Button, Divider
  } from "semantic-ui-react";
import "./about.style.css"
function About() {
    return (
        <div>
            <MenuItem />
            <div className="mainContainerAbout">
                <div />
                <div>
                    <p style = {{fontSize:"1.1em"}}>
                    Hi, My name is Jonah and I am a sophomore at UIUC studying CS. I am passionate about building great products and providing great user experiences. I am interested in building systems that scale. Therefore, I am constantly looking for opportunities to better hone my skills, and learn more about the tech industry. Right now, I am the web lead and project manager for CS 196 and CS 128 Honors, creating new features like the Gradebook system, lectures page. I am also a technical project manager for that course. I also ontribute to multiple on-going projects under the Caesar Research Group such as the networking app: PeopleWeave. Outside of college, I continue to build upon my skills by developing side projects. My favorite one so far is where we built a computer vision service that allows user to diagnose their skin through a web app. Last summer, I was also interning at Code Certain, a startup, as a Software Engineer doing Machine Learning. 
                    </p>
                    <Button.Group vertical fluid>
                        <Link to="/classes" class='navlink'><Button
                        href=""
                        content="Click to see what interesting classes I have taken here."
                        icon="university"
                        size="large"
                        /></Link>
                        
                        <Divider horizontal>and</Divider>

                        <Link to="/projects" class='navlink'><Button
                        Link to="/project"
                        content="Click here to see some cool projects I have made"
                        icon="github"
                        size="large"
                        /></Link>
                    </Button.Group>
                </div>
                <div />
            </div>
        </div>
    )
}

export default About;