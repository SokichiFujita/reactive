import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import TopContainer from "./components/TopContainer";
import SampleContainer from "./components/SampleContainer";
import SampleContainer2 from "./components/SampleContainer2";

const muiTheme = createMuiTheme({});

render(
  <MuiThemeProvider theme={muiTheme}>
    <Router>
      <div>
        <Route exact path="/" component={TopContainer} />
        <Route path="/editor" component={SampleContainer} />
        <Route path="/editor2" component={SampleContainer2} />
      </div>
    </Router>
  </MuiThemeProvider>,
  document.getElementById("root")
);
