import React from 'react'
import Button from 'app/components/Button';
import Icon from 'app/components/Icon';
import {inject, observer} from 'mobx-react'

import ItemTagging from 'components/ItemTagging'

const TagLessonStep = ({quickLessonWizardStore }) => (
  <div>
    <div className="bg-white-secondary pa4">
      <ItemTagging item={quickLessonWizardStore.lesson} />
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
          <div className="mr2">Save & Review Lesson</div>
        </Button>
      </div>
    </div>
  </div>
)

export default inject('quickLessonWizardStore')(observer(TagLessonStep))
