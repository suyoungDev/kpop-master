declare type ChattingError =
  | 'tooFast'
  | Extract<keyof ValidityState, 'valueMissing' | 'tooShort' | 'tooLong'>;

declare type UserNameError = Extract<
  keyof ValidityState,
  'valueMissing' | 'tooShort' | 'tooLong'
>;

declare type CustomInputError<Key> = Record<Key, boolean>;
declare type InputError =
  | CustomInputError<ChattingError>
  | CustomInputError<UserNameError>;
