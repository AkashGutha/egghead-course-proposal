import React from 'react'
import Request from 'components/Request'
import Placeholder from 'components/Placeholder'
import CardGrid22 from 'components/ContentCard/layouts/CardGrid22'
import ContentList from 'components/ContentList'
import Button from 'components/Button'
import StaticContentList from 'components/StaticContentList'
import ExternalTrackingLink from 'components/ExternalTrackingLink'
import Dots from 'components/Loading/Dots'
import { isEmpty } from 'lodash'
import Waypoint from 'react-waypoint'
import axios from 'axios'

const http = axios.create()

export class WhatsNew extends React.Component {
  state = {
    series_list: [],
    lessons_list: []
  }

  getContent () {
    this.fetchSeries()
    this.fetchLessons()
  }

  fetchSeries () {
    http.get(`/api/v1/series?state=published&load_lessons=false`)
      .then((response) => {
        this.setState({
          series_list: response.data
        })
      })
  }

  fetchLessons () {
    http.get(`/api/v1/lessons?state=published&without_course=true`)
      .then((response) => {
        this.setState({
          lessons_list: response.data.slice(0, 6)
        })
      })
  }

  render() {
    const { series_list, lessons_list } = this.state

    return (
      <div className='pt5 ph3-ns pv4-ns center bg-white-secondary'>
        <Waypoint
          onEnter={() => this.getContent()}
        />
        <div className='mt0 mt4-l flex flex-column items-center justify-center avenir'>
          <span className='f3 f2-l fw6'>What&#39;s New</span>
          <span className='f5 f4-l fw6 ttu'>Latest Published Lessons &amp; Courses</span>
        </div>

        <div className='eh-mw9 center flex flex-column flex-row-l w-100 mt5 ph2 ph0-m ph0-l'>
          <div className='w-50-l mr3-l'>
            {isEmpty(lessons_list) ? <Dots /> : <ContentList content_list={lessons_list} className='br2' />}
          </div>

          <div className='w-50-l'>
            {isEmpty(series_list) ? <Dots /> : <CardGrid22 items={series_list} />}
          </div>
        </div>

        <div className='flex justify-center w-100 mt5 pb5 ph2 ph0-m ph0-l'>
          <Button outline color='black' size='xlarge'>
            <ExternalTrackingLink
              href='/courses'
              className='black no-underline'
              track={`clicked courses`}
            >
              See the Rest
            </ExternalTrackingLink>
          </Button>
        </div>
      </div>
    )
  }
}

export class InProductionContent extends React.Component {
  state = {
    content: []
  }

  fetchContent () {
    http.get(`/api/v1/series?load_lessons=false&queued=true&size=all`)
      .then(({data}) => {
        this.setState({
          content: data
        })
      })
  }

  render () {
    const { content } = this.state

    return (
      <div className='pt5 mt0 ph3-ns pv4-ns center bg-white'>
        <div className='mt0 mt4-l flex flex-column items-center justify-center avenir'>
          <span className='f3 f2-l fw6 mb2'>Courses in Production</span>
          <span className='f6 f5-l fw6 ph3 ph0-ns mb2'>
            There are more courses being created for you.
          </span>
          <span className='f6 f5-l fw6 ph3 ph0-ns'>
            We will let you know as soon as they are complete and ready to watch.
          </span>
        </div>

        <div className='flex justify-center items-center w-100 mt5'>
          <div className='w-100 w-50-l'>
            <Waypoint
              onEnter={() => this.fetchContent()}
            />
            {isEmpty(content) ? <Dots /> : <StaticContentList content_list={content} />}
          </div>
        </div>
      </div>
    )
  }
}
