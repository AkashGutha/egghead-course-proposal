import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'

import { map, last } from 'lodash'

import Icon from 'components/Icon'
import Button from 'components/Button'
import colorValues from 'lib/colorValues'

const isLast = (index, steps) => index === steps.length - 1

const StepItem = ({
  stepNumber,
  selectedStep,
  title,
  handler
}) => {
  const checkedStyles = css({
    borderColor: colorValues['green'],
    background: colorValues['green'],
    color: colorValues['dark-blue'],
  })
  const activeStyles = css({
    borderColor: colorValues['green'],
    background: colorValues['base'],
    color: colorValues['green'],
  })
  const nonActiveStyles = css({
    borderColor: colorValues['white'],
    background: colorValues['white'],
    color: colorValues['dark-blue'],
  })
  const activityStyles = stepNumber <= selectedStep ? activeStyles : nonActiveStyles
  const completedStyles = stepNumber < selectedStep ? checkedStyles : {}
  return (
    <div className={css({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      flexShrink: 0,
      position: 'relative',
      paddingBottom: '30px',
    })}>
      <div className={css({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '32px',
        height: '32px',
        cursor: 'pointer',
        fontFamily: 'Avenir',
        fontWeight: 500,
        borderRadius: '100%',
        borderWidth: '1px',
        borderStyle: 'solid',
      }, activityStyles, completedStyles)} onClick={handler}>
        {
          stepNumber < selectedStep ? <Icon type='check' color='dark-blue' size='6' /> : stepNumber 
        }
      </div>
      <div className={css({
        position: 'absolute',
        bottom: '2px',
        fontSize: '14px',
        whiteSpace: 'nowrap',
        color: colorValues['dark-gray-secondary'],
      })}>{title}</div>
    </div>
  )
}

const Separator = ({
  selectedStep,
  activeFor,
}) => {
  const activeStyles = selectedStep >= activeFor ? css({background: colorValues['green']}) : css({background: colorValues['white']})
  return (
    <div className={css(
      {
        content: `''`,
        display: 'block',
        width: '100%',
        height: '1px',
        marginTop: '16px',
        background: colorValues['white'],
      }, activeStyles
    )} />
  )
}

class StepsLine extends React.Component {

  render() {
    const { steps, selectedStep, handler } = this.props
    const stepItemWrapperStyles = css({
      display: 'flex',
      width: '100%',
    })

    return (
      <div className={css({
        borderRadius: '5px 5px 0 0',
        background: colorValues['base'],
        padding: '30px 25px 25px 25px',
        display: 'flex',
        justifyContent: 'center',
      })}>
        <div className={css({
          width: '100%',
          padding: '0 60px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        })}>
          {
            map(steps, (step, index) => {
              const classname = css(!isLast(index, steps) ? stepItemWrapperStyles : {})
              return (
                <div key={index} className={classname}>
                  <StepItem 
                    stepNumber={index+1}
                    title={step.title}
                    handler={() => handler(index + 1)}
                    selectedStep={selectedStep}
                  />
                  {
                    !isLast(index, steps) && <Separator selectedStep={selectedStep}  activeFor={index+2} />
                  }
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default StepsLine