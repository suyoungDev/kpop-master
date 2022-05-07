import { SerializedStyles, css } from '@emotion/react';

type Props = {
  property?: string;
  duration?: number;
};

/** number: ms 단위 */
export const transition = ({
  property = 'all',
  duration = 300,
}: Props): SerializedStyles => css`
  transition-property: ${property};
  transition-duration: ${duration};
  transition-timing-function: ease;
`;
