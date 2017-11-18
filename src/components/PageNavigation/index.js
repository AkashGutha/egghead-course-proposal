import React from 'react'
import Footer from 'components/Footer'
import Header from 'components/Header'
import {inject, observer} from 'mobx-react'

const PageNavigation = ({children, currentUserStore}) => (
  <div>
    <div className="bg-base-secondary">
      <section className="mw9 center">
        <Header current_user={currentUserStore.currentUser} />
      </section>
    </div>
    {children}
    <div className="bg-base-secondary">
      <section className="mw9 center">
        <Footer current_user={currentUserStore.currentUser} />
      </section>
    </div>
  </div>
)

export default inject('currentUserStore')(observer(PageNavigation))
