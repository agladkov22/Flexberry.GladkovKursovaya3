import Mixin from '@ember/object/mixin';
import $ from 'jquery';

export let Serializer = Mixin.create({
  getAttrs: function () {
    let parentAttrs = this._super();
    let attrs = {
      заявки: { serialize: 'odata-id', deserialize: 'records' },
      оборудование: { serialize: 'odata-id', deserialize: 'records' },
      чертежи: { serialize: 'odata-id', deserialize: 'records' },
      техКарты: { serialize: 'odata-id', deserialize: 'records' }
    };

    return $.extend(true, {}, parentAttrs, attrs);
  },
  init: function () {
    this.set('attrs', this.getAttrs());
    this._super(...arguments);
  }
});
