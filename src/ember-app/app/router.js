import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-gladkov-kursovaya-заявки-l');
  this.route('i-i-s-gladkov-kursovaya-заявки-e',
  { path: 'i-i-s-gladkov-kursovaya-заявки-e/:id' });
  this.route('i-i-s-gladkov-kursovaya-заявки-e.new',
  { path: 'i-i-s-gladkov-kursovaya-заявки-e/new' });
  this.route('i-i-s-gladkov-kursovaya-клиенты-l');
  this.route('i-i-s-gladkov-kursovaya-клиенты-e',
  { path: 'i-i-s-gladkov-kursovaya-клиенты-e/:id' });
  this.route('i-i-s-gladkov-kursovaya-клиенты-e.new',
  { path: 'i-i-s-gladkov-kursovaya-клиенты-e/new' });
  this.route('i-i-s-gladkov-kursovaya-материалы-l');
  this.route('i-i-s-gladkov-kursovaya-материалы-e',
  { path: 'i-i-s-gladkov-kursovaya-материалы-e/:id' });
  this.route('i-i-s-gladkov-kursovaya-материалы-e.new',
  { path: 'i-i-s-gladkov-kursovaya-материалы-e/new' });
  this.route('i-i-s-gladkov-kursovaya-оборудование-l');
  this.route('i-i-s-gladkov-kursovaya-оборудование-e',
  { path: 'i-i-s-gladkov-kursovaya-оборудование-e/:id' });
  this.route('i-i-s-gladkov-kursovaya-оборудование-e.new',
  { path: 'i-i-s-gladkov-kursovaya-оборудование-e/new' });
  this.route('i-i-s-gladkov-kursovaya-склады-l');
  this.route('i-i-s-gladkov-kursovaya-склады-e',
  { path: 'i-i-s-gladkov-kursovaya-склады-e/:id' });
  this.route('i-i-s-gladkov-kursovaya-склады-e.new',
  { path: 'i-i-s-gladkov-kursovaya-склады-e/new' });
  this.route('i-i-s-gladkov-kursovaya-тех-карты-l');
  this.route('i-i-s-gladkov-kursovaya-тех-карты-e',
  { path: 'i-i-s-gladkov-kursovaya-тех-карты-e/:id' });
  this.route('i-i-s-gladkov-kursovaya-тех-карты-e.new',
  { path: 'i-i-s-gladkov-kursovaya-тех-карты-e/new' });
  this.route('i-i-s-gladkov-kursovaya-чертежи-l');
  this.route('i-i-s-gladkov-kursovaya-чертежи-e',
  { path: 'i-i-s-gladkov-kursovaya-чертежи-e/:id' });
  this.route('i-i-s-gladkov-kursovaya-чертежи-e.new',
  { path: 'i-i-s-gladkov-kursovaya-чертежи-e/new' });
});

export default Router;
