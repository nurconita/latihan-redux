import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import CounterApp from './src/CounterApp';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const inisialState = {
  counter:0
}

const reducer = (state = inisialState, action) =>{
  switch(action.type){
    case 'INCREASE_COUNTER':
    return{ counter: state.counter + 1 }
    case 'DECREASE_COUNTER':
    return{ counter: state.counter - 1 }
  }
  return state
}

const store = createStore(reducer)

class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <CounterApp/>
      </Provider>
    )
  }
}

export default App

