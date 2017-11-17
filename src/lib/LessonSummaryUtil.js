import {isEmpty, isUndefined, keys, includes} from 'lodash'
import humanizeList from 'humanize-list'

const buildCountsString = counts => {
  let countList = []

  includes(keys(counts), 'approved')
    ? countList.push(`${counts['approved']} approved`)
    : null
  includes(keys(counts), 'rejected')
    ? countList.push(`${counts['rejected']} waiting for changes`)
    : null
  includes(keys(counts), 'submitted')
    ? countList.push(`${counts['submitted']} submitted for review`)
    : null

  return humanizeList(countList)
}

const lessonSummary = lessons => {
  if (isEmpty(lessons)) {
    return ''
  }

  const counts = lessons.reduce((summary, lesson) => {
    if (isUndefined(summary[lesson.state])) {
      const key = lesson.state
      let newSummary = {}
      newSummary[key] = 1

      return Object.assign(summary, newSummary)
    }

    summary[lesson.state] = summary[lesson.state] + 1

    return summary
  }, {})

  return buildCountsString(counts)
}

export default lessonSummary
