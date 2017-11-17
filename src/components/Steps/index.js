import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'

import StepsLine from './components/StepsLine'
import StepsContent from './components/StepsContent'

class Steps extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedStep: 1,
    }
    this.handleSelect = this.handleSelect.bind(this)
  }

  handleSelect(index) {
    this.setState({
      selectedStep: index,
    })
  }

  render() {
    const { steps } = this.props

    return (
      <div className={css({
        width: '100%',
      })}>
        <StepsLine
          steps={steps}
          selectedStep={this.state.selectedStep}
          handler={this.handleSelect}
        />
        <StepsContent
          steps={steps}
          selectedStep={this.state.selectedStep}
        />
      </div>
    )
  }
}

export default Steps
