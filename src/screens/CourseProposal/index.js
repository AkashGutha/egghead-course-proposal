import React, { Component } from "react";
import Header from "./components/Header";
import CourseInfoInput from "./components/CourseInfoInput";
import CourseInfoRow from "./components/CourseInfoRow";
import CourseLessonList from "./components/CourseLessonList";
import { css } from "glamor";
import { inject, observer } from "mobx-react";

@inject()
@observer
class CourseProposal extends Component {
  render() {
    const lessons = ['1', '2', '3'];

    return (
      <div className={`w-100 h-100 bg-gray ${css({ margin: "0 auto" })}`}>
        <Header />
        <CourseInfoInput />
        <CourseInfoRow />
        <CourseLessonList lessons={lessons} />
      </div>
    );
  }
}

export default CourseProposal;
