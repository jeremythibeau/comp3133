import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Greeter from './Greeter'
import LikeButton from './LikeButton'

ReactDOM.render(
  <React.StrictMode>
    <>
     <Display/>
    </>
  </React.StrictMode>,
  document.getElementById('root')
);

function Display() {
  var items = [];
  items.push(<Greeter/>)
  for(var index = 0; index< 10; index++) items.push(<LikeButton/>)
  return (items)
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
