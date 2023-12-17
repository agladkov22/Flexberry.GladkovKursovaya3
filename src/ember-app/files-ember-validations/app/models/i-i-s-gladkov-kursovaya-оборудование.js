import {
  defineNamespace,
  defineProjections,
  Model as ОборудованиеMixin
} from '../mixins/regenerated/models/i-i-s-gladkov-kursovaya-оборудование';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ОборудованиеMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
