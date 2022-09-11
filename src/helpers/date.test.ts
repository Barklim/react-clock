import { getTime, changeTimeZone, getFormat } from './date'
import { Moscow } from '../constants';
import { arabic, roman } from '../components/Clock/constants'

const date = new Date();

const mockArabicFormat = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const mockRomanFormat = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];

export const checkTimeZone = (date: Date, timeZone: string) => {
    return new Date(
      date.toLocaleString('en-US', {
        timeZone,
      }),
    );
  }

describe('Validate date:', () => {
    test('Action GET_SECOND:', () => {
        expect(getTime(new Date(), 'GET_SECOND')).toBe(date.getSeconds() / 60)
    })
    test('Action GET_MINUTE:', () => {
        expect(getTime(new Date(), 'GET_MINUTE')).toBe(date.getMinutes() / 60)
    })
    test('Action GET_HOUR:', () => {
        expect(getTime(new Date(), 'GET_HOUR')).toBe(date.getHours() / 12)
    })
    test('Invalid action:', () => {
        expect(getTime(new Date(), 'abc')).not.toBeNull()
    })

    test('Valid timezone:', () => {
        expect(changeTimeZone(new Date(), Moscow)).toEqual(checkTimeZone(new Date, Moscow))
    })
    test('Invalid timezone:', () => {
        expect(changeTimeZone(new Date(), Moscow)).not.toBeNull()
    })

    test('Valid getFormat arabic:', () => {
        expect(getFormat(arabic)).toEqual(mockArabicFormat)
    })
    test('Valid getFormat roman:', () => {
        expect(getFormat(roman)).toEqual(mockRomanFormat)
    })
    test('Invalid getFormat invalid:', () => {
        expect(getFormat('abc')).not.toEqual(mockArabicFormat)
    })
})