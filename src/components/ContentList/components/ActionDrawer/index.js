import React from 'react'
import { isUndefined } from 'lodash'
import Icon from 'components/Icon'
import ContentActions from 'components/ContentActions'
import {observer, inject} from 'mobx-react'
import {css} from 'glamor'

import ActionButton from '../ContentListActionButton'
import { NewLessonButton } from 'components/ActionButton'



export const ActionDrawer = inject('contentListStore')(observer(({contentListStore, item, noBorder=false}) => {
  const {
          edit_lesson_http_url,
          edit_series_http_url } = item

  const itemType = edit_lesson_http_url ? 'lesson' : edit_series_http_url ? 'course' : 'item'

  return (
    <div className={`flex justify-end bg-white-secondary b--gray-secondary ${noBorder ? '' : 'bb'}`}>
      <ContentActions item={item} updateContent={contentListStore.updateItem}>
        {({actions}) => (
          <div className="flex justify-center items-center h-100">
            {actions.map((action) => (
              <ActionButton key={action.label} {...action}/>
            ))}
          </div>
        )}
      </ContentActions>
    </div>
  )
}))

export const NewLessonActionDrawer = ({item}) => {
  const { new_series_lesson_http_url } = item



  if (isUndefined(item)) {
    return <div />
  }
  return (
    <div className='flex bg-white bb b--gray-secondary'>
      {new_series_lesson_http_url && <NewLessonButton url={new_series_lesson_http_url} />}
    </div>
  )
}
