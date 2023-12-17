import { Serializer as ТехКартыSerializer } from
  '../mixins/regenerated/serializers/i-i-s-gladkov-kursovaya-тех-карты';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТехКартыSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
