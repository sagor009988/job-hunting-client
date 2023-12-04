// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey:import.meta.env.VITE_APIKEY,
//   authDomain:import.meta.env.VITE_AUTHDOMAIN,
//   projectId:import.meta.env.VITE_PROJECTID,
//   storageBucket:import.meta.env.VITE_STORAGEBUCKET,
//   messagingSenderId:import.meta.env.VITE_MESSAGINGSENDERID,
//   appId:import.meta.env.VITE_APPID,
// };
const firebaseConfig = {
  apiKey: "AIzaSyCbLEnbOf-_D8ck1AqCiqnuc9CINhyxfZM",
  authDomain: "job-seeking-web.firebaseapp.com",
  projectId: "job-seeking-web",
  storageBucket: "job-seeking-web.appspot.com",
  messagingSenderId: "171229348135",
  appId: "1:171229348135:web:2d8c35bb91c28259a56902"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;