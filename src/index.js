import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Library from './components/Library';

ReactDOM.render(<Library/>, document.getElementById('myBooks'));

serviceWorker.unregister();
