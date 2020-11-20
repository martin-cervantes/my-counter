import './css/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import counterReducer from './reducers';

import Counter from './containers/Counter';

const store = createStore(counterReducer);

const App = () => (
  <Provider store={store}>
    <Counter/>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
