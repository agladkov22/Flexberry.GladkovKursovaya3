import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-gladkov-kursovaya-заявки', 'Unit | Serializer | i-i-s-gladkov-kursovaya-заявки', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-gladkov-kursovaya-заявки',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-gladkov-kursovaya-состояние',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
