import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ЧертежиMixin
} from '../mixins/regenerated/models/i-i-s-gladkov-kursovaya-чертежи';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ЧертежиMixin, Validations, {
});

defineProjections(Model);

export default Model;
