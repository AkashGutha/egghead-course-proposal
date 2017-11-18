import React, { Component } from "react";
import Header from "./components/Header";
import CourseInfoInput from "./components/CourseInfoInput";
import CourseInfoRow from "./components/CourseInfoRow";
import CourseLessonList from "./components/CourseLessonList";
import { css } from "glamor";
import { inject, observer } from "mobx-react";

import styles from "./index.scss";

@inject()
@observer
class CourseProposal extends Component {
  render() {
    const isApproved = false;
    const lessons = ["1", "2", "3","1", "2", "3"];

    return (
      <div className={`w-100 h-100 bg-gray ${css({ margin: "0 auto" })}`}>
        <Header isApproved={isApproved} />
        {isApproved !== undefined && (
          <div
            className={`w-100 ${isApproved ? styles.approved : styles.waiting}`}
          />
        )}
        <CourseInfoInput isApproved={isApproved} />
        <CourseInfoRow isApproved={isApproved} />
        <CourseLessonList lessons={lessons} />
      </div>
    );
  }
}

export default CourseProposal;
