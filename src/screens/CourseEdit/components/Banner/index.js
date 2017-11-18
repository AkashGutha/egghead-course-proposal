import React from "react";
import { toJS } from "mobx";
import { observer, inject } from "mobx-react";
import Button from "components/Button";
import Icon from "components/Icon";
import css from "./index.scss";
import universalWindow from "lib/universalWindow";

const navigateIfLessonSlugChanged = (lesson, les) => {
  if (lesson.edit_lesson_http_url !== universalWindow.location.href) {
    universalWindow.location.href = lesson.edit_lesson_http_url;
  }
};

const onBottom = false;
const title = "asdfsd";
const savable = false;
const icon = "";

export default Banner => (
  <div className={`flex justify-center bg-base`}>
    <div className="flex w-100 mw9 pv4 ph3 items-center justify-between">
      <div
        className={`flex w-80-m items-center ${onBottom
          ? "w-50"
          : "w-100 w-50-l"}`}
      >
        <div className={`${onBottom ? "flex" : "dn flex-l"} items-center`}>
          <Icon type="chevron-left" color="white" size="5" />
          <div className={onBottom ? "ml2 white" : "dn"}>{"Back"}</div>
        </div>
        <div className={onBottom ? "dn" : "flex items-center"}>
          <img className="h3 w3 ml4-l" src={icon} alt="icon" />
          <div className="flex flex-column mh3">
            <div className={`b light-gray f3 ${css.title}`}>{title}</div>
            <div className="f5 dark-gray">{"EDITING"}</div>
          </div>
        </div>
      </div>
      <div
        className={`${onBottom
          ? "flex flex-row-ns"
          : "dn flex-ns flex-row-l"} flex-column w-50 justify-between ${css.buttons}`}
      >
        <div className="flex flex-column mv1">
          <Button
            children="SAVE"
            // onClick={() =>
            //   lessonEditStore.saveLesson().then(navigateIfLessonSlugChanged)}
            size="small"
            color="green"
            outline={true}
            disabled={!savable}
          />
        </div>
        <div className="flex flex-column mv1">
          <Button
            children="SAVE &amp; VIEW"
            // onClick={() =>
            //   lessonEditStore.saveLesson().then(lesson => {
            //     history.push(lesson.path, {
            //       item: toJS(lesson)
            //     });
            //   })}
            size="small"
            color="green"
            disabled={!savable}
          />
        </div>
      </div>
    </div>
  </div>
);
