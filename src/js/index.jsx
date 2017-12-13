import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers/reducers'
import App from './components/App.jsx'




// let initialState = () => {
//     if (sessionStorage.getItem('data')){
//         return JSON.parse(sessionStorage.getItem('data'));
//     }
// };

let store = createStore(todoApp,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// store.subscribe( () => {
//     sessionStorage.setItem('data', JSON.stringify(store.getState()));
// });

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)



