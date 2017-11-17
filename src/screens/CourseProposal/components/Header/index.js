import React, {Component} from 'react'
import styles from './index.scss'

import Button from 'components/Button'

class Header extends Component {
  render() {
    return (
      <div
        className={
          'flex flex-center w-100 items-center justify-between pa5 mt5 bg-base flex-column flex-row-l '
        }
      >
        <div className="flex flex-column w-60-l w-100-m w-100">
          <div className="f3 avenir white fw4">
            Here you can brainstorm and propose your new course topic.
          </div>
          <div className="f5 avenir white fw2 mt3 light-gray">
            For inspiration see our{' '}
            <a href="" className="link light-gray dim underline">
              Proposal Guide
            </a>
          </div>
        </div>
        <div className="flex flex-column mt3-m flex-row-m flex-row-l">
          {/* before acceptance of proposal */}
          {/* <div className=" flex flex-column mh1 mv1">
            <Button
              size="medium"
              color="dark-blue"
              outline={true}>
              <span className="white">Save & exit</span>
            </Button>
          </div>
          <div className=" flex flex-column  mh1 mv1">
            <Button
              children="PROPOSE COURSE TOPIC"
              size="medium"
              color="orange"
            />
          </div> */}
          {/* Course proposal submitted */}
          <div className=" flex flex-column mh1 mv1">
            <Button
              size="medium"
              color="dark-blue"
              outline={true}
              overDark={false}
            >
              <span className="f6 avenir fw1 white">Create new proposal</span>
              <span className="f4 avenir fw9 ml2">+</span>
            </Button>
          </div>
          <div className=" flex flex-column justify-center mh3 mv1">
            <span className="orange fw1"> waiting for approval </span>
          </div>
          {/* Course approved */}
          {/* <div className=" flex flex-column mh1 mv1">
            <Button size="medium" color="dark-blue" outline={true} overDark={false}>
              <span className="f6 avenir fw1 white">1 comment</span>
            </Button>
          </div>
          <div className=" flex flex-column justify-center mh3 mv1">
            <span className="green"> Proposal Approved </span>
          </div> */}
        </div>
      </div>
    )
  }
}

export default Header
