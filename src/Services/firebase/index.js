import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCKYhDwHAEgZrS0pbtdfUH-qRQnaOZYMBo",
    authDomain: "centeruser-57327.firebaseapp.com",
    projectId: "centeruser-57327",
    storageBucket: "centeruser-57327.firebasestorage.app",
    messagingSenderId: "527460356525",
    appId: "1:527460356525:web:07dfd547c1caf30571d124"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  export {auth};
  