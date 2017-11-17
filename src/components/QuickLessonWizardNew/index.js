import React from 'react'
// import Steps from './components/Steps'
import Steps from 'components/Steps'
import TitleAndSummaryStep from './components/TitleAndSummaryStep';
import UploadVideoStep from './components/UploadVideoStep';
import AddCodeStep from './components/AddCodeStep';
import TagLessonStep from './components/TagLessonStep';
import Button from 'components/Button';
import Icon from 'components/Icon';
import {Provider} from 'mobx-react'
import QuickLessonWizardStore from './QuickLessonWizardStore'
import {observer} from 'mobx-react'

@observer
class QuickLessonWizard extends React.Component {
  constructor(props) {
    super(props)
    this.quickLessonWizardStore = new QuickLessonWizardStore()
  }
  render() {
    return (
      <div className="mw8 bg-base br2">
        <Provider quickLessonWizardStore={this.quickLessonWizardStore}>
          <Steps
          steps={[
              { title: 'Title & Summary', component: <TitleAndSummaryStep /> },
              { title: 'Upload video', component: <UploadVideoStep /> },
              { title: 'Add code', component: <AddCodeStep /> },
              { title: 'Tag lesson', component: <TagLessonStep /> },
            ]}>
          </Steps>
        </Provider>
      </div>
    );
  }
}

export default QuickLessonWizard
