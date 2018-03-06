import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCKLI7xuwlkxsIv1O6ciaX482dGXn-PANs',
      authDomain: 'manager-a63a6.firebaseapp.com',
      databaseURL: 'https://manager-a63a6.firebaseio.com',
      projectId: 'manager-a63a6',
      storageBucket: 'manager-a63a6.appspot.com',
      messagingSenderId: '383789175211'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
          <Router />
      </Provider>
    );
  }
}

export default App;
