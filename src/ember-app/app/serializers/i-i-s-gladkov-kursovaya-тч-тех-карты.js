import { Serializer as ТчТехКартыSerializer } from
  '../mixins/regenerated/serializers/i-i-s-gladkov-kursovaya-тч-тех-карты';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТчТехКартыSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
