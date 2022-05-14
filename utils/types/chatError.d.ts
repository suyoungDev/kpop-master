declare type ChattingMessageErrorType =
  | 'tooFast'
  | Extract<keyof ValidityState, 'valueMissing' | 'tooShort' | 'tooLong'>;
