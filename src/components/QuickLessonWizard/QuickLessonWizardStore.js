import {observable, action} from 'mobx'

export default class QuickLessonWizardStore {
  @observable lesson = mockLesson

}

const mockLesson = {
  title: "The brown dog...",
  description: "jumped over...",
  instructors: {
    "id": 40,
    "slug": "ian-jones",
    "full_name": "Ian Jones",
    "first_name": "Ian",
    "last_name": "Jones",
    "twitter": "_jonesian",
    "website": "http://ijones16.github.io/",
    "bio": null,
    "bio_short": "Ian Jones is currently a senior computer science major with an interest in JavaScript.",
    "google_plus": "",
    "http_url": "http://egghead.dev:3000/instructors/ian-jones",
    "avatar_url": "https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/040/original/12250560_10207494862240414_2009071913_o.jpg?1448306371",
    "lessons_url": "http://egghead.dev:3000/api/v1/instructors/ian-jones/lessons",
    "published_lessons": 0,
    "published_courses": 0,
    "slack_id": null,
    "email": null,
    "gear_tracking_number": null,
    "pending_lessons": 0,
    "claimed_lessons": 0,
    "submitted_lessons": 0,
    "approved_lessons": 0,
    "reviewing_lessons": 0
  },
  series: {
    "id": 25,
    "title": "Getting Started with Redux",
    "slug": "getting-started-with-redux",
    "cover": "https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/025/full/EGH_Redux-New.png?1496436379",
    "square_cover_url": "https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/025/full/EGH_Redux-New.png?1496436379",
    "instructor": {
      "id": 32,
      "name": "Dan Abramov",
      "full_name": "Dan Abramov",
      "avatar": "https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/032/thumb/9VsY9i09.jpeg?1444932586",
      "avatar_url": "https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/032/thumb/9VsY9i09.jpeg?1444932586"
    },
    "lessonsCount": 30,
    "http_url": "https://egghead.io/courses/getting-started-with-redux",
    "duration": 7285,
  },
  code: {},
  tags: {},
}