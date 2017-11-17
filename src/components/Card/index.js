import React from 'react'
import PropTypes from 'prop-types'

const containerClasses = `
  bg-white 
  flex 
  flex-grow-1 
  justify-between 
  flex-column 
  black-90 
  br2 
  shadow-1
`

class Card extends React.Component {
    static propTypes = {
      overflow: PropTypes.bool
    }

    render() {
        const containerStyle = {'width': '280px'}
        const { overflow } = this.props
        return (
            <div className={`${containerClasses} ${overflow ? '' : 'overflow-hidden'}`}>
                {this.props.children}
            </div>
        )
    }
}

export default Card
