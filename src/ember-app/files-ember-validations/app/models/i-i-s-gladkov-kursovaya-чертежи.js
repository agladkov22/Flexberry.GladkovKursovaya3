import {
  defineNamespace,
  defineProjections,
  Model as ЧертежиMixin
} from '../mixins/regenerated/models/i-i-s-gladkov-kursovaya-чертежи';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЧертежиMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
