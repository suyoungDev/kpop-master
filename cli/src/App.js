import './App.css';
import LandingPage from './components/pages/LandingPage/LandingPage';
import Start from './components/pages/Start/Start';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/start' component={Start} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
