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
                <div className="profile-image">
                    <img className="profile-image" src="jonah.jpg"></img>
                </div>
                <div className = "content">
                    <h2>👋 Intro</h2>
                    <p style={{fontSize:'1.2em'}}>Hello World! My name is Jonah. I am a Computer Science Student @ University of Illinois Urbana - Champaign. I am passionate in building robust and scalable systems. I want to make useful products that benefit society. I am also deeply interested in understanding the world. When I was a kid, I always wanted to become a physicist. Today, I take this interest of mine with a different approach: through mathematics and computer science. Ever since I took my first data structures course, I find it exhilarating to model real world problems using data structures and solving them algorithmically. I have the desire and drive to further my understanding of this field.</p>
                    <h2>📚 My Interests</h2>
                    <p style={{fontSize:'1.2em'}}>Unlike the stereotypical CS student who is exclusively obsessed with MANGA companies, I am also interested in high-growth startups. I value learning and taking up new challenges. I want to learn not only about the technology but also about the business and strategy of the company. So if you are a growing startup needing new talent, hit me up for an internship! Apart from the tech industry, I am also interested in quantitative finance. As soon as I got introduced to this field, I am determined to learn more. I am currently a member of our University's premier Quantitative Finance club: Quant, and I am joining various events outside of university. </p>
                    <footer>
                        <div className="links">
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
                                href="Resume2022.pdf"
                                target="_blank"
                                circular
                                icon="file alternate outline"
                            />
                        </div>
                    </footer>
                </div>
            </div>          
        </div>
    );
}

export default Home;