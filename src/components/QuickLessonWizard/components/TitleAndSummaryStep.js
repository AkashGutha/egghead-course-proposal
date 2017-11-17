import React from 'react'
import Button from 'app/components/Button';
import Icon from 'app/components/Icon';
import Title from 'app/screens/lessons/components/fields/Title'
import Description from 'app/screens/lessons/components/fields/Description'
import {inject, observer} from 'mobx-react'

const TitleAndSummaryStep = ({quickLessonWizardStore }) => (
  <div>
    <div className="bg-white-secondary pa4">
      <Title item={quickLessonWizardStore.lesson} />
      <Description item={quickLessonWizardStore.lesson} />
    </div>
    <div className="flex flex-column flex-row-ns justify-between pa4">
      <div className="flex flex-column items-stretch mb2 mr2-ns mb0-ns">
        <Button outline color="red">
          <div className="mr2">Cancel</div>
          <Icon type="trash" color="red" size="6" />
        </Button>
      </div>
      <div className="flex flex-column items-stretch mb2 mr2-ns mb0-ns">
        <Button outline color="green">
          <div className="mr2">Save & Exit</div>
          <Icon type="floppy-o" color="green" size="6" />
        </Button>
      </div>
      <div className="flex flex-column items-stretch mb2 mb0-ns">
        <Button color="green">
          <div className="mr2">Save & Upload Video</div>
          <Icon type="long-arrow-right" color="white" size="6" />
        </Button>
      </div>
    </div>
  </div>
)

export default inject('quickLessonWizardStore')(observer(TitleAndSummaryStep))
