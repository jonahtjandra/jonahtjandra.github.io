import React, {useRef} from "react";
import "./baseStyle.css"
import "./home.style.css"
import MenuItem from "./Component/MenuItem"
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import {
    Button
  } from "semantic-ui-react";
  // Little helpers ...
const url = (name: string, wrap = false) =>
`${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
function Home() {
    const parallax = useRef<IParallax>(null!)
    return( 
        <div>
            <div style={{ width: '100%', height: '100%', background: '#253237' }}>
            <Parallax ref={parallax} pages={3}>
                <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
                <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />
                <ParallaxLayer
                offset={0}
                speed={0}
                factor={3}
                style={{
                    backgroundSize: 'cover',
                }}
                />

                <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
                <img src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
                </ParallaxLayer>

                <ParallaxLayer
                offset={2.5}
                speed={-0.4}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    pointerEvents: 'none',
                }}>
                <img src={url('earth')} style={{ width: '60%' }} />
                </ParallaxLayer>

                <ParallaxLayer
                offset={2}
                speed={-0.3}
                style={{
                    backgroundSize: '80%',
                    backgroundPosition: 'center',
                    backgroundImage: url('clients', true),
                }}
                />

                <ParallaxLayer
                offset={0}
                speed={0.1}
                onClick={() => parallax.current.scrollTo(1)}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <img style={{ width: '120vh'}} src="space.svg"/>
                    <div style = {{width:'100%', position: 'absolute',
                    top: '55%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'}}>
                    <p style={{fontSize:'2em', color:"white", textAlign:'center'}}>Jonah Tjandra</p>
                    <p style={{fontSize:'1.2em', color:"white", textAlign:'center'}}>Passionate about Software Engineering and building great Products</p>
                    <div style = {{position: 'absolute',
                            top: '120%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)', backgroundColor: 'rgba(0,0,0,0)'}}>
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
                </ParallaxLayer>

                <ParallaxLayer
                offset={1}
                speed={0.1}
                onClick={() => parallax.current.scrollTo(2)}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <img src={url('bash')} style={{ width: '40%' }} />
                </ParallaxLayer>

                <ParallaxLayer
                offset={2}
                speed={-0}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                onClick={() => parallax.current.scrollTo(0)}>
                <img src={url('clients-main')} style={{ width: '40%' }} />
                </ParallaxLayer>
            </Parallax>
            </div>
            <MenuItem />
        </div>
    );
}

export default Home;