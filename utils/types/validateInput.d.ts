declare type ValidateInput<L extends string, I extends string> = {
  label: L;
  id: I;
  isError: boolean;
};

declare type TrackValidateInput = ValidateInput<TrackLabel, TrackKey> &
  import('react').InputHTMLAttributes<HTMLInputElement>;
