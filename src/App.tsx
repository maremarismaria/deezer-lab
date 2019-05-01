import React, {FC} from 'react';
import {Player} from './components/Player';
import {
  DEEZER_URL,
  DEEZER_URL_FAVORITES,
  DEEZER_URL_OPTIONS,
  DEEZER_URL_RADIO,
  USER_ID,
  USERNAME
} from './constants';
import './App.css';

const App: FC = () => {
  return (
    <div className='App'>
      <Player url={`${DEEZER_URL}${DEEZER_URL_OPTIONS}`.concat(
          USER_ID && USERNAME
            ? DEEZER_URL_FAVORITES
            : DEEZER_URL_RADIO
        )}
      />
    </div>
  );
};

export default App;
