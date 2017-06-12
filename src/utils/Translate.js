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
  return getTranslationFromKey(key, locale);
}

function getTranslationFromKey(key, locale) {
  const splittedKey = key.split('.');
  let translation = locale[splittedKey[0]];

  for(let i = 1; i < splittedKey.length; i++) {
    translation = translation[splittedKey[i]];
  }

  return translation || key;
}
