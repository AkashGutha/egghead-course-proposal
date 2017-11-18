import React, { Component } from "react";

//components
import Banner from "./components/Banner";
import Title from "components/form/fields/Title";
import Description from "components/form/fields/Description";
import Instructors from "components/form/fields/Instructors";
import VideoDropzone from "components/form/fields/VideoDropzone";
import Course from "components/form/fields/Course";
import Code from "components/form/fields/Code";
import ItemTagging from "components/ItemTagging";
import TextArea from "components/form/fields/base/TextArea";

class CourseEdit extends Component {
  render() {
    const information = {
      title: "Akash",
      placeholder: "this is a placeholder"
    };
    return (
      <div>
        <Banner />
        <div className="w-100 pa5 flex justify-center">
          <div className="w-100 w-50-l ma1">
            <Title item={information} />
            <TextArea
              divClassNames="bg-white br2 flex-grow-1"
              label="Description"
            />
          </div>
          <div className="w-100 w-50-l ma1">
            <Title item={information} />
          </div>
        </div>
      </div>
    );
  }
}

export default CourseEdit;
