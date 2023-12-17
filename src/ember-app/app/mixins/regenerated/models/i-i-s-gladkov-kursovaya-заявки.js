import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаЗаявки: DS.attr('date'),
  количество: DS.attr('number'),
  наименДетали: DS.attr('string'),
  номерЗаявки: DS.attr('number'),
  цена: DS.attr('decimal'),
  клиенты: DS.belongsTo('i-i-s-gladkov-kursovaya-клиенты', { inverse: null, async: false }),
  материалы: DS.belongsTo('i-i-s-gladkov-kursovaya-материалы', { inverse: null, async: false })
});

export let ValidationRules = {
  датаЗаявки: {
    descriptionKey: 'models.i-i-s-gladkov-kursovaya-заявки.validations.датаЗаявки.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  количество: {
    descriptionKey: 'models.i-i-s-gladkov-kursovaya-заявки.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименДетали: {
    descriptionKey: 'models.i-i-s-gladkov-kursovaya-заявки.validations.наименДетали.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерЗаявки: {
    descriptionKey: 'models.i-i-s-gladkov-kursovaya-заявки.validations.номерЗаявки.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  цена: {
    descriptionKey: 'models.i-i-s-gladkov-kursovaya-заявки.validations.цена.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  клиенты: {
    descriptionKey: 'models.i-i-s-gladkov-kursovaya-заявки.validations.клиенты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  материалы: {
    descriptionKey: 'models.i-i-s-gladkov-kursovaya-заявки.validations.материалы.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаявкиE', 'i-i-s-gladkov-kursovaya-заявки', {
    номерЗаявки: attr('Номер заявки', { index: 0 }),
    датаЗаявки: attr('Дата заявки', { index: 1 }),
    наименДетали: attr('Наименование детали', { index: 2 }),
    клиенты: belongsTo('i-i-s-gladkov-kursovaya-клиенты', 'Клиенты', {
      наименование: attr('Клиент', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'наименование' }),
    материалы: belongsTo('i-i-s-gladkov-kursovaya-материалы', 'Материалы', {
      наименование: attr('Материал', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'наименование' }),
    количество: attr('Количество', { index: 7 }),
    цена: attr('Цена', { index: 8 })
  });

  modelClass.defineProjection('ЗаявкиL', 'i-i-s-gladkov-kursovaya-заявки', {
    номерЗаявки: attr('Номер заявки', { index: 0 }),
    датаЗаявки: attr('Дата заявки', { index: 1 }),
    наименДетали: attr('Наименование детали', { index: 2 }),
    клиенты: belongsTo('i-i-s-gladkov-kursovaya-клиенты', 'Клиент', {
      наименование: attr('Клиент', { index: 3 })
    }, { index: -1, hidden: true }),
    материалы: belongsTo('i-i-s-gladkov-kursovaya-материалы', 'Материал', {
      наименование: attr('Материал', { index: 4 })
    }, { index: -1, hidden: true }),
    количество: attr('Количество', { index: 5 }),
    цена: attr('Цена', { index: 6 })
  });
};
