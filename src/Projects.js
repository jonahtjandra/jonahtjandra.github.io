import React from "react";
import { Image, Icon, Card, Segment } from "semantic-ui-react";
import * as projects from "./projects.json";

export const Projects = () => {
  return (
    <Segment style={{ top: "5em" }}>
      <h3 style={{ fontSize: "2em", textAlign: "center" }}>My Projects</h3>
      <Card.Group>
        {projects.projects.map((item, index) => {
          let IsLive = () => {
            if (item.live) {
              return (
                <Card.Content extra>
                  <a href={item.live} target="_blank">
                    <Icon name="server" />
                    See Project Live!
                  </a>
                </Card.Content>
              );
            } else {
              return null;
            }
          };
          return (
            <Card key={index}>
              <Image src={item.image} wrapped ui={false} />
              <Card.Content>
                <Card.Header>{item.title}</Card.Header>
                <Card.Description>{item.description}</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a href={item.link} target="_blank">
                  <Icon name="github" />
                  See Source Code!
                </a>
              </Card.Content>
              <IsLive />
            </Card>
          );
        })}
      </Card.Group>
    </Segment>
  );
};

export default Projects;
