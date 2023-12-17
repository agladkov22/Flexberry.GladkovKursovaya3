import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISGladkov_KursovayaЗаявкиLForm from './forms/i-i-s-gladkov-kursovaya-заявки-l';
import IISGladkov_KursovayaКлиентыLForm from './forms/i-i-s-gladkov-kursovaya-клиенты-l';
import IISGladkov_KursovayaМатериалыLForm from './forms/i-i-s-gladkov-kursovaya-материалы-l';
import IISGladkov_KursovayaОборудованиеLForm from './forms/i-i-s-gladkov-kursovaya-оборудование-l';
import IISGladkov_KursovayaСкладыLForm from './forms/i-i-s-gladkov-kursovaya-склады-l';
import IISGladkov_KursovayaТехКартыLForm from './forms/i-i-s-gladkov-kursovaya-тех-карты-l';
import IISGladkov_KursovayaЧертежиLForm from './forms/i-i-s-gladkov-kursovaya-чертежи-l';
import IISGladkov_KursovayaЗаявкиEForm from './forms/i-i-s-gladkov-kursovaya-заявки-e';
import IISGladkov_KursovayaКлиентыEForm from './forms/i-i-s-gladkov-kursovaya-клиенты-e';
import IISGladkov_KursovayaМатериалыEForm from './forms/i-i-s-gladkov-kursovaya-материалы-e';
import IISGladkov_KursovayaОборудованиеEForm from './forms/i-i-s-gladkov-kursovaya-оборудование-e';
import IISGladkov_KursovayaСкладыEForm from './forms/i-i-s-gladkov-kursovaya-склады-e';
import IISGladkov_KursovayaТехКартыEForm from './forms/i-i-s-gladkov-kursovaya-тех-карты-e';
import IISGladkov_KursovayaЧертежиEForm from './forms/i-i-s-gladkov-kursovaya-чертежи-e';
import IISGladkov_KursovayaЗаявкиModel from './models/i-i-s-gladkov-kursovaya-заявки';
import IISGladkov_KursovayaКлиентыModel from './models/i-i-s-gladkov-kursovaya-клиенты';
import IISGladkov_KursovayaМатериалыModel from './models/i-i-s-gladkov-kursovaya-материалы';
import IISGladkov_KursovayaОборудованиеModel from './models/i-i-s-gladkov-kursovaya-оборудование';
import IISGladkov_KursovayaСкладыModel from './models/i-i-s-gladkov-kursovaya-склады';
import IISGladkov_KursovayaТехКартыModel from './models/i-i-s-gladkov-kursovaya-тех-карты';
import IISGladkov_KursovayaТчТехКартыModel from './models/i-i-s-gladkov-kursovaya-тч-тех-карты';
import IISGladkov_KursovayaЧертежиModel from './models/i-i-s-gladkov-kursovaya-чертежи';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-gladkov-kursovaya-заявки': IISGladkov_KursovayaЗаявкиModel,
    'i-i-s-gladkov-kursovaya-клиенты': IISGladkov_KursovayaКлиентыModel,
    'i-i-s-gladkov-kursovaya-материалы': IISGladkov_KursovayaМатериалыModel,
    'i-i-s-gladkov-kursovaya-оборудование': IISGladkov_KursovayaОборудованиеModel,
    'i-i-s-gladkov-kursovaya-склады': IISGladkov_KursovayaСкладыModel,
    'i-i-s-gladkov-kursovaya-тех-карты': IISGladkov_KursovayaТехКартыModel,
    'i-i-s-gladkov-kursovaya-тч-тех-карты': IISGladkov_KursovayaТчТехКартыModel,
    'i-i-s-gladkov-kursovaya-чертежи': IISGladkov_KursovayaЧертежиModel
  },

  'application-name': 'Gladkov_ kursovaya',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Gladkov_ kursovaya',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Gladkov_ kursovaya',
          title: 'Gladkov_ kursovaya'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'gladkov-kursovaya': {
          caption: 'Gladkov_Kursovaya',
          title: 'Gladkov_Kursovaya',
          'i-i-s-gladkov-kursovaya-склады-l': {
            caption: 'Склады',
            title: ''
          },
          'i-i-s-gladkov-kursovaya-оборудование-l': {
            caption: 'Оборудование',
            title: ''
          },
          'i-i-s-gladkov-kursovaya-чертежи-l': {
            caption: 'Чертежи',
            title: ''
          },
          'i-i-s-gladkov-kursovaya-клиенты-l': {
            caption: 'Клиенты',
            title: ''
          },
          'i-i-s-gladkov-kursovaya-материалы-l': {
            caption: 'Материалы',
            title: ''
          },
          'i-i-s-gladkov-kursovaya-тех-карты-l': {
            caption: 'Тех карты',
            title: ''
          },
          'i-i-s-gladkov-kursovaya-заявки-l': {
            caption: 'Заявки',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-gladkov-kursovaya-заявки-l': IISGladkov_KursovayaЗаявкиLForm,
    'i-i-s-gladkov-kursovaya-клиенты-l': IISGladkov_KursovayaКлиентыLForm,
    'i-i-s-gladkov-kursovaya-материалы-l': IISGladkov_KursovayaМатериалыLForm,
    'i-i-s-gladkov-kursovaya-оборудование-l': IISGladkov_KursovayaОборудованиеLForm,
    'i-i-s-gladkov-kursovaya-склады-l': IISGladkov_KursovayaСкладыLForm,
    'i-i-s-gladkov-kursovaya-тех-карты-l': IISGladkov_KursovayaТехКартыLForm,
    'i-i-s-gladkov-kursovaya-чертежи-l': IISGladkov_KursovayaЧертежиLForm,
    'i-i-s-gladkov-kursovaya-заявки-e': IISGladkov_KursovayaЗаявкиEForm,
    'i-i-s-gladkov-kursovaya-клиенты-e': IISGladkov_KursovayaКлиентыEForm,
    'i-i-s-gladkov-kursovaya-материалы-e': IISGladkov_KursovayaМатериалыEForm,
    'i-i-s-gladkov-kursovaya-оборудование-e': IISGladkov_KursovayaОборудованиеEForm,
    'i-i-s-gladkov-kursovaya-склады-e': IISGladkov_KursovayaСкладыEForm,
    'i-i-s-gladkov-kursovaya-тех-карты-e': IISGladkov_KursovayaТехКартыEForm,
    'i-i-s-gladkov-kursovaya-чертежи-e': IISGladkov_KursovayaЧертежиEForm
  },

});

export default translations;
