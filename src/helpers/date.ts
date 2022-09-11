import { arabicFormat, romanFormat, arabic } from '../components/Clock/constants';

export function getTime(date: Date, action: string) {
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

export const getFormat = (format: string) => format === arabic ? arabicFormat : romanFormat