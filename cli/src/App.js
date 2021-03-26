import React from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';

import LandingPage from './pages/LandingPage/LandingPage';
import Start from './pages/Start/Start';
import NavBar from './pages/NavBar/NavBar';
import About from './pages/About/About';
import RankPage from './pages/RankPage/RankPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';

import { GameResultProvider } from './context/GameResultContext';
import { GameEndProvider } from './context/GameEndContext';
import { TrackListToPlayProvider } from './context/TrackListToPlayContext';
import { AuthProvider } from './context/AuthContext';
import { CommenttProvider } from './context/CommentContext';
import Auth from './hoc/auth';

import { GlobalStyle } from './components/GlobalStyle';

function App() {
  return (
    <AuthProvider>
      <CommenttProvider>
        <GameEndProvider>
          <GameResultProvider>
            <TrackListToPlayProvider>
              <BrowserRouter>
                <GlobalStyle />
                <NavBar />
                <Switch>
                  <Route exact path='/' component={Auth(LandingPage, null)} />
                  <Route exact path='/start' component={Auth(Start, null)} />
                  <Route exact path='/about' component={Auth(About, null)} />
                  <Route exact path='/rank' component={Auth(RankPage, null)} />
                  <Route
                    exact
                    path='/register'
                    component={Auth(RegisterPage, false)}
                  />
                  <Route path='*'>
                    <Redirect to='/' />
                  </Route>
                </Switch>
              </BrowserRouter>
            </TrackListToPlayProvider>
          </GameResultProvider>
        </GameEndProvider>
      </CommenttProvider>
    </AuthProvider>
  );
}

export default App;
