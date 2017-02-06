import firebase from 'firebase';

export const LOGGING_IN = 'LOGGING_IN';
export const LOGGED_IN = 'LOGGED_IN';
export const CREATING_ACCOUNT = 'CREATING_ACCOUNT';
export const ERROR = 'ERROR';
export const CREATED_ACCOUNT = 'CREATED_ACCOUNT';

export function registerWithEmail(email, password){
  return (dispatch,_,firebaseApp)=>{
    dispatch({ type: CREATING_ACCOUNT});
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .then((user) => {
        dispatch({ type: CREATED_ACCOUNT, user });
        user.sendEmailVerification();
      })
      .catch(err => dispatch({ type: ERROR, error: err.toString() }));
  };
}

export function loginWithEmail(email, password){
  return (dispatch,_,firebaseApp)=>{
    dispatch({ type: LOGGING_IN});
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        dispatch({ type: LOGGED_IN, user });
      })
      .catch(err => dispatch({ type: ERROR, error: err.toString() }));
  };
}

export function loginWithFacebook(accessToken){
  return (dispatch,_,firebaseApp)=>{
    dispatch({ type: LOGGING_IN});
    const credential = firebase.auth.FacebookAuthProvider.credential(accessToken);
    firebaseApp.auth().signInWithCredential(credential).then((user) => {
      dispatch({ type: LOGGED_IN, user });
    }).catch((error) => {
      console.log(error);
    });
  }
}
