import React from 'react'
import Steps from './components/Steps'
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
            ]}
          >
            <div className="flex flex-column flex-row-ns items-center pa4">
              <div className="flex w-60-ns mb4">
                <img className="h3 w3 mr3" src={this.quickLessonWizardStore.lesson.series.square_cover_url} />
                <div className="mr4-ns">
                  <div className="ttu white-60 f6 mb2">Part of a course</div>
                  <div className="light-gray f4">{this.quickLessonWizardStore.lesson.series.title}</div>
                </div>
              </div>
              <div className="flex justify-end w-40-ns">
                <Button
                  color="white-60"
                  outline
                >
                  Switch to advanced form
                </Button>
              </div>
            </div>
          </Steps>
        </Provider>
      </div>
    );
  }
}

export default QuickLessonWizard
