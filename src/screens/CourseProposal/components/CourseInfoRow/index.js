import React, { Component } from "react";
import Icon from "components/Icon";
import styles from "./index.scss";

class CourseInfoRow extends Component {
  render() {
    return (
      <div className="bg-white flex justify-center bt bw1 b--black-10">
        <div
          className={` ${styles.container} w-100 flex flex-row items-center ph5 pv4`}
        >
          <Icon type="clock-time" size="5" />
          <div className="ml2">00:00</div>
          <div className="ml4">2 Lessons</div>
        </div>
      </div>
    );
  }
}
export default CourseInfoRow;
