import React from 'react'
import Button from 'components/Button';
import Icon from 'components/Icon';
import Code from 'screens/lessons/components/fields/Code'
import {inject, observer} from 'mobx-react'

const AddCodeStep = ({quickLessonWizardStore }) => (
  <div>
    <div className="bg-white-secondary pa4">
      <Code lesson={quickLessonWizardStore.lesson} />
    </div>
    <div className="flex flex-column flex-row-ns justify-between pa4">
      <div className="flex flex-column items-stretch mb2 mr2-ns mb0-ns">
        <Button outline color="gray">
          <div className="mr2">Exit</div>
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
          <div className="mr2">Add Code & Tag</div>
          <Icon type="long-arrow-right" color="white" size="6" />
        </Button>
      </div>
    </div>
  </div>
)

export default inject('quickLessonWizardStore')(observer(AddCodeStep))
