import React, { Component } from "react";

//components
import Banner from "./components/Banner";
import Title from 'components/form/fields/Title'
import Description from 'components/form/fields/Description'
import Instructors from 'components/form/fields/Instructors'
import VideoDropzone from 'components/form/fields/VideoDropzone'
import Course from 'components/form/fields/Course'
import Code from 'components/form/fields/Code'
import ItemTagging from 'components/ItemTagging'

class CourseEdit extends Component {
  render() {
    return (
      <div>
        <Banner />
        <div className="w-100 flex justify-center">
            <Title></Title>
        </div>
      </div>
    );
  }
}

export default CourseEdit;
