import React, { useEffect, useState } from 'react';
import _, { random } from 'lodash';
import axios from 'axios';
// import Timer from '../Timer/Timer';
// import Answer from '../Answer/Answer';

const Start = () => {
  let random = _.random(0, 10);

  const [isLoading, setIsLoading] = useState(false);
  const [songList, setSongList] = useState();

  useEffect(() => {
    setIsLoading(true);

    const getSongs = async () => {
      const response = await axios.get('/api/chart/getSongs');
      setSongList(response.data.result);
      console.log(response.data.result);
    };

    getSongs();
  }, []);

  const timeOut = () => {
    setIsLoading(false);
  };

  window.setTimeout(timeOut, 2000);

  return (
    <div>
      {isLoading ? (
        <h1>..loading</h1>
      ) : (
        <div>
          <h1>rendered!</h1>
          <p>{random}</p>
        </div>
      )}
    </div>
  );
};
export default Start;
