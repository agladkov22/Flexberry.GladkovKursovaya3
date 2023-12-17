import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iD: DS.attr('number'),
  банк: DS.attr('string'),
  иНН: DS.attr('number'),
  наименование: DS.attr('string'),
  ответственный: DS.attr('string'),
  почта: DS.attr('string'),
  расСчет: DS.attr('number'),
  телефон: DS.attr('number')
});

export let ValidationRules = {
  iD: {
    descriptionKey: 'models.i-i-s-gladkov-kursovaya-клиенты.validations.iD.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  банк: {
    descriptionKey: 'models.i-i-s-gladkov-kursovaya-клиенты.validations.банк.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  иНН: {
    descriptionKey: 'models.i-i-s-gladkov-kursovaya-клиенты.validations.иНН.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-gladkov-kursovaya-клиенты.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  ответственный: {
    descriptionKey: 'models.i-i-s-gladkov-kursovaya-клиенты.validations.ответственный.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  почта: {
    descriptionKey: 'models.i-i-s-gladkov-kursovaya-клиенты.validations.почта.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  расСчет: {
    descriptionKey: 'models.i-i-s-gladkov-kursovaya-клиенты.validations.расСчет.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  телефон: {
    descriptionKey: 'models.i-i-s-gladkov-kursovaya-клиенты.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КлиентыE', 'i-i-s-gladkov-kursovaya-клиенты', {
    iD: attr('ID', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    ответственный: attr('Ответственный', { index: 2 }),
    телефон: attr('Телефон', { index: 3 }),
    почта: attr('Почта', { index: 4 }),
    банк: attr('Банк', { index: 5 }),
    расСчет: attr('Рас счет', { index: 6 }),
    иНН: attr('ИНН', { index: 7 })
  });

  modelClass.defineProjection('КлиентыL', 'i-i-s-gladkov-kursovaya-клиенты', {
    iD: attr('ID', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    ответственный: attr('Ответственный', { index: 2 }),
    телефон: attr('Телефон', { index: 3 }),
    почта: attr('Почта', { index: 4 }),
    банк: attr('Банк', { index: 5 }),
    расСчет: attr('Рас счет', { index: 6 }),
    иНН: attr('ИНН', { index: 7 })
  });
};
