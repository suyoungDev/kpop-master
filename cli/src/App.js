import React, { useEffect, useState } from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';

import LandingPage from './pages/LandingPage/LandingPage';
import Start from './pages/Start/Start';
import NavBar from './pages/NavBar/NavBar';
import About from './pages/About/About';
import RankPage from './pages/RankPage/RankPage';
import Test from './pages/LandingPage/Test';
import RegisterPage from './pages/RegisterPage/RegisterPage';

import { GameResultProvider } from './context/GameResultContext';
import { GameEndProvider } from './context/GameEndContext';
import { TrackListToPlayProvider } from './context/TrackListToPlayContext';
import { GamePlayProvider } from './context/GamePlayContext';
import { CurrentUserProvider } from './context/CurrentUserContext';

import { auth } from './firebase/firebase.utils';

import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <CurrentUserProvider>
      <GameEndProvider>
        <GameResultProvider>
          <TrackListToPlayProvider>
            <GamePlayProvider>
              <BrowserRouter>
                <NavBar currentUser={currentUser} />
                <Switch>
                  <Route exact path='/' component={LandingPage} />
                  <Route exact path='/start' component={Start} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/rank' component={RankPage} />
                  <Route exact path='/test' component={Test} />
                  <Route exact path='/register' component={RegisterPage} />
                  <Route path='*'>
                    <Redirect to='/' />
                  </Route>
                </Switch>
              </BrowserRouter>
            </GamePlayProvider>
          </TrackListToPlayProvider>
        </GameResultProvider>
      </GameEndProvider>
    </CurrentUserProvider>
  );
}

export default App;
