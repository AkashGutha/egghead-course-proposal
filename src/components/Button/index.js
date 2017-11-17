import React from 'react'
import PropTypes from 'prop-types'
import colors from 'lib/colors'
import css from './index.scss'

export const sizes = ['small', 'medium', 'large', 'xlarge']

const Button = ({
  children,
  onClick,
  size,
  color,
  outline,
  overDark,
}) => (
  <button
    className={`
      flex items-center justify-center
      f6 fw6 ttu b
      ba br-pill
      pointer
      ${css.borderWidth}
      b--${color}
      ${outline
        ? `bg-transparent ${color}`
        : `bg-${color} white`
      }
      ${overDark ? css.overDark : css.noDark}
      ${css[size]}
    `}
    onClick={onClick}
  >
    {children}
  </button>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(sizes),
  color: PropTypes.oneOf(colors),
  outline: PropTypes.bool,
  overDark: PropTypes.bool,
}

Button.defaultProps = {
  size: 'medium',
  color: 'orange',
  outline: false,
  overDark: false,
}

export default Button
