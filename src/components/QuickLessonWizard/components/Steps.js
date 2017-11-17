import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Tab, Tabs, TabList, TabPanel, resetIdCounter } from 'react-tabs'
import { map, last } from 'lodash'
import cn from 'classnames'
import {inject, observer} from 'mobx-react'
import { css } from 'glamor'

const isLast = (index, steps) => index === steps.length - 1

class Steps extends React.Component {

  state = {
    selected: 0,
  }

  handleSelect = (index) => {
    this.setState({ selected: index })
  }

  render() {
    const { steps } = this.props

    return (
      <Tabs onSelect={this.handleSelect} selectedIndex={this.state.selected}>
        <TabList className="list pa0 ma0 flex">
          {map(steps, (step, index) => (
            <Tab
              key={index}
              className={cn('relative pv4 ph4-ns f6 fw4 tc ttu flex-grow-1 pointer white bb b--white-10',
                {
                  'bg-white-10 b--transparent': this.state.selected === index,
                  'br': !isLast(index, steps)
                }
              )}
            >
              <span className="mr2 white-40">{index + 1}</span>
              {step.title}
            </Tab>
          ))}
        </TabList>

        {this.props.children}

        {map(steps, (step, index) => (
          <TabPanel key={index}>
            {step.component}
          </TabPanel>
        ))}
      </Tabs>
    );
  }
}

export default inject('quickLessonWizardStore')(observer(Steps))
