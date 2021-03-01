import React, { useState, createContext } from 'react';

export const TrackListToPlayContext = createContext();

export const TrackListToPlayProvider = (props) => {
  const [trackListToPlay, setTrackListToPlay] = useState({
    trackList: [],
    theme: [],
  });

  return (
    <TrackListToPlayContext.Provider
      value={[trackListToPlay, setTrackListToPlay]}
    >
      {props.children}
    </TrackListToPlayContext.Provider>
  );
};
