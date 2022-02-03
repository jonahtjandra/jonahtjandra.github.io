import React from "react";
import ItemExampleProps from "./Component/Experience"
import MenuItem from "./Component/MenuItem";
import "./Experience.style.css"
function Experience() {
    return (
        <div>
            <MenuItem />
            <div className = "experience-container">
                <div className="experience">
                    <ItemExampleProps></ItemExampleProps>
                </div>
            </div>
        </div>
    )
}

export default Experience;