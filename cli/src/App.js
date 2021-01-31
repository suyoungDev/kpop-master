import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import LandingPage from './components/pages/LandingPage/LandingPage';
import Start from './components/pages/Start/Start';

import { GameResultProvider } from './components/GameResultContext/GameResultContext';
import { GameEndProvider } from './components/GamEndContext/GameEndContext';

function App() {
  return (
    <GameEndProvider>
      <GameResultProvider>
        <div className='App'>
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={LandingPage} />
              <Route exact path='/start' component={Start} />
            </Switch>
          </BrowserRouter>
        </div>
      </GameResultProvider>
    </GameEndProvider>
  );
}

export default App;
