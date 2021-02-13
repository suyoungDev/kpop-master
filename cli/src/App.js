import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import LandingPage from './pages/LandingPage/LandingPage';
import Start from './pages/Start/Start';
import Test from './pages/LandingPage/Test';
import OutroPage from './pages/OutroPage/OutroPage';

import { GameResultProvider } from './context/GameResultContext/GameResultContext';
import { GameEndProvider } from './context/GamEndContext/GameEndContext';

function App() {
  return (
    <GameEndProvider>
      <GameResultProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/start' component={Start} />
            <Route exact path='/test' component={Test} />
            <Route exact path='/outro' component={OutroPage} />
          </Switch>
        </BrowserRouter>
      </GameResultProvider>
    </GameEndProvider>
  );
}

export default App;
