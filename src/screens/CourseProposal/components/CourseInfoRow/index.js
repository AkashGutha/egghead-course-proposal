import React, {Component} from 'react'
import Icon from 'components/Icon'

class CourseInfoRow extends Component {
  render() {
    return (
      <div className="flex flex-row items-center bg-white ph5 pv4 bt bw1 b--black-10">
        <Icon type="clock-time" size="5" />
        <div className="ml2">00:00</div>
        <div className="ml4">2 Lessons</div>
      </div>
    )
  }
}
export default CourseInfoRow
