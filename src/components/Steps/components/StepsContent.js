import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'

class StepsContent extends React.Component {

  render() {
    const { steps, selectedStep } = this.props

    const componentToShow = steps[selectedStep - 1].component

    return (
      <div>{componentToShow}</div>
    )
  }
}

export default StepsContent