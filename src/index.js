import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import { FirebaseAppProvider } from 'reactfire';

export const firebaseConfig = {
  apiKey: "AIzaSyC9JhGXCWFVoPRJzn_FTcnDeWUX-K3ImNk",
    authDomain: "portugues-ludico.firebaseapp.com",
    databaseURL: "https://portugues-ludico.firebaseio.com",
    projectId: "portugues-ludico",
    storageBucket: "portugues-ludico.appspot.com",
    messagingSenderId: "121330762647",
    appId: "1:121330762647:web:cb79b68c257610ebecbad2"
}

export const stripePromise = loadStripe(
  'pk_test_ea2ZHor0mDdlWuAGNBxlej7V00m3Oq4BBm'
);

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
