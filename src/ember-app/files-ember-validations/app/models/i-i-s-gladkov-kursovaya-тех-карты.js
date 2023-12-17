import {
  defineNamespace,
  defineProjections,
  Model as ТехКартыMixin
} from '../mixins/regenerated/models/i-i-s-gladkov-kursovaya-тех-карты';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТехКартыMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
