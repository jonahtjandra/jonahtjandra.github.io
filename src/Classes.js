import "./App.css";
import React from "react";
import { Icon, Item, Segment } from "semantic-ui-react";
import * as classes from "./classes.json";

export const Classes = () => {
  return (
    <Segment color="grey" style={{ overflow: "auto", maxHeight: 350 }}>
      <Item.Group>
        {classes.classes.map((item, index) => {
          let Complete = () => {
            if (item.completed) {
              return (
                <Icon color="green" name="check">
                  {" "}
                  Completed{" "}
                </Icon>
              );
            } else
              return (
                <Icon color="grey" name="check">
                  {" "}
                  In progress{" "}
                </Icon>
              );
          };
          return (
            <Item key={index}>
              <Item.Content>
                <Item.Header as="a">{item.title}</Item.Header>
                <Item.Description>{item.description}</Item.Description>
                <Item.Extra>
                  <Complete />
                </Item.Extra>
              </Item.Content>
            </Item>
          );
        })}
      </Item.Group>
    </Segment>
  );
};

export default Classes;
