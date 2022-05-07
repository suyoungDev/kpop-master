import { SerializedStyles, css } from '@emotion/react';

type Props = {
  /** direction */
  dir: 'row' | 'column';
  /** justify-content
   * - sb: space-between
   * - sa: space-around
   */
  jc: 'sb' | 'sa' | 'center' | 'start' | 'end';
};

const JC = {
  sb: 'space-between',
  sa: 'space-around',
  center: 'center',
  start: 'flex-start',
  end: 'flex-end',
};
export const flex = ({
  dir = 'row',
  jc = 'center',
}: Partial<Props>): SerializedStyles => {
  return css`
    display: flex;
    flex-direction: ${dir};
    justify-content: ${JC[jc]};
  `;
};
