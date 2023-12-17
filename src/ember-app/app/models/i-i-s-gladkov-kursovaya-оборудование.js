import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ОборудованиеMixin
} from '../mixins/regenerated/models/i-i-s-gladkov-kursovaya-оборудование';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ОборудованиеMixin, Validations, {
});

defineProjections(Model);

export default Model;
