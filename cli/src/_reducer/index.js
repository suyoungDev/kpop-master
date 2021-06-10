import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import user from './user_reducer';

const rootReducer = combineReducers({
  user,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, promise))
);

export default store;
