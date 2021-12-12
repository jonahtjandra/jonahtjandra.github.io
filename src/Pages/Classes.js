import React from "react";
import MenuItem from "./Component/MenuItem"
import "./classes.style.css"
import { Icon, Item, Segment } from "semantic-ui-react";
import * as classes from "../classes.json";
function Classes() {
    return (
        <div>
            <MenuItem />
            <div className="mainContainerClasses">
                <div/>
                <Segment color="grey" style={{ overflow: "auto", maxHeight: 500 }}>
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
                <div/>
            </div>
        </div>
    )
}

export default Classes;