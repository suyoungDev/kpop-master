import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter,
  useLocation,
  Redirect,
} from 'react-router-dom';

import LandingPage from './pages/LandingPage/LandingPage';
import Start from './pages/Start/Start';
import NavBar from './pages/NavBar/NavBar';
import About from './pages/About/About';
import RankPage from './pages/RankPage/RankPage';
import Test from './pages/LandingPage/Test';

import { GameResultProvider } from './context/GameResultContext';
import { GameEndProvider } from './context/GameEndContext';
import { TrackListToPlayProvider } from './context/TrackListToPlayContext';
import { GamePlayProvider } from './context/GamePlayContext';

import './App.css';

function App() {
  return (
    <GameEndProvider>
      <GameResultProvider>
        <TrackListToPlayProvider>
          <GamePlayProvider>
            <BrowserRouter>
              <NavBar />
              <Switch>
                <Route exact path='/' component={LandingPage} />
                <Route exact path='/start' component={Start} />
                <Route exact path='/about' component={About} />
                <Route exact path='/rank' component={RankPage} />
                <Route exact path='/test' component={Test} />
                <Route path='*'>
                  <Redirect to='/' />
                </Route>
              </Switch>
            </BrowserRouter>
          </GamePlayProvider>
        </TrackListToPlayProvider>
      </GameResultProvider>
    </GameEndProvider>
  );
}

export default App;
