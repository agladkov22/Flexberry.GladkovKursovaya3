import {
  defineNamespace,
  defineProjections,
  Model as МатериалыMixin
} from '../mixins/regenerated/models/i-i-s-gladkov-kursovaya-материалы';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(МатериалыMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
