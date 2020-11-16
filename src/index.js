import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware, ConnectedRouter} from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './Reducers/rootReducer';
import runSaga from './Sagas/';
import './index.css'

const sagaMiddleware = createSagaMiddleware();
const history = createBrowserHistory();
const middlewares = [sagaMiddleware, routerMiddleware(history)];
const store = createStore(
  rootReducer(history),
  composeWithDevTools(applyMiddleware(...middlewares))
)
sagaMiddleware.run(runSaga)

const app = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();