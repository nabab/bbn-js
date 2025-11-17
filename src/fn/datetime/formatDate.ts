import date from '../../date.js'  ;
export default function formatDate(dateToFormat, format) {
  const d = date(dateToFormat);
  if (!d.isValid) {
    return '';
  }

  return d.format(format);
};
