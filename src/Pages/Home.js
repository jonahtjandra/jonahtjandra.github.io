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
            <MenuItem />
            <div className="homeContainer" style={{paddingTop:"2%"}}>
                <div/>
                <div>
                    <p style={{fontSize:'1.4em'}}>Passionate about Software Development and looking for opportunities to build great products and tools</p>
                    <h2>Intro</h2>
                    <p style={{fontSize:'1.2em'}}>Hello World! My name is Jonah. I chose to study Computer Science, because I am curious how computers and algorithms that make the world revolve works. Growing up I have never shyed away from a challenge to solve a problem. I enjoy the process, and welcome them with open arms. My approach to solving problems is to structurally boil down the problem into smaller problems, where solutions are usually trivial or intuitive. By doing so, you can find patterns which you can use to solve the entire problem.</p>
                    <h2>My Interests</h2>
                    <p style={{fontSize:'1.2em'}}>Looking for opportunities to disrupt, innovate, and solve real world problems with Computer Science. Interested in systems and artificial intelligence. I want to build systems and products that will be benefit society. I am interested in the quantitative finance and the software industry.</p>
                    <footer>
                        <div >
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
                                href="Resume2021.pdf"
                                target="_blank"
                                circular
                                icon="file alternate outline"
                            />
                        </div>
                    </footer>
                </div>
                <div/>
            </div>          
        </div>
    );
}

export default Home;