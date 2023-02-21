import React from 'react';
import ReactDOM from 'react-dom/client';
//import '../src/scss/style.scss';
//import '../src/scss/index.css'
import '../src/scss/style.css'

import App from './App';
//import 'react-toastify/dist/ReactToastify.css';
import './css/team.css'

//import 'react-circular-progressbar/dist/styles.css';
//import { ToastContainer,toast } from 'react-toastify';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);