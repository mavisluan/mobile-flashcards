import React, { Component } from 'react'
import { View, Text, Platform, StatusBar } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import reducers from './reducers'
import { purple, white } from './utils/colors'
import { Constants } from 'expo'
import { FontAwesome, Feather, SimpleLineIcons } from '@expo/vector-icons'
import { setLocalNotification } from './utils/helpers'
import DeckList from './components/DeckList'
import NewDeck from './components/NewDeck'
// import DeckDetails from './components/DeckDetails'
import * as Colors from './utils/colors'

const Tabs = createBottomTabNavigator ({
  Decks: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => (
        <SimpleLineIcons name='layers' size={30} color={tintColor} />
      ),
    },
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      tabBarIcon: ({ tintColor }) => (
        <Feather name='plus-square' size={30} color={tintColor} />
      ),
    },
  },
})


export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{ flex: 1 }} >
          <View style={{ backgroundColor: purple, height: Constants.statusBarHeight }}>
            <StatusBar translucent backgroundColor={purple} barStyle='light-content' />
          </View>
          <Tabs />
        </View>
      </Provider>
    )
  }
}
