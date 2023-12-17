import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-gladkov-kursovaya-тех-карты-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-gladkov-kursovaya-тч-тех-карты+заявки':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'наименДетали',
            required: true,
            relationName: 'заявки',
            projection: 'ЗаявкиL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-gladkov-kursovaya-тч-тех-карты+чертежи':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'номерЧертежа',
            required: true,
            relationName: 'чертежи',
            projection: 'ЧертежиL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-gladkov-kursovaya-тч-тех-карты+оборудование':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'наименование',
            required: true,
            relationName: 'оборудование',
            projection: 'ОборудованиеL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
