import React from 'react';
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
import { AuthProvider } from './context/AuthContext';

import './App.css';

function App() {
  return (
    <AuthProvider>
      <GameEndProvider>
        <GameResultProvider>
          <TrackListToPlayProvider>
            <BrowserRouter>
              <NavBar />
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
          </TrackListToPlayProvider>
        </GameResultProvider>
      </GameEndProvider>
    </AuthProvider>
  );
}

export default App;
