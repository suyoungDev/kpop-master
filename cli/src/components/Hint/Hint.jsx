import React, { useEffect, useState } from 'react';

const Hint = ({ trackName }) => {
  const [givenHints, setGivenHints] = useState('');

  useEffect(() => {
    let result = '';

    if (trackName.length < 7) {
      englishRegex.test(trackName)
        ? (result = englishHint(trackName, 1))
        : (result = getKoreanInitials(trackName));
    } else {
      englishRegex.test(trackName)
        ? (result = englishHint(trackName))
        : (result = getKoreanInitials(trackName));
    }

    setGivenHints(result);
    // eslint-disable-next-lin
  }, [trackName]);

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
    let hintString = Array(string.length).fill('_');
    let hintsRemainig = hints;

    while (hintsRemainig) {
      const i = Math.floor(Math.random() * hintString.length);
      if (hintString[i] === '_') {
        hintString[i] = string.charAt(i);
        hintsRemainig--;
      }
    }

    return hintString.join('');
  };

  return <div>{givenHints}</div>;
};

export default Hint;
