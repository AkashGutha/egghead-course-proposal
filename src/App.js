import React, { Component } from "react";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import CourseProposal from "./screens/CourseProposal";
import CourseEdit from "./screens/CourseEdit";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="bg-white-secondary">
          <Route exact path="/" component={CourseProposal} />
          <Route exact path="/edit" component={CourseEdit} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
