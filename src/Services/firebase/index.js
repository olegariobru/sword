import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyCKYhDwHAEgZrS0pbtdfUH-qRQnaOZYMBo",
  authDomain: "centeruser-57327.firebaseapp.com",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }; 