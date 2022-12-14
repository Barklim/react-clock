import { Moscow } from "../../constants";

export const url = `https://worldtimeapi.org/api/timezone/${Moscow}`;

export const initDelay = 2000;
export const intervalDelay = 1000;

export const errMessage = 'Something wrong';

export const arabicFormat = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
export const romanFormat = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];
export const emojiFormat = ['😎', '✨', '🥺', '❤️', ' 😂', '🙏', '😍', '🤣', '🥰', '🔥', '😭', '👍'];
export const arabic = 'arabic';
export const roman = 'roman';
export const emoji = 'emoji';

export const initialState = {
    secondRatio: 0,
    minuteRatio: 0,
    hourRatio: 0
};
