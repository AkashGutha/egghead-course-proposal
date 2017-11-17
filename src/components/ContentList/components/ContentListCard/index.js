import React from 'react'
import PropTypes from 'prop-types'
import TagFolder from 'components/TagFolder'
import TrackingLink from 'components/TrackingLink'
import ExternalTrackingLink from 'components/ExternalTrackingLink'
import ContentList from 'components/ContentList'
import Icon from 'components/Icon'
import LessonStateButton from 'components/LessonStateButtons'
import detailsByLessonState from 'lib/detailsByLessonState'
import DurationFavorited from '../DurationFavorited'
import ContentCardProgress from '../ContentCardProgress'
import DrawerToggle from '../DrawerToggle'
import ContentImage from '../ContentImage'
import { ActionDrawer, NewLessonActionDrawer } from '../ActionDrawer'
import lessonSummary from 'lib/LessonSummaryUtil'
import convertToItem from 'lib/convertToItem'
import cn from 'classnames'
import { DropTarget, DragSource } from 'react-dnd'
import { keys, each, includes, debounce, isEmpty, isUndefined, indexOf, map, get } from 'lodash'
import axios from 'axios'
import css from './index.scss'

const http = axios.create()

export const ItemTypes = {
  LESSON: 'lesson'
}

const lessonTarget = {
  canDrop (props) {
    const { sortable } = props
    return sortable
  },

  hover(props, monitor) {
    const { id: draggedId } = monitor.getItem()
    const overId = props.item.id

    if (draggedId !== overId) {
      const { index: overIndex } = props.findLesson(overId)
      props.moveLesson(draggedId, overIndex)
    }
  }
}

const lessonSource = {
  canDrag (props) {
    const { sortable } = props
    return sortable
  },

  beginDrag(props, monitor, component) {
    return {
      id: props.item.id,
      originalIndex: props.index,
      originalListItems: props.listItems
    }
  },

  endDrag(props, monitor) {
    const item = monitor.getItem()
    const { id, originalIndex, originalListItems } = item
    const { listItems } = props
    const didDrop = monitor.didDrop()
    if (!didDrop) {
      props.moveLesson(id, originalIndex)
    } else {
      props.updateLessons(listItems)
    }
  }
}

const SupportingInfo = ({state, label, isPro, labelColor, content_list, sortable, completedCount=0, lessonCount=0}) => {
  const hasLessonStateButton = includes(keys(detailsByLessonState), state) && state !== 'published'
  if (hasLessonStateButton) {
    return <LessonStateButton state={state} />
  } else {
    return (
      <div className='ph3-ns mt2'>
        {completedCount > 0 ? (
          <span className={`${labelColor || 'blue'} b tracked ttu mr3`} style={{fontSize: '12px'}}>
            {`${completedCount}/${lessonCount} completed`}
        </span>
        ) : (
          <span className={`${labelColor || 'blue'} b tracked ttu mr3`} style={{fontSize: '12px'}}>
          {isPro ? 'Pro' : 'Free'} {label}
        </span>
        )}
        <span className='dark-gray'>
          {lessonSummary(content_list)}
        </span>
      </div>
    )
  }
}

const ToggleArea = ({...props}) => {
  const {showToggleForCourseCard, showToggleForLessonCard, toggleHandler, expanded, hover, isLesson} = props

  if (showToggleForCourseCard || showToggleForLessonCard) {
    return (
      <div className='flex flex-column self-stretch'>
        <DrawerToggle onClickHandler={toggleHandler} expanded={expanded} hover={hover} />
      </div>
    )
  }

  if (isLesson) {
    return <div />
  } else {
    return <div className='w-100 w2-ns' />
  }
}

class SublistArea extends React.Component {
  render () {
    const {expanded, showToggleForCourseCard, showToggleForLessonCard, item, content_list,
           new_series_lesson_url, edit_series_http_url, showItemNumbers, sortable, sublist } = this.props

    const canSort = !isUndefined(item.edit_series_http_url)

    if (expanded && (showToggleForCourseCard || showToggleForLessonCard)) {
      return (
        <div>
          <ActionDrawer item={item} />
          { showToggleForCourseCard && (
            <div>
              {item.lessons || item.lessons_url && (
                <ContentList
                  content_list={content_list}
                  new_series_lesson_url={new_series_lesson_url}
                  edit_series_http_url={edit_series_http_url}
                  sortable={canSort}
                  showItemNumbers
                  sublist
                />
              )}

             <NewLessonActionDrawer item={item} />
            </div>
          )}
        </div>
      )
    }

    return <div />
  }
}

