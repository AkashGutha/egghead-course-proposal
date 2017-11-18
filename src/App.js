import React, {Component} from 'react';
import {StaticRouter} from 'react-router'
import CourseProposal from './screens/CourseProposal'
import CourseEdit from "./screens/CourseEdit";

class App extends Component {
  render() {
    return (
      <StaticRouter context={{}}>
          <div className='bg-white-secondary vh-100'>
              <CourseEdit />
          </div>
      </StaticRouter>
    )
  }
}

export default App