import PropTypes from 'prop-types'

const { string, bool, number, array, oneOfType, object, func, shape } = PropTypes

export const propTypes = {
  url: oneOfType([ string, array ]),
  wistia_url: oneOfType([ string, array ]),
  hls_url: oneOfType([ string, array ]),
  dash_url: oneOfType([ string, array ]),
  poster: string,
  playing: bool,
  loop: bool,
  controls: bool,
  volume: number,
  playbackRate: number,
  width: oneOfType([ string, number ]),
  height: oneOfType([ string, number ]),
  style: object,
  title: string,
  description: string,
  progressFrequency: number,
  playsinline: bool,
  onReady: func,
  onStart: func,
  onPlay: func,
  onPause: func,
  onBuffer: func,
  onEnded: func,
  onError: func,
  onDuration: func,
  onProgress: func
}

export const defaultProps = {
  playing: false,
  loop: false,
  controls: false,
  volume: 0.8,
  playbackRate: 1,
  width: 640,
  height: 360,
  hidden: false,
  progressFrequency: 1000,
  playsinline: false,
  onReady: function () {},
  onStart: function () {},
  onPlay: function () {},
  onPause: function () {},
  onBuffer: function () {},
  onEnded: function () {},
  onError: function () {},
  onDuration: function () {},
  onProgress: function () {}
}
