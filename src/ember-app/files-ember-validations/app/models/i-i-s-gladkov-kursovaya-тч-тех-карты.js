import {
  defineNamespace,
  defineProjections,
  Model as ТчТехКартыMixin
} from '../mixins/regenerated/models/i-i-s-gladkov-kursovaya-тч-тех-карты';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТчТехКартыMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