@DropTarget(props => props.label.toLowerCase(), lessonTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget()
}))
@DragSource(props => props.label.toLowerCase(), lessonSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))
class ContentListCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isHovered: false,
      expanded: false,
      content_list: []
    }

    this.toggleExpanded = this.toggleExpanded.bind(this)
  }

  componentDidMount () {
    const { content_list } = this.state
    const { sublist, item, listItems } = this.props
    const { lessons_url } = item

    if (!sublist && isEmpty(item.lessons) && lessons_url) {
      http.get(lessons_url).then(({data}) => {
        this.setState({content_list: data})
      })
    }
  }

  setIsHoveredState (isHovered) {
    this.setState({isHovered})
  }

  toggleExpanded (evt) {
    this.setState({
      expanded: !this.state.expanded
    })

    const { item } = this.props
    const { lessons_url } = item

    if (isEmpty(item.lessons) && lessons_url) {
      http.get(lessons_url).then(({data}) => {
        this.setState({
          content_list: data,
        })
      })
    }
  }

  targetHasClickHandler (event) {
    let el = event.target
    while (el) {
      if (el.getAttribute('data-click-handler')) {
        return true
      }
      el = el.parentElement
    }
    return false
  }

  render () {
    const {
      title,
      instructorAvatarUrl,
      instructorName,
      instructorUrl,
      duration,
      contentUrl,
      smallIconUrl,
      illustrationUrl,
      label,
      labelColor,
      slug,
      tag,
      tagUrl,
      favorited,
      id,
      completed,
      handleContentFavorited,
      currentUser,
      rowSpacing,
      progress,
      new_series_lesson_url,
      index,
      showItemNumbers,
      listItems,
      item,
      sublist,
      connectDragSource,
      connectDropTarget,
      sortable,
      edit_series_http_url,
      isPro
    } = this.props

    const { state, lessons, lessons_url, instructor, edit_lesson_http_url } = item
    const { isHovered, expanded, content_list } = this.state

    const isLesson = label.toLowerCase() === 'lesson'
    const showCardProgress = progress && progress.completed_lesson_count > 0
    const hasLessonStateButton = includes(keys(detailsByLessonState), state)

    const showToggleForCourseCard = (lessons && !isEmpty(content_list) || lessons_url) || edit_series_http_url
    const showToggleForLessonCard = isLesson && edit_lesson_http_url
    const showHandle = sortable

    const cardWithGapClasses = rowSpacing ? 'ba br2' : 'bb'
    const expandedClasses = expanded ? 'br--top' : ''

    const stdWrapperClasses = `w-100 flex flex-column flex-row-ns relative items-center b--gray-secondary ${css.rowWrapper} ${cardWithGapClasses} ${expandedClasses} ${css.wrapperHoverStyles}`

    const cardBodyClasses = 'flex items-center flex-column flex-grow-1 self-stretch'
    const cardContentClasses = `w-100 h-100 flex flex-column flex-row-ns flex-grow-1 flex-grow-0-ns
                            no-underline justify-between justify-start-ns black avenir relative z-2 pb0 pl3-ns pr4-ns ${css.innerContent} ${(completed && !isHovered) ? 'o-60' : ''}`

    const imgTitleClasses = `flex flex-row items-center justify-left flex-shrink-0 flex-grow-1 flex-shrink-1-ns base pb2 ${sublist ? 'ml2' : 'ml3'} ml0-ns pb0-ns no-underline`

    const titleSectionClasses = 'flex flex-column flex-grow-1 ph3'
    const titleClasses = 'base no-underline db pl0 tl f4 fw5 avenir pointer lh-title lh-copy-ns relative'
    const courseTitleClasses = css.title

    return connectDropTarget(
      <div className='relative w-100' style={{marginTop: `${rowSpacing || 0}rem`}}>
        <div className={`${stdWrapperClasses} ${sublist ? 'bg-light-gray' : 'bg-white hover-bg-gray'}`}>

          <TrackingLink
            to={{
              pathname: contentUrl,
              state: {item}
            }}
            className={`flex h-100 absolute top-0 right-0 bottom-0 left-0`}
            onMouseEnter={() => !sortable && this.setIsHoveredState(true)}
            onMouseLeave={() => !sortable && this.setIsHoveredState(false)}
            track={`clicked ${label.toLowerCase()} content list item`}
            trackParams={{ [label.toLowerCase()]: slug }}
            sortable={sortable}
            style={{pointerEvents: 'all'}}
          />

          <div className={cardBodyClasses}>
            <div className={cardContentClasses} style={{height: 'auto'}}>
              <div className={imgTitleClasses} style={{zIndex: '69'}}>
                {connectDragSource(
                  <div className='flex items-center'
                    style={{pointerEvents: 'all', cursor: `${sortable ? 'ns-resize' : 'auto'}`}}
                  >
                    {showHandle && (
                        <div className={`barsSection dn flex-ns`}>
                          <Icon type='bars' color='dark-gray-secondary' size='5' />
                        </div>
                    )}

                      <div className={`${sublist ? 'flex' : css.contentIconContainer}`}>
                        <ContentImage
                          smallIconUrl={smallIconUrl}
                          labelColor={labelColor}
                          illustrationUrl={illustrationUrl}
                          isHovered={isHovered}
                          completed={completed}
                          size={isLesson ? '24' : '60'}
                          subCard={sublist}
                        />
                      </div>

                      {sortable && showItemNumbers && (
                      <div className={`dn flex-ns dark-gray ${css.orderNumber}`}>
                        {`${index + 1}`}
                      </div>
                    )}
                  </div>
                )}

                <div className={titleSectionClasses}>
                  <TrackingLink
                    to={{
                      pathname: contentUrl,
                      state: {item}
                    }}
                    className={`${isLesson ? 'mb2 mb0-ns' : courseTitleClasses} ${titleClasses}`}
                    data-click-handler='true'
                    track={`clicked ${label.toLowerCase()} content list item`}
                    trackParams={{
                      element: 'title',
                      [label.toLowerCase()]: slug
                    }}
                    style={{pointerEvents: 'all'}}
                  >
                    {title}
                  </TrackingLink>

                  <SupportingInfo
                    isPro={isPro}
                    state={state}
                    label={label}
                    labelColor={labelColor}
                    content_list={content_list}
                    sortable={sortable}
                    completedCount={get(progress, "completed_lesson_count", 0)}
                    lessonCount={item.lesson_count}/>
                </div>
              </div>
              <div className={`
                pv2
                pv0-ns
                flex
                flex-row
                w-100
                ${css.infoRow}
              `}>

                <ExternalTrackingLink
                  href={instructorUrl}
                  className={cn(
                    `w-100-ns tl flex items-center dark-gray hover-blue overflow-hidden no-underline self-center ${css.instructor}`,
                    css.pointerEventsOn,
                  )}
                  data-click-handler='true'
                  track={`clicked ${label.toLowerCase()} content list item`}
                  trackParams={{
                    element: 'instructor',
                    [label.toLowerCase()]: slug
                  }}
                  onMouseEnter={() => this.setIsHoveredState(true)}
                >
                  <img src={instructorAvatarUrl} role='presentation' className={`br-100 ${css.instructorAvatar}`} />
                  <span className={`mh2 sans-serif underline ${css.instructorName}`}>{instructorName}</span>
                </ExternalTrackingLink>

                <div className='w-75-ns flex-shrink-0 flex-shrink-1-ns base pl3 flex flex-row flex-column-ns overflow-hidden items-left justify-center'>
                  <div className={cn('flex flex-column-ns', css.pointerEventsOn)}
                       onMouseEnter={() => this.setIsHoveredState(true)}
                  >
                    <div className='flex flex-column self-end'>
                      <DurationFavorited
                        hover={isHovered}
                        duration={duration}
                        favorited={favorited}
                        completed={completed}
                        lesson_id={id}
                        handleContentFavorited={handleContentFavorited}
                        currentUser={currentUser}
                      />
                      <TagFolder tag={tag} tagUrl={tagUrl} extraClasses='dn flex-ns' />
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {(showCardProgress && item.lesson_count > 0) &&
              <ContentCardProgress
                watched_count={progress.completed_lesson_count}
                lesson_count={item.lesson_count} />
            }
          </div>

          <ToggleArea
            showToggleForCourseCard={showToggleForCourseCard}
            showToggleForLessonCard={showToggleForLessonCard}
            toggleHandler={this.toggleExpanded}
            expanded={expanded}
            hover={isHovered}
            isLesson={isLesson}
          />
        </div>

        <SublistArea
          sortable={sortable}
          sublist={sublist}
          expanded={expanded}
          showToggleForCourseCard={showToggleForCourseCard}
          showToggleForLessonCard={showToggleForLessonCard}
          item={item}
          content_list={content_list}
          new_series_lesson_url={new_series_lesson_url}
          edit_series_http_url={edit_series_http_url}
          showItemNumbers={showItemNumbers}
        />
      </div>
    )
  }
}

ContentListCard.propTypes = {
  completed: PropTypes.bool,
  smallIconUrl: PropTypes.string,
  labelColor: PropTypes.string,
  illustrationUrl: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  instructorAvatarUrl: PropTypes.string,
  instructorName: PropTypes.string,
  duration: PropTypes.number,
  contentUrl: PropTypes.string,
  lessons: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  tag: PropTypes.string,
  rowSpacing: PropTypes.string,
  showProgress: PropTypes.bool
}

export default ContentListCard
