// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
console.log('environment variable',import .meta.env.VITE_PASS);

const firebaseConfig = {
  apiKey: "AIzaSyDC8PNkOgxHKZCnPMhypQpktgDbp3ChRN0",
  authDomain: "cheif-recipe-hunter-client.firebaseapp.com",
  projectId: "cheif-recipe-hunter-client",
  storageBucket: "cheif-recipe-hunter-client.appspot.com",
  messagingSenderId: "248026107272",
  appId: "1:248026107272:web:29e5a6df3d8438aa8e7e3d"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;