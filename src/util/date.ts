import { format, register, TDate } from 'timeago.js';
import koLocale from 'timeago.js/lib/lang/ko';

register('ko', koLocale);

export const formatAgo = (date: TDate, lang = 'en_US') => {
  return format(date, lang);
};
