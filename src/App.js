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
  Menu,
} from "semantic-ui-react";
import Classes from "./Classes";
import Projects from "./Projects";

function App() {
  return (
    <div>
      <Menu
        style={{ position: "fixed", top: 0, width: "100%", zIndex: 10 }}
        fluid
        size="large"
      >
        <Menu.Item icon="home" href="#landing" />
        <Menu.Item name="Intro" href="#section-2" />
        <Menu.Item name="Classes" href="#section-3" />
        <Menu.Item name="Projects" href="#section-4" />
        <Menu.Item name="Me" href="#section-5" />
      </Menu>
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
          <Segment style={{ top: 10 }}>
            <Image
              src="/jonah.jpg"
              size="tiny"
              href="#section-3"
              floated="left"
            />
            <p>
              Hi! My name is Jonah and I am a sophomore at the University of
              Illinois Urbana - Champaign studying Computer Science. I
              remembered when I was 11 years old, I got my first introduction to
              programming with basic, an old programming language developed by
              Microsoft. I remembered tinkering with it in computer class. Even
              if that day was not a basic lesson, I would finish up early and
              spend my time on basic. Since that moment on, I fell in love with
              computers and started to do some web development projects and
              joined a computer club in highschool. College not only continues
              to develop my passion for computers but also inspires me to become
              a great programmer. Last semester I joined Projects@ACM doing cool
              projects in machine learning to predict covid-19 cases. I was also
              part of the CS196 Course Staff doing many roles, from project
              managing to creating a fullstack gradebook system which will be
              implemented next semester!{" "}
              <a href="https://cs196.cs.illinois.edu/" target="_blank">
                take a look here.
              </a>{" "}
              Now, I am interning at Code Certain, a student startup, as a
              Software Engineer doing Machine Learning.
            </p>
            <Segment>
              <Button.Group vertical fluid>
                <Button
                  href="#section-3"
                  content="Click to see what interesting classes I have taken here."
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
        <section class="projects" id="section-4">
          <Projects />
        </section>
        <section class="me" id="section-5">
          <Segment style={{ top: 50, height: "80vh" }}>
            <div>Coming Soon!</div>
          </Segment>
        </section>
      </div>
    </div>
  );
}

export default App;
