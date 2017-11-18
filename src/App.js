import React, {Component} from 'react';
import {StaticRouter} from 'react-router'
import CourseProposal from './screens/CourseProposal'

class App extends Component {
  render() {
    return (
      <StaticRouter context={{}}>
          <div className='bg-base vh-100'>
              <CourseProposal />
              
          </div>
      </StaticRouter>
    )
  }
}

export default App