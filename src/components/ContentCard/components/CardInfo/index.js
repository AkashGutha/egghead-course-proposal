import React from 'react'
import {convertTime} from 'lib/TimeUtil'
import ClockIcon from 'icons/ClockIcon'
import ExternalTrackingLink from 'components/ExternalTrackingLink'
import Icon from 'components/Icon'
import css from './CardInfo.scss'
import TrackingLink from "../../../TrackingLink/index";

class CardInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isHovered: false}
  }

  onMouseEnterHandler() {
    this.setState({isHovered: true})
  }

  onMouseLeaveHandler() {
    this.setState({isHovered: false})
  }

  render() {
    const {
        title,
        instructorAvatarUrl,
        instructorName,
        smallIconUrl,
        duration,
        label,
        labelColor,
        contentUrl,
        illustrationUrl,
        slug,
        isPro,
        item,
        location,
      path
    } = this.props

    const {isHovered} = this.state;

    const containerStyle = {'height': illustrationUrl ? '384px' : '184px'}

    return (
      <TrackingLink
          to={{
            pathname: path,
            state: {item}
          }}
          className='no-underline dark-blue z-1'
          track={`clicked ${label.toLowerCase()} card`}
          trackParams={{
            [label.toLowerCase()]: slug,
            section: location
          }}
      >
        <div className='flex flex-grow-1 flex-column justify-between pointer'
             onMouseEnter={() => this.onMouseEnterHandler()}
             onMouseLeave={() => this.onMouseLeaveHandler()}
             style={containerStyle}>
          <div className='pa3 flex flex-column justify-between flex-grow-1'>
            {
              illustrationUrl ?
                  <div className='self-center'>
                    <img src={illustrationUrl} alt={`illustration for ${title}`}
                         style={{height: '150px', width: '150px'}}/>
                  </div> : null

            }

            <h3 className='tc mt2 mb2 avenir fw5 no-underline' style={{fontSize: '18px'}}>{title}</h3>

            <div className='mb43 flex justify-center items-center'>
              <img src={instructorAvatarUrl} alt={instructorName} className='br-pill pointer' style={{width: '30px', height: '30px', marginRight: '6px'}}/>
              <span className='f6 o-50 dark-blue ttc'>{instructorName}</span>
            </div>
          </div>

          <div className={`
              flex
              justify-between
              items-center
              ph3
              pv2
              flex-shrink-0
              relative
              bg-animate
              ${css.cardInfo}
              ${isHovered ? css.cardInfoHovered : ''}
              `}>
            <div className='flex justify-center items-center dark-gray'>
              {smallIconUrl ? <img src={smallIconUrl} alt={`icon for ${title}`}
                                   className='mr2'
                                   style={{height: '24px', width: '24px'}}/> : null}
              <ClockIcon className={css.clockIcon} />
              <div className='ml2 o-60' style={{fontSize: '12px'}}>{convertTime(duration)}</div>
            </div>
            <PlayButton isHovered={isHovered} color={labelColor} />
            <div className={`
              flex
              items-center
            `}>

              <div className={`
              pl1
              flex
              items-center
            `}>
                {!isPro && label === 'Course' ? <Icon type='community-resource' color='yellow' size="3"/> : (
                  <span className={`${labelColor || 'blue'} b tracked ttu`} style={{fontSize: '12px'}}>
                    {isPro ? 'Pro' : 'Free'} {label}
                  </span>
                )}
              </div>

            </div>

          </div>
        </div>
      </TrackingLink>
    )
  }
}

const PlayButton = ({isHovered, color}) => {
  const playBtnWrapperClasses = `
      flex
      justify-center
      items-center
      br-pill
      pointer
      absolute
      left-0
      right-0
      center
      bg-${color}
      o-0
      ${isHovered ? css.playBtnWrapper : ''}
    `

  const commonPlayBtnClasses = 'z-1 flex items-center justify-center br-pill'

  return (
    <div className={playBtnWrapperClasses} style={{width: '30px', height: '30px'}}>
      <div className={commonPlayBtnClasses} style={{marginRight: '-2px'}}>
        <Icon type='play' color='white' size='6' />
      </div>
    </div>
  )
}

export default CardInfo
