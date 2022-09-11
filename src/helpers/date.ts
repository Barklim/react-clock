import { arabicFormat, romanFormat, arabic, errMessage } from '../components/Clock/constants';
import { getErrorMessage } from './errorHandler'

export function getTime(date: Date, action: string) {
  switch (action) {
    case 'GET_SECOND':
      return date.getSeconds() / 60;
    case 'GET_MINUTE':
      return date.getMinutes() / 60;
    case 'GET_HOUR':
      return date.getHours() / 12;
    default:
      getErrorMessage(errMessage);
  }
}

export const getFormat = (format: string) => format === arabic ? arabicFormat : romanFormat

export const changeTimeZone = (date: Date, timeZone: string) => {
  if (typeof date === 'string') {
    return new Date(
      new Date(date).toLocaleString('en-US', {
        timeZone,
      }),
    );
  }

  return new Date(
    date.toLocaleString('en-US', {
      timeZone,
    }),
  );
}