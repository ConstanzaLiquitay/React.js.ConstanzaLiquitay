import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from  "firebase/app";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter} from 'react-router-dom';
import App from './App.jsx';
import './index.css'

const firebaseConfig = {
  apiKey: "AIzaSyD5aVeNOlG9pFfrsCf_1B-hYLoR_asvQ-E",
  authDomain: "coder-react-1c265.firebaseapp.com",
  projectId: "coder-react-1c265",
  storageBucket: "coder-react-1c265.appspot.com",
  messagingSenderId: "1096153978027",
  appId: "1:1096153978027:web:dd0b8992fff0236e45d3ee"
};

initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> 
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);
