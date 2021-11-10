import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home"
import About from "./Pages/About"
import Classes from "./Pages/Classes";
import Projects from "./Pages/Projects";

function App() {
    return (
        <div>
            <Router>
            <div>
                <Switch>
                <Route path="/projects">
                    <Projects />
                </Route>
                <Route path="/classes">
                    <Classes />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
                </Switch>
            </div>
            </Router>
        </div>
    )
}

export default App;