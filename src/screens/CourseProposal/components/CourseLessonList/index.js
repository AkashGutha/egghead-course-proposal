import React, { Component } from "react";

import styles from "./index.scss";
import Icon from "components/Icon";
import { map } from "lodash";

const LessonDetailEntry = props => {
  const { lessonNumber } = props;

  return (
    <div className="flex w-100 bg-white pa3 b--black-10 br2 ba items-center justify-between">
      <div className="w-90  flex items-center">
        <div className="dim pointer h-100 o-0">
          <Icon type="thin-hamburger" color="black-30" size="5" />
        </div>
        <div className="ml3">{lessonNumber}</div>
        <input
          className="ml3 pa3 avenir ba bw2 b--black-10 br2 w-80"
          placeholder="New lesson title"
        />
      </div>
      <div className={`br-100 f3 bg-green ${styles.roundIcon}`}>
        <div className="dim pointer flex justify-around items-center h-100">
          <Icon type="add" color="white" />
        </div>
      </div>
    </div>
  );
};

class LessonDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      lessonNumber: this.props.lessonNumber
    };
  }

  toggleLessonEditPanel = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render(props) {
    return (
      <div className="flex flex-column w-100 bg-white b--black-10 bl br bt br2 br--bottom items-center justify-between">
        <div className="w-100 flex items-center justify-between">
          <div className="w-90  flex items-center">
            <div className="ml3">
              <Icon type="thin-hamburger" color="black-30" size="5" />
            </div>
            <div className="ml3">{this.state.lessonNumber}</div>
            <input
              className="ml3 pa3 avenir ba bw2 b--black-10 br2 w-80"
              placeholder="New lesson title"
            />
            <img
              className={`dn db-l ml4-l ml4-m ${styles.instructorImg}`}
              src="https://cdn3.iconfinder.com/data/icons/business-round-flat-vol-1-1/36/user_account_profile_avatar_person_student_male-512.png"
              alt=""
            />
            <p className="dn db-l pointer underline ml3 f6">Sam Barber</p>
          </div>
          <div
            className={`hover-bg-gray pointer bl b--black-10 ml2 flex items-center ${styles.arrowHolder} ${this
              .state.isOpen
              ? "bg-white-secondary"
              : null} `}
            onClick={this.toggleLessonEditPanel}
          >
            <div
              className={`arrowHolder  ${this.state.isOpen
                ? styles.arrowRotated
                : null}`}
            >
              <Icon type="arrow-down" color="dark-blue" size="3" />
            </div>
          </div>
        </div>
        <div
          className={
            this.state.isOpen ? `w-100 db ${styles.lessonControls}` : "dn"
          }
        >
          <div className="flex items-center justify-end bt b--black-10 bg-white-secondary">
            <div className="hover-bg-white pointer bl h-100 b--black-10 flex items-center pv2 ph4">
              <Icon type="trash" color="red" />
              <p className="ml3 black avenir f5">Cancel Lesson</p>
            </div>
          </div>
          <div className="ph5 pv3 flex flex-column bt b--black-10 bg-white-secondary">
            <p className="avenir f5 black ma1">Lesson Description</p>
            <textarea
              className="mt3 avenir ba bw2 pa3 br1 b--black-10 h4"
              placeholder="1—3 sentence summary of the lesson. Each lesson in the course should have a title and summary."
            />
          </div>
        </div>
      </div>
    );
  }
}

class CourseLessonList extends Component {
  render() {
    const { lessons } = this.props;
    return (
      <div className="pa2 pa5-ns bg-gray">
        <div className={styles.lessonscontainer}>
          <div className="mt3 mt0-ns avenir f3 black">Lessons in course</div>
          <div className="mt4 mt3-ns">
            {map(lessons, (lesson, index) => (
              <LessonDetail lessonNumber={index + 1} key={index} />
            ))}
            <LessonDetailEntry lessonNumber={lessons.length + 1} />
          </div>
        </div>
      </div>
    );
  }
}

export default CourseLessonList;
