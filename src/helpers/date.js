export function getTime(date, action) {
  switch (action) {
    case 'GET_SECOND':
      return date.getSeconds() / 60;
    case 'GET_MINUTE':
      return date.getMinutes() / 60;
    case 'GET_HOUR':
      return date.getHours() / 12;
    default:
      throw new Error();
  }
}