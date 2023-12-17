import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  заявки: DS.belongsTo('i-i-s-gladkov-kursovaya-заявки', { inverse: null, async: false }),
  оборудование: DS.belongsTo('i-i-s-gladkov-kursovaya-оборудование', { inverse: null, async: false }),
  чертежи: DS.belongsTo('i-i-s-gladkov-kursovaya-чертежи', { inverse: null, async: false }),
  техКарты: DS.belongsTo('i-i-s-gladkov-kursovaya-тех-карты', { inverse: 'тчТехКарты', async: false })
});

export let ValidationRules = {
  заявки: {
    descriptionKey: 'models.i-i-s-gladkov-kursovaya-тч-тех-карты.validations.заявки.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  оборудование: {
    descriptionKey: 'models.i-i-s-gladkov-kursovaya-тч-тех-карты.validations.оборудование.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  чертежи: {
    descriptionKey: 'models.i-i-s-gladkov-kursovaya-тч-тех-карты.validations.чертежи.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  техКарты: {
    descriptionKey: 'models.i-i-s-gladkov-kursovaya-тч-тех-карты.validations.техКарты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТчТехКартыE', 'i-i-s-gladkov-kursovaya-тч-тех-карты', {
    заявки: belongsTo('i-i-s-gladkov-kursovaya-заявки', 'Заявки', {
      наименДетали: attr('Наимен детали', { index: 1, hidden: true })
    }, { index: 0, displayMemberPath: 'наименДетали' }),
    чертежи: belongsTo('i-i-s-gladkov-kursovaya-чертежи', 'Чертежи', {
      номерЧертежа: attr('Номер чертежа', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'номерЧертежа' }),
    оборудование: belongsTo('i-i-s-gladkov-kursovaya-оборудование', 'Оборудование', {
      наименование: attr('Наименование', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'наименование' })
  });
};
