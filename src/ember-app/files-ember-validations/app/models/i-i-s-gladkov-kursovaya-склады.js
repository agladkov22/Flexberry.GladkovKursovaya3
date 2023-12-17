import {
  defineNamespace,
  defineProjections,
  Model as СкладыMixin
} from '../mixins/regenerated/models/i-i-s-gladkov-kursovaya-склады';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СкладыMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
