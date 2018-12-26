import React from 'react';
import ReactDOM from 'react-dom'; //根DOM节点，只有一个
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import TodoApp from './TodoApp/TodoApp'


ReactDOM.render(
    <TodoApp/>,
    document.getElementById('jsxExample')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
