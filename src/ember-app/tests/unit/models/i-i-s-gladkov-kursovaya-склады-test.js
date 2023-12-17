import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-gladkov-kursovaya-склады', 'Unit | Model | i-i-s-gladkov-kursovaya-склады', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-gladkov-kursovaya-заявки',
    'model:i-i-s-gladkov-kursovaya-клиенты',
    'model:i-i-s-gladkov-kursovaya-материалы',
    'model:i-i-s-gladkov-kursovaya-оборудование',
    'model:i-i-s-gladkov-kursovaya-склады',
    'model:i-i-s-gladkov-kursovaya-тех-карты',
    'model:i-i-s-gladkov-kursovaya-тч-тех-карты',
    'model:i-i-s-gladkov-kursovaya-чертежи',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
