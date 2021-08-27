import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import authReducer from "../reducers/auth";
import workoutReducer from '../reducers/workout';
import dietReducer from '../reducers/diet';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configStore = () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      workout: workoutReducer,  
      diet: dietReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};

export default configStore;
