import React from 'react'
import { isUndefined } from 'lodash'

const ContentCardProgress = ({watched_count, lesson_count}) => {
  const width = isUndefined(watched_count) ? 0 : Math.round((watched_count / lesson_count) * 100)
  return (
    <div className='w-100 bg-white-90 relative'>
      <div className='pv1 bg-orange bl bb bb1 b--white-90' style={{
        width: `${width}%`
      }} />
    </div>
  )
}

export default ContentCardProgress
