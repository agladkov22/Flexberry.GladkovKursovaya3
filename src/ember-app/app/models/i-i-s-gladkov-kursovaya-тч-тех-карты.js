import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТчТехКартыMixin
} from '../mixins/regenerated/models/i-i-s-gladkov-kursovaya-тч-тех-карты';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТчТехКартыMixin, Validations, {
});

defineProjections(Model);

export default Model;
