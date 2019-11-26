import entryFactory from 'bpmn-js-properties-panel/lib/factory/EntryFactory';

import {
  is,
  getBusinessObject
} from 'bpmn-js/lib/util/ModelUtil';
import {
  utils}
  from 'bpmn-js-properties-panel/lib/provider/camunda/parts/ScriptTaskProps';


export default function(group, element) {

  // Only return an entry, if the currently selected
  // element is a start event.

  if (is(element, 'bpmn:StartEvent')) {
    group.entries.push(entryFactory.textField({
      id : 'spell',
      description : 'Apply a black magic spell',
      label : 'Spell',
      modelProperty : 'spell',
      validate: function(element, values) {
        var nodeNameValue = values.nodeName;
        var bo = getBusinessObject(element);
        var validationResult = {};
        var textError = utils.validate(element, "Integer");
        return textError ? { nodeName: textError } : {};
     },
    }));
  }
}