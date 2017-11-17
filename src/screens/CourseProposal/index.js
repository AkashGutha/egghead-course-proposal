import React, {Component} from 'react'
import Header from './components/Header'
import CourseInfoInput from './components/CourseInfoInput'
import CourseInfoRow from './components/CourseInfoRow'
import CourseLessonList from './components/CourseLessonList'
import {css} from 'glamor'

class CourseProposal extends Component {
  render() {
    return (
      <div className={`w-100 h-100 bg-gray ${css({margin: '0 auto'})}`}>
        <Header />
        <CourseInfoInput />
        <CourseInfoRow />
        <CourseLessonList lessonCount="0"/>
      </div>
    )
  }
}

export default CourseProposal
