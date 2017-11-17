import {first, isEmpty, isUndefined, get} from 'lodash'

export default function convertToItem(item) {
  if (isEmpty(item)) return
  const {instructor, technology} = item
  const tag = !isEmpty(item.tags) && first(item.tags)
  const contentIsCourse = !isUndefined(item.square_cover_url)
  return {
    id: item.slug,
    title: item.title,
    slug: item.slug,
    state: item.state,
    instructorAvatarUrl: get(instructor, 'avatar_url'),
    instructorUrl: get(instructor, 'http_url'),
    instructorName: get(instructor, 'full_name'),
    smallIconUrl: item.icon_url,
    summary: item.summary,
    duration: item.duration,
    label: contentIsCourse ? 'Course' : 'Lesson',
    labelColor: contentIsCourse ? 'orange' : 'green',
    contentUrl: contentIsCourse
      ? `/courses/${item.slug}`
      : `/lessons/${item.slug}`,
    path: item.path,
    illustrationUrl: item.square_cover_url,
    completed: item.completed || false,
    favorited: item.favorited,
    lessons: item.lessons,
    lessons_url: item.lessons_url,
    lessonCount: item.lesson_count || false,
    tag: tag.name,
    tagUrl: `/browse/${tag.context}/${tag.name}`,
    progress: item.progress,
    new_series_lesson_url: item.new_series_lesson_url,
    edit_series_http_url: item.edit_series_http_url,
    update_lesson_url: item.update_lesson_url,
    isPro: contentIsCourse ? !item.free_forever : item.is_pro_content,
    item,
  }
}
