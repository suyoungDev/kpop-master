declare type TrackInputField = {
  label: string;
  isError: boolean;
  id: TrackKey;
} & import('react').InputHTMLAttributes<HTMLInputElement>;
