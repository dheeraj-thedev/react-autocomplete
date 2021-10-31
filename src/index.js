import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/PostPage';
import reportWebVitals from './reportWebVitals';
import '../src/App.css'


// api will get ou the color

const header=["red", "green","blue","yello","black"]

function randomIndex(min,max){
  min = Math.ceil(min);
  max = Math.floor(max)
  return Math.random()*(max-min+1)+min;
};

ReactDOM.render(
  <React.StrictMode>
    {console.log("Random Number"+header[Math.floor(Math.random()*header.length)])}
    <App headerColor={header[Math.floor(Math.random()*header.length)]} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
