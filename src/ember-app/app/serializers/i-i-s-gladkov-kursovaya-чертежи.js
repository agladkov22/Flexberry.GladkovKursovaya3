import { Serializer as ЧертежиSerializer } from
  '../mixins/regenerated/serializers/i-i-s-gladkov-kursovaya-чертежи';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЧертежиSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
