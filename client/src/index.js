import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDHrrxN9-pEwCbjr5qufo_-EGPkWSkrdj0",
  authDomain: "photo-sharing-app1.firebaseapp.com",
  projectId: "photo-sharing-app1",
  storageBucket: "photo-sharing-app1.appspot.com",
  messagingSenderId: "785465995208",
  appId: "1:785465995208:web:9639e00fd18e7b0f511afd",
  measurementId: "G-SWK2XBHNXH"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
