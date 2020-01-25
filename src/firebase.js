import * as firebaseApp from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCk3pmljVh_oTojv1Dwmm53QaJYBqTUWLM",
  authDomain: "dimas-landscaping.firebaseapp.com",
  databaseURL: "https://dimas-landscaping.firebaseio.com",
  projectId: "dimas-landscaping",
  storageBucket: "dimas-landscaping.appspot.com",
  messagingSenderId: "228270149669",
  appId: "1:228270149669:web:4952321c437ee558eb2fcc"
};

const firebase = firebaseApp.initializeApp(firebaseConfig);
export default firebase;

/*
https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial
Need to set up ENV for more secure application
*/