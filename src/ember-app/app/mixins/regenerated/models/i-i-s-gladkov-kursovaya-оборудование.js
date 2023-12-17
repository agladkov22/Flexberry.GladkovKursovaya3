import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iD: DS.attr('number'),
  наименование: DS.attr('string'),
  состояние: DS.attr('i-i-s-gladkov-kursovaya-состояние')
});

export let ValidationRules = {
  iD: {
    descriptionKey: 'models.i-i-s-gladkov-kursovaya-оборудование.validations.iD.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-gladkov-kursovaya-оборудование.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  состояние: {
    descriptionKey: 'models.i-i-s-gladkov-kursovaya-оборудование.validations.состояние.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОборудованиеE', 'i-i-s-gladkov-kursovaya-оборудование', {
    iD: attr('ID', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    состояние: attr('Состояние', { index: 2 })
  });

  modelClass.defineProjection('ОборудованиеL', 'i-i-s-gladkov-kursovaya-оборудование', {
    iD: attr('ID', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    состояние: attr('Состояние', { index: 2 })
  });
};
