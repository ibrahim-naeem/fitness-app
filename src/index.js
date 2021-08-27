
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, { history } from "./routers/AppRouter";
import configStore from "./store/configStore";
import { Provider } from "react-redux";
import { firebase } from "./firebase/firebase";
import { login, loginTrainer, logout } from './actions/auth';
import { startSetWorkout } from "./actions/workout";
import {startSetDiet} from './actions/diet';




//Gmail Account for Firebase
// poseemtimation@gmail.com // projectApp//.....


//Bootstrap__CSS__File__//
import "bootstrap/dist/css/bootstrap.min.css";

//Store__Config__//
export const  store = configStore();



const App = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
 





firebase.auth().onAuthStateChanged((user) => {

  if (user) {

    const trainer = localStorage.getItem("trainer");
    

    if (trainer) {
      store.dispatch(loginTrainer(user.uid, user.displayName));
      store.dispatch(startSetWorkout());
      store.dispatch(startSetDiet());
      console.log("trainer-login-id =>", user.uid, user.displayName);

      
      
      
    } else {
      store.dispatch(login(user.uid));
      console.log("user-login-id =>", user.uid);
    }
    

    // history.push('/Home')
    if (history.location.pathname === '/') {
      history.push("Home");
    }

  } else {
    console.log('logout')
    store.dispatch(logout());
    history.push("/");
  }
})

ReactDOM.render(App ,document.getElementById('root'));



