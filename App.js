import React, { Component } from 'react'
import { View, Text, Platform, StatusBar } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
// import { createTabNavigator, createStackNavigator } from 'react-navigation'
import reducers from './reducers'
import { purple, white } from './utils/colors'
import { Constants } from 'expo'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { setLocalNotification } from './utils/helpers'
import DeckList from './components/DeckList'


export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{ flex: 1 }} >
          <View style={{ backgroundColor: purple, height: Constants.statusBarHeight }}>
            <StatusBar translucent backgroundColor={purple} barStyle='light-content' />
          </View>
          <DeckList />
        </View>
      </Provider>
    );
  }
}
