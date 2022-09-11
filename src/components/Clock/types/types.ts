export enum ActionKind {
    SET_SECOND = 'SET_SECOND',
    SET_MINUTE = 'SET_MINUTE',
    SET_HOUR = 'SET_HOUR',
  }

export type Action = {
  type: ActionKind;
  payload: number;
}

export enum FormatDigits {
  arabic = 'arabic',
  roman = 'roman'
}

export type ContentProps = {
  format: string
}