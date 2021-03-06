import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { rentalReducer, selectedRentalReducer } from './rental-reducer';
import thunk from 'redux-thunk';

export const init = () => {
  
  const reducer = combineReducers({
    rentals: rentalReducer,
    rental: selectedRentalReducer
  });
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

  return store;
}