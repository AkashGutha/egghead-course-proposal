import React, { Component } from "react";
import styles from "./index.scss";
import writing01 from "assets/images/writing-01.png";
import writing02 from "assets/images/writing-02.png";
import approved from "assets/images/approved.png";

class CourseInfoInput extends Component {
  render() {
    const { isApproved } = this.props;
    return (
      <div className="flex justify-center bg-white w-100">
        <div
          className={`flex w-100 flex-column flex-row-l items-center pa5 justify-between ${styles.container}`}
        >
          <div className="flex flex-column w-100 w-50-l">
            <input
              className={`f2 avenir bn br1 bg-gray pa3 black-60`}
              placeholder="New Course Title"
            />
            <input
              className="mt3 avenir ba bw2 pa3 br1 b--black-10"
              placeholder={
                'Complete this sentence... "Through small, focused lessons we\'ll learn how to ___________."'
              }
            />
            <textarea
              className="mt3 avenir ba bw2 pa3 br1 b--black-10 h4"
              placeholder={
                "Brief summary - This should be a 1 to 2 paragraph summary of what we will learn with this course."
              }
            />
          </div>
          {isApproved === undefined && (
            <img className={`${styles.img}`} src={writing01} alt="" />
          )}
          {isApproved !== undefined &&
            (isApproved ? (
              <img className={`${styles.img}`} src={approved} alt="" />
            ) : (
              <img className={`${styles.img}`} src={writing02} alt="" />
            ))}
        </div>
      </div>
    );
  }
}

export default CourseInfoInput;
