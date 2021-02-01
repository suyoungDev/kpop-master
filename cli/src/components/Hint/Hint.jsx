import React, { useContext, useEffect, useState } from 'react';

const Hint = ({ trackName }) => {
  const [givenHints, setGivenHints] = useState('');

  useEffect(() => {
    let result = '';

    if (trackName.length < 7) {
      englishRegex.test(trackName)
        ? (result = englishHint(trackName, 2))
        : (result = getKoreanInitials(trackName));
    } else {
      englishRegex.test(trackName)
        ? (result = englishHint(trackName))
        : (result = getKoreanInitials(trackName));
    }

    setGivenHints(result);
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

  return <div>{givenHints}</div>;
};

export default Hint;
