import {AsyncStorage} from 'react-native'

const DECKS_KEY = 'DECKS_KEY'

const data = {
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
    }
  }

export const getData = () => {
    return data
}

export const saveDeckTitle = title => {
  return AsyncStorage.getItem(DECKS_KEY, JSON.stringify({
    [title]: {
      title,
      questions: []
    }
  }))
}