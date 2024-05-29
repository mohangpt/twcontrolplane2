import { TranslatorContext, Storage } from 'react-jhipster';

import { setLocale } from 'app/shared/reducers/locale';

TranslatorContext.setDefaultLocale('en');
TranslatorContext.setRenderInnerTextForMissingKeys(false);

export const languages: any = {
  en: { name: 'English' },
  bn: { name: 'বাংলা' },
  ca: { name: 'Català' },
  'zh-cn': { name: '中文（简体）' },
  'zh-tw': { name: '繁體中文' },
  cs: { name: 'Český' },
  da: { name: 'Dansk' },
  nl: { name: 'Nederlands' },
  et: { name: 'Eesti' },
  fa: { name: 'فارسی', rtl: true },
  fi: { name: 'Suomi' },
  fr: { name: 'Français' },
  gl: { name: 'Galego' },
  de: { name: 'Deutsch' },
  el: { name: 'Ελληνικά' },
  hi: { name: 'हिंदी' },
  // jhipster-needle-i18n-language-key-pipe - JHipster will add/remove languages in this object
};

export const locales = Object.keys(languages).sort();

export const isRTL = (lang: string): boolean => languages[lang] && languages[lang].rtl;

export const registerLocale = store => {
  store.dispatch(setLocale(Storage.session.get('locale', 'en')));
};
