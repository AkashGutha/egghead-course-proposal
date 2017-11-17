import React from 'react'
 import css from './index.scss';
import Markdown from 'components/Markdown'
import Icon from 'components/Icon'
import downloadPDF from './logos/downloadPDF.png'
import enchancedTranscript from './logos/enchancedTranscript.png'

const Transcript = ({text, isUserPro, enhanced}) => {
  const subscriptionSection = !isUserPro && enhanced &&
    <div className='bg-gray pa3 pa4-ns flex items-center'>
      <img alt='' src={enchancedTranscript} className={`mr3 mr4-ns ${css.subscriptionSectionLogo}`} />
      <div className='flex'>
        <div className='flex flex-column'>
          <h4 className={`dark-blue lh-title fw5 mt0 mb3 ${css.subscriptionSectionTitle}`}>Enhanced Transcript Available</h4>
          <a href='/pricing' className={`flex self-start link bg-green white fw6 br-pill bn lh-copy ttu pointer ${css.subscriptionSectionCTA}`}>Go Pro and get it</a>
        </div>
        <ul className={`list pa0 ma0 dark-gray ml4-m ml5-l dn db-ns ${css.subscriptionSectionList}`}>
          <li className='flex items-baseline'>
            <div className='flex-shrink-0'>
              <Icon type='check' color='green' size='5' />
            </div>
            <span className='ml2'>Cut and Paste Code Examples</span>
          </li>
          {/* list item bellow is hidden while we have no Download PDF link */}
          <li className='flex items-baseline'>
            <div className='flex-shrink-0'>
              <Icon type='check' color='green' size='5' />
            </div>
            <span className='ml2'>Enhanced your knowledge</span>
          </li>
          <li className='flex items-baseline'>
            <div className='flex-shrink-0'>
              <Icon type='check' color='green' size='5' />
            </div>
            <span className='ml2'>Read the lesson to follow along</span>
          </li>
        </ul>
      </div>
    </div>
  return (
    <div className='bg-white br2 mt2 overflow-hidden'>
      {subscriptionSection}
      <div className={` black-90 pa3 pa4-ns br--bottom lh-copy ${css.box}`}>
        <Markdown>
          {text}
        </Markdown>
      </div>
    </div>
  )
}

export default Transcript;
