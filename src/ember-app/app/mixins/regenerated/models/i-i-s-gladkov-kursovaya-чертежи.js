import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаСоздания: DS.attr('date'),
  номерЧертежа: DS.attr('number'),
  утверждение: DS.attr('boolean'),
  заявки: DS.belongsTo('i-i-s-gladkov-kursovaya-заявки', { inverse: null, async: false })
});

export let ValidationRules = {
  датаСоздания: {
    descriptionKey: 'models.i-i-s-gladkov-kursovaya-чертежи.validations.датаСоздания.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номерЧертежа: {
    descriptionKey: 'models.i-i-s-gladkov-kursovaya-чертежи.validations.номерЧертежа.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  утверждение: {
    descriptionKey: 'models.i-i-s-gladkov-kursovaya-чертежи.validations.утверждение.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  заявки: {
    descriptionKey: 'models.i-i-s-gladkov-kursovaya-чертежи.validations.заявки.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЧертежиE', 'i-i-s-gladkov-kursovaya-чертежи', {
    номерЧертежа: attr('Номер чертежа', { index: 0 }),
    датаСоздания: attr('Дата создания', { index: 1 }),
    утверждение: attr('Утверждение', { index: 5 })
  });

  modelClass.defineProjection('ЧертежиL', 'i-i-s-gladkov-kursovaya-чертежи', {
    номерЧертежа: attr('Номер чертежа', { index: 0 }),
    датаСоздания: attr('Дата создания', { index: 1 }),
    утверждение: attr('Утверждение', { index: 4 })
  });
};
