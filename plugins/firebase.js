  import * as firebase from 'firebase/app'
  import 'firebase/auth'
  
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB-XhAzTORgiS6AUcmbUNVyKovuWvqwnQo",
    authDomain: "nuxt-app-77150.firebaseapp.com",
    projectId: "nuxt-app-77150",
    storageBucket: "nuxt-app-77150.appspot.com",
    messagingSenderId: "520889630226",
    appId: "1:520889630226:web:848a35cfb76441b7c3e2cb",
    measurementId: "G-HJCPME6DFT"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  export default firebase