
import { firebase, googleAuthProvider } from '../firebase/firebase';

export const login = (uid) => ({
  type: "LOGIN",
  uid,
});

export const loginTrainer = (uid, name) => ({
  type: "LOGINTT",
  trainer: true,
  uid,
  name
});


export var trainer;
export const loginWithGoogle = () => {
    return () => {
    localStorage.setItem("trainer", 123);
        
        
        // trainer = true;

        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};

export const SignInWithEmail = (email, password) => {
  return () => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((u) => {
        console.log("Successfully Logged In");
      })
      .catch((err) => {
        console.log(err.message)
        const p = document.createElement("p");
        p.className = "errMessage";
        p.textContent = `ERROR : ${err.message}`;
        document.querySelector(".errShow").append(p);
      });
  };
};
export const LogInWithEmail = (email, password) => {
  return () => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((u) => {
        console.log("Successfully Logged In");
      })
      .catch((err) => {
        console.log(err.message);
        const p = document.createElement('p')
        p.className = "errMessage";
        p.textContent = `ERROR : ${err.message}`
        document.querySelector('.errShow').append(p);
      });;
  };
};




export const logout = () => ({
  type: "LOGOUT",
});

export const startLogout = () => {
    return () => {
        localStorage.removeItem("trainer");
     return firebase.auth().signOut();   
    }
}







