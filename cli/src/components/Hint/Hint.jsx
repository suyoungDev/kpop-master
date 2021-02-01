import React from 'react';
import _ from 'lodash';

const Hint = ({ currentSong }) => {
  let givenHints = '';

  const englishRegex = /\w/g;

  const getKoreanInitials = (string) => {
    return string
      .split('')
      .map((char) => {
        const index = (char.charCodeAt(0) - 44032) / 28 / 21;
        if (index >= 0) return String.fromCharCode(index + 4352);
        return char;
      })
      .join('');
  };

  const englishHint = (string, hints = 3) => {
    let hintString = string.replaceAll(/./g, '_');
    let hintsRemainig = hints;

    while (hintsRemainig) {
      const i = Math.floor(Math.random() * hintString.length);
      if (hintString.charAt(i) === '_') {
        hintString =
          hintString.substring(0, i) +
          string.charAt(i) +
          hintString.substring(i + 1);
        hintsRemainig--;
      }
    }

    return hintString;
  };
  console.log('힌트에서 업뎃됨');
  return (
    <div>
      {englishRegex.test(currentSong)
        ? englishHint(currentSong)
        : () => getKoreanInitials(currentSong)}
    </div>
  );
};

export default Hint;
