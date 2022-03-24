import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD-ydISupeJIsa-dKcWOyB1cqcC2vXPYqA",
    authDomain: "linkedin-clone-david.firebaseapp.com",
    projectId: "linkedin-clone-david",
    storageBucket: "linkedin-clone-david.appspot.com",
    messagingSenderId: "447540964730",
    appId: "1:447540964730:web:137ad31b082fcef5b1bac3"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };