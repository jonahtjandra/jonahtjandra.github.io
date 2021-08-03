import "./App.css";
import React from "react";
import {
  Button,
  Icon,
  Header,
  Container,
  Segment,
  Divider,
  Image,
} from "semantic-ui-react";
import Classes from "./Classes";
import Projects from "./Projects";

function App() {
  return (
    <div>
      <div class="container-container">
        <section id="landing" class="landing">
          <Container text>
            <Segment style={{ padding: "8em 0em" }} vertical>
              <Header
                as="h2"
                content="Jonah Tjandra"
                inverted
                style={{
                  color: "black",
                  fontSize: "5em",
                  fontWeight: "normal",
                  marginBottom: 0,
                  marginTop: "1em",
                }}
              />
              <Header
                as="h2"
                content="Computer Science student and Software Engineer"
                inverted
                style={{
                  color: "black",
                  fontSize: "1.5em",
                  fontWeight: "normal",
                  marginBottom: 0,
                  marginTop: 0,
                }}
              />
              <a href="#section-2">
                <Button
                  style={{ marginTop: "1em", marginBottom: "1em" }}
                  size="huge"
                  animated
                >
                  <Button.Content inverted visible>
                    Get to know more about me
                  </Button.Content>
                  <Button.Content hidden>
                    <Icon name="right arrow" />
                  </Button.Content>
                </Button>
              </a>
              <Button
                href="https://github.com/jonahtjandra"
                target="_blank"
                circular
                color="github"
                icon="github"
              />
              <Button
                href="https://www.linkedin.com/in/jonah-tjandra/"
                target="_blank"
                circular
                color="linkedin"
                icon="linkedin"
              />
            </Segment>
          </Container>
        </section>
        <section id="section-2" class="intro">
          <Segment compact style={{ top: 0 }}>
            <Image
              src="/jonah.jpg"
              size="tiny"
              href="#section-3"
              floated="left"
            />
            <p>
              Hi! My name is Jonah and I am a sophomore at the University of
              Illinois Urbana - Champaign studying Computer Science. I have
              always been fascinated with science and problem solving as a kid.
              I gravitate towards it because of the progress, excitement and
              satisfaction that comes along with it. It inspires and motivates
              me. Being able to program means a lot to me. It gives me the
              freedom to express my creativity, think systematically, and solve
              cool, unique, and challenging problems. To pursue this passion, I
              joined Projects@ACM last semester doing cool projects in machine
              learning to predict covid-19 cases. I was also part of the CS196
              Course Staff, and I got a lot during this experience, from project
              managing to creating a gradebook system which will be implemented
              next semester!{" "}
              <a href="https://cs196.cs.illinois.edu/" target="_blank">
                take a look here
              </a>{" "}
              Woohoo! Currently I am interning at Code Certain, a student
              startup, as a Software Engineer doing Machine Learning.
            </p>
            <Segment>
              <Button.Group vertical fluid>
                <Button
                  href="#section-3"
                  content="Click to see what interesting classes I have taken here. The Illinois CS undergraduate program is ranked 5th by U.S. News & World."
                  icon="university"
                  size="large"
                />
                <Divider horizontal>and</Divider>
                <Button
                  href="#section-4"
                  content="Click here to see some cool projects I have made"
                  icon="github"
                  size="large"
                />
              </Button.Group>
            </Segment>
          </Segment>
        </section>
        <section class="projects" id="section-3">
          <Container text>
            <Header
              textAlign="center"
              as="h1"
              content="Interesting courses I have taken"
              style={{
                color: "black",
                fontSize: "2em",
                fontWeight: "normal",
                marginBottom: "1em",
                marginTop: "1em",
              }}
            />
          </Container>
          <Classes />
        </section>
        <section class="contact" id="section-4">
          <Projects />
        </section>
      </div>
    </div>
  );
}

export default App;
