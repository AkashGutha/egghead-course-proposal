import React, { Component } from "react";
import styles from "./index.scss";

import Button from "components/Button";
import Icon from "components/Icon";

class Header extends Component {
  render() {
    const { isApproved } = this.props;

    return (
      <div className="flex bg-base justify-center">
        <div
          className={`flex flex-center w-100 items-center justify-between pa5 mt5 bg-base flex-column flex-row-l ${styles.container}`}
        >
          <div className="flex flex-column w-60-l w-100-m w-100">
            <div className="f3 avenir white fw4">
              {isApproved === undefined && (
                <span>
                  Here you can brainstorm and propose your new course topic.
                </span>
              )}
              {isApproved !== undefined &&
                (isApproved ? (
                  <span>Sweet, you can start recording now.</span>
                ) : (
                  <span>Great! Course proposal has been submitted.</span>
                ))}
            </div>
            <div className="f5 avenir white fw2 mt3 light-gray">
              {isApproved !== undefined &&
                (isApproved ? (
                  <span className="green fw4 mr3"> Proposal Approved </span>
                ) : (
                  <span className="yellow fw4 mr3"> Waiting for approval </span>
                ))}

              <span>{"For inspiration see our "}</span>
              <a href="" className="link light-gray dim underline">
                Proposal Guide
              </a>
            </div>
          </div>
          <div className="flex flex-column mt3-m flex-row-m flex-row-l">
            {/* before acceptance of proposal */}
            {isApproved === undefined && (
              <div className=" flex flex-row-ns flex-column mh1 mv1 items-center">
                <div className="mr3-ns mb2 mt3">
                  <Button size="small" color="dark-blue" outline={true}>
                    <span className="white">Save & exit</span>
                  </Button>
                </div>
                <div className="mr3-ns mb2 mt3">
                  <Button
                    children="PROPOSE COURSE TOPIC"
                    size="small"
                    color="orange"
                  />
                </div>
              </div>
            )}
            {isApproved !== undefined &&
              (isApproved ? (
                <div className=" flex flex-column mh1 mv1">
                  <Button
                    size="small"
                    color="dark-blue"
                    outline={true}
                    overDark={false}
                  >
                    <span className="mr3 f7 avenir fw3 white">1 comment</span>
                    <Icon type="comments" size="4" />
                  </Button>
                </div>
              ) : (
                <div className=" flex flex-column items-center mh1 mv1">
                  <Icon type="edit-book" color="white" size="2" />
                  <span className="f5 mt2 fw2 white">Propose a new course</span>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
