import React from "react";
import MenuItem from "./Component/MenuItem"
import { Image, Icon, Card, Segment } from "semantic-ui-react";
import * as projects from "../projects.json";
import "./projects.style.css"
function Projects() {
    return (
        <div>
        <MenuItem />
        <Segment className="mainContainer">
        <div/>
        <Card.Group>
            {projects.projects.map((item, index) => {
            let IsLive = () => {
                if (item.live === "prod") {
                return (
                    <Card.Content extra>
                    <div>
                        <Icon name="server" />
                        Project is down and underdevelopment for the fall 2021 semester. Check again soon!
                    </div>
                    </Card.Content>
                );
                } else if (item.live) {
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
                <Image src={item.image} wrapped ui={true} />
                <Card.Content>
                    <Card.Header>{item.title}</Card.Header>
                    <Card.Description>{item.description}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a href={item.link ? item.link : ""} target="_blank">
                    <Icon name="github" />
                    {item.link ? "See Source Code and Demo!" : "No Source Code Available"}
                    </a>
                </Card.Content>
                <IsLive />
                </Card>
            );
            })}
        </Card.Group>
        <div />
        </Segment>
        </div>
    )
}

export default Projects;