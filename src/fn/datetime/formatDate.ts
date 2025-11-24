import dt from '../../dt.js'  ;
export default function formatDate(dateToFormat, format) {
  const d = dt(dateToFormat);
  if (!d.isValid) {
    return '';
  }

  return d.format(format);
};
