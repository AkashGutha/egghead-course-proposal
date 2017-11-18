import { observable, action } from "mobx";

export default class CourseProposalStore {
  @observable proposedCourses;

  constructor(currentUser) {
    this.currentUser = currentUser;
    this.proposedCourses = [];
  }

  @action
  saveCourse(course) {
    this.proposedCourses[course.title] = course;
  }

  @action
  addlesson(course, lesson) {
    this.proposedCourses[course].lessons.add(lesson);
  }
}
