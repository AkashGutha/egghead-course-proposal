import React from 'react'
import {Helmet} from 'react-helmet'
import {get, isString} from 'lodash'

export default ({title, twitter}) => {
  return <Helmet>
      <title itemProp="name" lang="en">{`${title} ${isString(twitter) ? `from @${twitter} ` : ''}on @eggheadio`}</title>
    </Helmet>
}