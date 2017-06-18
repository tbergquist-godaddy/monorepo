import { english } from './locales/English';
import { norwegian } from './locales/Norwegian';
const language = navigator.languages ? navigator.languages[0].split('-')[0] : navigator.language;

export default function translate(key) {
  let locale;
  switch (language) {
    case 'nb':
      locale = norwegian;
      break;
    default:
      locale = english;
      break;
  }
  return key.split('.').reduce((item, key) => {
    if (!item) {
      return locale[key]
    }
    return item[key];
  }, null);
}

