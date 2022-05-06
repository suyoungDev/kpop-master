type ReactInput = import('react').InputHTMLAttributes<HTMLInputElement>;

declare type PlaylistInputFields = {
  label: string;
  isError: boolean;
  id: TrackKey;
} & ReactInput;
