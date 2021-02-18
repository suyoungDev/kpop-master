import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import LandingPage from './pages/LandingPage/LandingPage';
import Start from './pages/Start/Start';
import NavBar from './pages/NavBar/NavBar';
import About from './pages/About/About';
import RankPage from './pages/RankPage/RankPage';

import { GameResultProvider } from './context/GameResultContext/GameResultContext';
import { GameEndProvider } from './context/GamEndContext/GameEndContext';

function App() {
  return (
    <GameEndProvider>
      <GameResultProvider>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/start' component={Start} />
            <Route exact path='/about' component={About} />
            <Route exact path='/rank' component={RankPage} />
          </Switch>
        </BrowserRouter>
      </GameResultProvider>
    </GameEndProvider>
  );
}

export default App;
