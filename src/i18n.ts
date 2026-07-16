import {getRequestConfig} from 'next-intl/server';
import {notFound} from 'next/navigation';

export const locales = ['kh', 'en', 'vi', 'zh', 'hi', 'ja', 'ko', 'ar'];

export default getRequestConfig(async ({locale}: {locale: string}) => {
  if (!locales.includes(locale)) notFound();

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
