import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {createStore , applyMiddleware} from 'redux'
import Reducer from './Reducers/Reducer'
import thunk from 'redux-thunk'

//Instead of creating our own MiddleWare . Let's use Redux-thunk

// const logAction = store =>{
//     return next =>{
//         return action =>{
//             const result = next(action)
//             console.log(result)
//         }
//     }
// }

const store = createStore(Reducer, applyMiddleware(thunk))

ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
