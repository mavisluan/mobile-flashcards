//utils/decks.js

import { AsyncStorage } from 'react-native';

export const DECKS_STORAGE_KEY = 'MobileFlashcards:decks';

export const setDummyData = (results) => {
  let dummyData = {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    },
    Redux: {
      title: 'Redux',
      questions: [
        {
          question: 'What is a reducer?',
          answer: "Reducers specify how the application's state changes in response to actions sent to the store."
        },
        {
          question: 'What is an action?',
          answer: 'Actions are payloads of information that send data from your application to your store.  '
        }
      ]
    },
  }

  if (results == null) {
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(dummyData));
    return dummyData;
  } else {
    return JSON.parse(results);
  }
}
